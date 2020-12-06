import { Component, OnInit } from '@angular/core';

import { Observable, from, merge } from 'rxjs';

import { CommonServiceService } from '../../../services/common-service.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

   /** variable declarations */

 private of_details_1$: Observable<any>;
  private of_details_2$: Observable<any>;

  public mergeDetails: any[] = [];

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
      merge(this.of_details_2$, this.of_details_1$).subscribe((res) => {
        console.log(res);
        this.mergeDetails.push(res);
      });
    });
  }


  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }

}
