import { Component, OnInit } from '@angular/core';

import { every } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

import { CommonServiceService } from '../../../services/common-service.service';
@Component({
  selector: 'app-rxjs-every',
  templateUrl: './rxjs-every.component.html',
  styleUrls: ['./rxjs-every.component.scss']
})
export class RxjsEveryComponent implements OnInit {

   /** variable declarations */

  private details: any;

  public everyFilterDetails: any;
  ob$: Observable<any>;

  /** constructor class */
  constructor(private commonService: CommonServiceService) {}

  /** private methods */

  private getDetails(): void {
    this.commonService.getDetails().subscribe((result) => {
      this.ob$ = from(result);
      this.ob$
        .pipe(every((r) => r.userId * 2 === 2))
        .subscribe((res: any) => {
          this.everyFilterDetails = res;
        });
    });
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
