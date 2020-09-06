import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';
import { find } from 'rxjs/operators';

import { CommonServiceService } from './../../services/common-service.service';

@Component({
  selector: 'app-rxjs-find',
  templateUrl: './rxjs-find.component.html',
  styleUrls: ['./rxjs-find.component.scss'],
})
export class RxjsFindComponent implements OnInit {
  /** variable declarations */

  private details: any;

  public of_details_1: any;
  public findDetails: any;

  /** constructor class */
  constructor(private commonService: CommonServiceService) {}

  /** private methods */

  private getDetails() {
    this.commonService.getDetails().subscribe((result) => {
      this.details = result;
      this.of_details_1 = this.details.find((d) => d.userId === 1);
      console.log(this.of_details_1);
    });
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
