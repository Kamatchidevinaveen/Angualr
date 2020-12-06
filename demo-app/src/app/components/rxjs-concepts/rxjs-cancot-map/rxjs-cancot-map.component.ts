import { Component, OnInit } from '@angular/core';

import { from, interval, of, Subscription } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';

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
      this.of_details_1 = from(this.details);
      this.populateConcatDetails();
    });
  }

  private populateConcatDetails(): void {
    if (this.of_details_1) {
      this.concatDetails = this.of_details_1.pipe(concatMap(ev => interval(1000).pipe(take(4))));
      console.log(this.concatDetails);
    }
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
