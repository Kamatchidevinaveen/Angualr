import { Component, OnInit } from '@angular/core';

import { from, Observable } from 'rxjs';
import { findIndex } from 'rxjs/operators';

import { CommonServiceService } from '../../../services/common-service.service';
@Component({
  selector: 'app-rxjs-find-index',
  templateUrl: './rxjs-find-index.component.html',
  styleUrls: ['./rxjs-find-index.component.scss']
})
export class RxjsFindIndexComponent implements OnInit {

   /** variable declarations */

  private details$: Observable<any>;

  public findDetailIndex: number;

  /** constructor class */
  constructor(private commonService: CommonServiceService) {}

  /** private methods */

  private getDetails(): void {
    this.commonService.getDetails().subscribe((result) => {
      this.details$ = from(result);
      this.details$
        .pipe(findIndex((d) => d.userId === 1))
        .subscribe((res: any) => {
          this.findDetailIndex = res;
        });
    });
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }

}
