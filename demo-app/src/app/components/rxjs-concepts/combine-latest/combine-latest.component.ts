import { Component, OnInit } from '@angular/core';

import { Observable, from, combineLatest } from 'rxjs';

import { CommonServiceService } from '../../../services/common-service.service';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  /** variable declarations */

  private details: any;
 private of_details_1$: Observable<any>;
  private of_details_2$: Observable<any>;

  public combineLatest: any[] = [];

  /** constructor class */
  constructor(private commonService: CommonServiceService) {}

  /** private methods */

  private getDetails(): void {
    this.commonService.getDetails().subscribe((result) => {
      this.of_details_1$ = from(result);
      this.getPostDetails();
    });
  }

  private getPostDetails(): void {
    this.commonService.getPostDetails().subscribe((result) => {
      this.of_details_2$ = from(result);
      combineLatest([this.of_details_2$, this.of_details_1$]).subscribe((res) => {
        console.log(res);
        this.combineLatest = res;
      });
    });
  }


  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }

}
