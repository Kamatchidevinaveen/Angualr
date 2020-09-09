import { Component, OnInit } from '@angular/core';

import { of, Observable } from 'rxjs';
import { find, map } from 'rxjs/operators';

import { CommonServiceService } from './../../services/common-service.service';

@Component({
  selector: 'app-rxjs-find',
  templateUrl: './rxjs-find.component.html',
  styleUrls: ['./rxjs-find.component.scss'],
})
export class RxjsFindComponent implements OnInit {
  /** variable declarations */

  private details$: Observable<any>;

  public findDetails: any;

  /** constructor class */
  constructor(private commonService: CommonServiceService) {}

  /** private methods */

  private getDetails() {
    this.commonService.getDetails().subscribe((result) => {
      this.details$ = of(result);
      this.details$.pipe(map(items => items.find((d) => d.userId === 1))).subscribe((result) => {
        this.findDetails = result;
      });
    });
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
