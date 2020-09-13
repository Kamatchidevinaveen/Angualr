import { Component, OnInit } from '@angular/core';

import { filter, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { CommonServiceService } from '../../../services/common-service.service';

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

  private getDetails(): void {
    this.commonService.getDetails().subscribe((result) => {
      this.ob$ = of(result);
      this.ob$
        .pipe(map((items) => items.filter((r) => r.userId === 1)))
        .subscribe((result) => {
          this.filterDetails = result;
        });
    });
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
