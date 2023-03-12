import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  amount = 1;
  constructor(private dialogRef: MatDialogRef<OrderComponent>) {}
  close() {
    this.dialogRef.close();
  }
  add() {
    this.amount = this.amount + 1;
  }
  remove() {
    if (this.amount == 1) {
    } else {
      this.amount = this.amount - 1;
    }
  }
}
