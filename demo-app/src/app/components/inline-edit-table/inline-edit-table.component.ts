import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  fav: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', fav: 'Yes' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', fav: '' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', fav: '' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', fav: '' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', fav: 'Yes' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', fav: '' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', fav: '' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', fav: '' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', fav: '' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', fav: '' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', fav: '' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', fav: '' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', fav: '' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', fav: '' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', fav: '' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', fav: '' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', fav: '' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', fav: '' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', fav: '' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', fav: '' },
];

@Component({
  selector: 'app-inline-edit-table',
  templateUrl: './inline-edit-table.component.html',
  styleUrls: ['./inline-edit-table.component.scss'],
})
export class InlineEditTableComponent implements OnInit {
  /** variable declarations */

  public displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
    'fav',
    'actions',
  ];
  public dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  public isEdit = false;
  public isEditableData: any;
  selection = new SelectionModel<Element>(true, []);
  public formArray: FormArray = this.fb.array([]);
  public form: FormGroup;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /** constructor class */
  constructor(private fb: FormBuilder) {}

  /** private methods */

  /** public methods */

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public editRow(data) {
    this.isEditableData = data;
    if (this.formArray.controls.length > 0) {
      this.formArray.controls.forEach((r) => {
        if (r.value.position === data.position) {
          const index = this.formArray.controls.findIndex(
            (d) => d.value.position === data.position
          );
          this.formArray.removeAt(index);
        }
      });
    }
    this.form = this.fb.group({ name: '', position: '' });
    this.form.patchValue(data);
    this.formArray.push(this.form);
    this.isEdit = true;
    console.log(data);
  }

  public cancelEdit(data) {
    this.isEdit = false;
    console.log(this.formArray.controls);
  }

  public updateEdit(data) {
    console.log(data);
    this.isEdit = false;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  public onSelectionOfCheckbox(data) {
    console.log(data);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
