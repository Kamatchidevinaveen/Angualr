import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { CommonServiceService } from '../../../services/common-service.service';

@Component({
  selector: 'app-rxjs-cancot-map',
  templateUrl: './rxjs-cancot-map.component.html',
  styleUrls: ['./rxjs-cancot-map.component.scss'],
})
export class RxjsCancotMapComponent implements OnInit {
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
      this.of_details_1 = of(this.details);
      this.populateConcatDetails();
    });
  }

  private getPostDetails(): void {
    this.commonService.getPostDetails().subscribe((result) => {
      this.of_details_2 = of(result);
      this.populateConcatDetails();
    });
  }

  private populateConcatDetails(): void {
    if (this.of_details_1 && this.of_details_2) {
      this.concatDetails = concatMap(this.of_details_1, this.of_details_2);
      console.log(this.concatDetails);
      // .subscribe((r) => {
      //   this.concatDetails = r;
      // });
    }
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
    this.getPostDetails();
  }
}
