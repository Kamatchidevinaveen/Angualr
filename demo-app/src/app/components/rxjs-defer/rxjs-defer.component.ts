import { Component, OnInit } from '@angular/core';

import { defer, of, interval } from 'rxjs';

import { CommonServiceService } from './../../services/common-service.service';

@Component({
  selector: 'app-rxjs-defer',
  templateUrl: './rxjs-defer.component.html',
  styleUrls: ['./rxjs-defer.component.scss'],
})
export class RxjsDeferComponent implements OnInit {
  /** variable declarations */

  private details: any;

  public defer_details: any;

  /** constructor class */
  constructor(private commonService: CommonServiceService) {}

  /** private methods */

  private getDetails() {
    this.commonService.getDetails().subscribe((result) => {
      this.details = result;
      this.populateOfData();
    });
  }

  private populateOfData() {
    return Math.random() > 0.5
      ? of(this.details).subscribe((data) => {
          this.defer_details = data;
        })
      : interval(1000);
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
