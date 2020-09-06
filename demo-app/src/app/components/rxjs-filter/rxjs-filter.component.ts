import { Component, OnInit } from '@angular/core';

import { filter } from 'rxjs/operators';

import { CommonServiceService } from './../../services/common-service.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-filter',
  templateUrl: './rxjs-filter.component.html',
  styleUrls: ['./rxjs-filter.component.scss'],
})
export class RxjsFilterComponent implements OnInit {
  /** variable declarations */

  private details: any;

  public filterDetails: any;
  ob$: Observable<any>;

  /** constructor class */
  constructor(private commonService: CommonServiceService) {}

  /** private methods */

  private getDetails() {
    this.commonService.getDetails().subscribe((result) => {
      this.ob$ = of(result);
      console.log(this.ob$);
      this.ob$.pipe(filter((r: any) => r.id === 1));
      this.ob$.subscribe((r) => {
        this.filterDetails = r;
      });
      console.log(this.filterDetails);
      // this.filterDetails = this.details.find((d) => d.userId === 1);
      // console.log(this.filterDetails);
    });
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
