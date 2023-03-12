import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { OrderresultComponent } from '../orderresult/orderresult.component';

@Component({
  selector: 'app-confirmbox',
  templateUrl: './confirmbox.component.html',
  styleUrls: ['./confirmbox.component.scss']
})
export class ConfirmboxComponent {
  constructor(private dialog : MatDialog, private dialogRef: MatDialogRef<ConfirmboxComponent>) {}
  close() {
    this.dialogRef.close();
  }
  confirm() {
    this.dialogRef.close();
    this.dialog.open(OrderresultComponent, {
      minWidth: '500px',
    });
  }
}
