import { Component, OnInit } from '@angular/core';

import { Observable, from } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { CommonServiceService } from '../../../services/common-service.service';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements OnInit {
  /** variable declarations */

  private of_details_1$: Observable<any>;

  public details: any[] = [];

  /** constructor class */
  constructor(private commonService: CommonServiceService) {}

  /** private methods */

  private getDetails(): void {
    this.commonService.getDetails().subscribe((result) => {
      this.of_details_1$ = from(result).pipe(debounceTime(5000));
      this.of_details_1$.subscribe((res) => {
        this.details.push(res);
      });
    });
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
