import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  public sideMenuList = [
    {
      name: 'forms',
      displayName: 'Forms',
      link: '/form',
    },
    {
      name: 'dataTable',
      displayName: 'Type Of Data-Tables',
      link: '/main-table',
    },
    {
      name: 'rxjs',
      displayName: 'RxJS',
      link: '/rxjs/main',
    },
    {
      name: 'expansion-panel',
      displayName: 'Expansion Panel',
      link: '/expansion-panel',
    },
    {
      name: 'stepper',
      displayName: 'Stepper',
      link: '/stepper',
    },
    {
      name: 'ngrx',
      displayName: 'NgRx',
      link: '/ngrx/main',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
