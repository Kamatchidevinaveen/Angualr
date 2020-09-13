import { Component, OnInit } from '@angular/core';

import { empty, interval, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-empty',
  templateUrl: './rxjs-empty.component.html',
  styleUrls: ['./rxjs-empty.component.scss'],
})
export class RxjsEmptyComponent implements OnInit {
  /** variable declarations */

  public emptyDetails: any;

  /** constructor class */
  constructor() {}

  ngOnInit(): void {
    const interval$ = interval(1000);
    const result = interval$.pipe(
      mergeMap((x) => (x % 2 === 1 ? of('a', 'b', 'c') : empty()))
    );
    result.subscribe((x) => console.log(x));
  }
}
