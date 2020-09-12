import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Option } from '../../models/option.model';

@Component({
  selector: 'app-theme-menu',
  templateUrl: './theme-menu.component.html',
  styleUrls: ['./theme-menu.component.scss'],
})
export class ThemeMenuComponent implements OnInit {
  @Input() theme: Option;
  @Input() options: Array<Option>;
  @Output() themeChange: EventEmitter<Option> = new EventEmitter<Option>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log(this.theme);
  }

  changeTheme(themeToSet: Option): void {
    this.themeChange.emit(themeToSet);
  }
}
