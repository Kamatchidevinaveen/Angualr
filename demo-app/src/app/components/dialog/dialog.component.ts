import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  /** variable declarations */
  public title = 'Dialog';

  /** constructor class */
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {
    this.dialogRef.disableClose = true;
  }

  /** private methods */

  /** public methods */

  /** ngOnInit method */
  ngOnInit(): void {}
}
