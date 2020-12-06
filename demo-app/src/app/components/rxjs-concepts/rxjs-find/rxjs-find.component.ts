import { Component, OnInit } from '@angular/core';

import { from, Observable } from 'rxjs';
import { find } from 'rxjs/operators';

import { CommonServiceService } from '../../../services/common-service.service';

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

  private getDetails(): void {
    this.commonService.getDetails().subscribe((result) => {
      this.details$ = from(result);
      this.details$
        .pipe(find((d) => d.userId === 1))
        .subscribe((res: any) => {
          this.findDetails = res;
        });
    });
  }

  /** public methods */

  ngOnInit(): void {
    this.getDetails();
  }
}
