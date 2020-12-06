import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-rxjs',
  templateUrl: './main-rxjs.component.html',
  styleUrls: ['./main-rxjs.component.scss'],
})
export class MainRxjsComponent implements OnInit {
  /** variable declarations */

  public rxjsTitleList = [
    {
      id: 1,
      title: 'of',
      link: '/rxjs/of',
    },
    {
      id: 12,
      title: 'concat',
      link: '/rxjs/concat',
    },
    {
      id: 14,
      title: 'forkJoin',
      link: '/rxjs/fork-join',
    },
    {
      id: 15,
      title: 'concatMap',
      link: '/rxjs/concat-map',
    },
    {
      id: 6,
      title: 'interval',
      link: '/rxjs/interval',
    },
    {
      id: 7,
      title: 'throwError',
      link: '/rxjs/throw-error',
    },
    {
      id: 8,
      title: 'timer',
      link: '/rxjs/timer',
    },
    {
      id: 9,
      title: 'filter',
      link: '/rxjs/filter',
    },
    {
      id: 10,
      title: 'find',
      link: '/rxjs/find',
    },
    {
      id: 11,
      title: 'findIndex',
      link: '/rxjs/findIndex',
    },
    {
      id: 12,
      title: 'every',
      link: '/rxjs/every'
    },
    {
      id: 16,
      title: 'combineLatest',
      link: '/rxjs/combineLatest'
    },
    {
      id: 17,
      title: 'merge',
      link: '/rxjs/merge'
    },
    {
      id: 18,
      title: 'bufferTime',
      link: '/rxjs/bufferTime'
    },
    {
      id: 19,
      title: 'catchError',
      link: '/rxjs/catchError'
    },
    {
      id: 20,
      title: 'debounceTime',
      link: '/rxjs/debounceTime'
    },
    {
      id: 21,
      title: 'distinceUntilChanged',
      link: '/rxjs/distinceUntilChanged'
    },
    {
      id: 22,
      title: 'do',
      link: '/rxjs/do'
    },
    {
      id: 23,
      title: 'map',
      link: '/rxjs/map'
    },
    {
      id: 24,
      title: 'scan',
      link: '/rxjs/scan'
    },
    {
      id: 25,
      title: 'share',
      link: '/rxjs/share'
    },
    {
      id: 26,
      title: 'shareReplay',
      link: '/rxjs/shareReplay'
    },
    {
      id: 27,
      title: 'startWith',
      link: '/rxjs/startWith'
    },
    {
      id: 28,
      title: 'switchMap',
      link: '/rxjs/switchMap'
    },
    {
      id: 29,
      title: 'take',
      link: '/rxjs/take'
    },
    {
      id: 30,
      title: 'takeUntil',
      link: '/rxjs/takeUntil'
    },
    {
      id: 31,
      title: 'withLatestFrom',
      link: '/rxjs/withLatestFrom'
    },
    {
      id: 32,
      title: 'mergeMap',
      link: '/rxjs/mergeMap'
    }
  ];

  /** constructor class */
  constructor(private router: Router) {}

  /** private methods */

  /** public methods */

  ngOnInit(): void {}
}
