import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';

import { CommonServiceService } from './../../services/common-service.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  /** variable declarations */

  private details: any;

  public of_details: any;

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
    of(this.details).subscribe((data) => {
      this.of_details = data;
    });
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
