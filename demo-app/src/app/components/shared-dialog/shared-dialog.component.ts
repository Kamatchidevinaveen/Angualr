import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.scss'],
})
export class SharedDialogComponent implements OnInit {
  @Input() title;

  constructor() {}

  ngOnInit(): void {}
}
