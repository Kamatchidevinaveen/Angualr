import { Component, OnInit } from '@angular/core';

import { Observable, from } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

import { CommonServiceService } from '../../../services/common-service.service';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.scss']
})
export class BufferTimeComponent implements OnInit {

 /** variable declarations */

 private of_details_1$: Observable<any>;
  private of_details_2$: Observable<any>;

  public details: any[] = [];

  /** constructor class */
  constructor(private commonService: CommonServiceService) {}

  /** private methods */

  private getDetails(): void {
    this.commonService.getDetails().subscribe((result) => {
      this.of_details_1$ = from(result).pipe(bufferTime(5000));
      this.of_details_1$.subscribe((res) => {
        this.details = res;
      });
    });
  }


  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }

}
