import { Component, OnInit } from '@angular/core';

import { filter, map } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';

import { CommonServiceService } from '../../../services/common-service.service';

@Component({
  selector: 'app-rxjs-filter',
  templateUrl: './rxjs-filter.component.html',
  styleUrls: ['./rxjs-filter.component.scss'],
})
export class RxjsFilterComponent implements OnInit {
  /** variable declarations */

  private details: any;

  public filterDetails: any[] = [];
  ob$: Observable<any>;

  /** constructor class */
  constructor(private commonService: CommonServiceService) {}

  /** private methods */

  private getDetails(): void {
    this.commonService.getDetails().subscribe((result) => {
      this.ob$ = from(result);
      const example = this.ob$
        .pipe(filter(item => item.userId === 1));
      example.subscribe((res) => {
        this.filterDetails.push(res);
      });
    });
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
