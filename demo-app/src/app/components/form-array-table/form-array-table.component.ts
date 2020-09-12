import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

import { CommonServiceService } from './../../services/common-service.service';

@Component({
  selector: 'app-form-array-table',
  templateUrl: './form-array-table.component.html',
  styleUrls: ['./form-array-table.component.scss'],
})
export class FormArrayTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private selectionArray: any[] = [];

  public form: FormGroup;
  public dataSource: MatTableDataSource<any>;
  public displayedColumns = ['select', 'id', 'title'];
  public selection = new SelectionModel<Element>(true, []);

  constructor(
    private albumService: CommonServiceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    this.form = this.formBuilder.group({
      albums: this.formBuilder.array([]),
    });
    this.albumService.getAllAsFormArray().subscribe((albums) => {
      this.form.setControl('albums', albums);
      this.dataSource = new MatTableDataSource(
        (this.form.get('albums') as FormArray).controls
      );
      this.dataSource.filterPredicate = (data: FormGroup, filter: string) => {
        return Object.values(data.controls).some((x) => x.value === filter);
      };
      this.dataSource.paginator.length = this.dataSource.data.length;
    });
  }

  get albums(): FormArray {
    return this.form.get('albums') as FormArray;
  }

  // On user change I clear the title of that album
  // onUserChange(event, album: FormGroup) {
  //   const title = album.get('title');

  //   title.setValue(null);
  //   title.markAsUntouched();
  //   // Notice the ngIf at the title cell definition. The user with id 3 can't set the title of the albums
  // }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected(): any {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  public onSelectionOfCheckbox(data): void {
    const index = this.dataSource.data.findIndex(
      (r) => r.value.id === data.value.id
    );
    this.dataSource.data[index].isEdit = true;
    console.log(this.dataSource.data);
    this.selectionArray.push(data);
    console.log(data);
  }
}
