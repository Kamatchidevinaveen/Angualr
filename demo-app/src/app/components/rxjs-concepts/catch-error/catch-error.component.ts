import { Component, OnInit } from '@angular/core';

import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { CommonServiceService } from '../../../services/common-service.service';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss'],
})
export class CatchErrorComponent implements OnInit {
  /** variable declarations */

  private of_details_1$: Observable<any>;

  public details: any[] = [];

  /** constructor class */
  constructor(private commonService: CommonServiceService) {}

  /** private methods */

  private getDetails(): void {
    this.commonService.getDetails().subscribe((result) => {
      this.of_details_1$ = from(result).pipe(
        map((n) => {
          if (n['id'] === 4) {
            throw 'four!';
          }
          return n;
        }),
        catchError((err) => {
          throw 'error in source. Details: ' + err;
        })
      );
      this.of_details_1$.subscribe((res) => {
        this.details.push(res);
      });
    });
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
