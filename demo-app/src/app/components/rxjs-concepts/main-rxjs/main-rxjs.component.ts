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
      id: 2,
      title: 'defer',
      link: '/rxjs/defer',
    },
    {
      id: 12,
      title: 'concat',
      link: '/rxjs/concat',
    },
    {
      id: 13,
      title: 'partition',
      link: '/rxjs/partition',
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
      id: 3,
      title: 'empty',
      link: '/rxjs/empty',
    },
    {
      id: 4,
      title: 'generate',
      link: '/rxjs/generate',
    },
    {
      id: 5,
      title: 'iif',
      link: '/rxjs/iif',
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
      link: '',
    },
  ];

  /** constructor class */
  constructor(private router: Router) {}

  /** private methods */

  /** public methods */

  ngOnInit(): void {}
}
