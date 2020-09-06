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
      displayName: 'Data Table',
      link: '/data-table',
    },
    {
      name: 'inlineEdit',
      displayName: 'Inline Edit',
      link: '/inline-edit-table',
    },
    {
      name: 'rxjs',
      displayName: 'RxJS',
      link: '/rxjs-main',
    },
    {
      name: 'formArrayTable',
      displayName: 'Form Array Table',
      link: '/form-array-table',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
