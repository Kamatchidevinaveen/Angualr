import { Component, OnInit } from '@angular/core';

import { of, concat } from 'rxjs';

import { CommonServiceService } from '../../../services/common-service.service';

@Component({
  selector: 'app-rxjs-concat',
  templateUrl: './rxjs-concat.component.html',
  styleUrls: ['./rxjs-concat.component.scss'],
})
export class RxjsConcatComponent implements OnInit {
  /** variable declarations */

  private details: any;

  public of_details_1: any;
  public of_details_2: any;
  public concatDetails: any;

  /** constructor class */
  constructor(private commonService: CommonServiceService) {}

  /** private methods */

  private getDetails(): void {
    this.commonService.getDetails().subscribe((result) => {
      this.details = result;
      this.of_details_1 = this.details;
      this.getPostDetails();
    });
  }

  private getPostDetails(): void {
    this.commonService.getPostDetails().subscribe((result) => {
      this.of_details_2 = result;
      this.concatDetails = this.of_details_1.concat(this.of_details_2);
      // this.of_details_1.pipe(concat(this.of_details_2)).subscribe((r) => {
      //   this.concatDetails = r;
      // });
    });
  }

  // private populateConcatDetails() {
  //   if (this.of_details_1 && this.of_details_2) {
  //     concat(...[this.of_details_1, this.of_details_2]).subscribe((r) => {
  //       this.concatDetails = r;
  //       console.log(this.concatDetails);
  //     });
  //   }
  // }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
