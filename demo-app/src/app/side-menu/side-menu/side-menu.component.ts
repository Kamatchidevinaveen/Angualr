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
      name: 'navigation',
      displayName: 'Navigation',
      link: '/form-control',
    },
    // {
    //   name: 'layout',
    //   displayName: 'Layout',
    //   link: '',
    // },
    // {
    //   name: 'buttonsAndIndicators',
    //   displayName: 'Buttons And Indicators',
    //   link: '',
    // },
    // {
    //   name: 'popupAndModels',
    //   displayName: 'Popup And Models',
    //   link: '',
    // },
    {
      name: 'dataTable',
      displayName: 'Data Tables',
      link: '/main-table',
    },
    {
      name: 'rxjs',
      displayName: 'RxJS',
      link: '/rxjs-main',
    },
    {
      name: 'expansion-panel',
      displayName: 'Expansion Panel',
      link: '/expansion-panel',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
