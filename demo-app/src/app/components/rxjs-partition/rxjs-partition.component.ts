import { Component, OnInit } from '@angular/core';

import { CommonServiceService } from './../../services/common-service.service';
import { of, partition } from 'rxjs';

@Component({
  selector: 'app-rxjs-partition',
  templateUrl: './rxjs-partition.component.html',
  styleUrls: ['./rxjs-partition.component.scss'],
})
export class RxjsPartitionComponent implements OnInit {
  /** variable declarations */

  private details: any;

  public of_details_1: any;
  public oddPartitionDetails: any;
  public evenPartitionDetails: any;

  /** constructor class */
  constructor(private commonService: CommonServiceService) {}

  /** private methods */

  private getDetails() {
    this.commonService.getDetails().subscribe((result) => {
      this.details = result;
      this.of_details_1 = of(this.details);
      this.populateConcatDetails();
    });
  }

  private populateConcatDetails() {
    if (this.of_details_1) {
      const [evens$, odds$] = partition(
        this.of_details_1,
        (value) => value['id'] < 50
      );
      evens$.subscribe((e) => {
        this.evenPartitionDetails = e;
        console.log(this.evenPartitionDetails);
      });
      odds$.subscribe((o) => {
        this.oddPartitionDetails = o;
        console.log(this.oddPartitionDetails);
      });
    }
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
