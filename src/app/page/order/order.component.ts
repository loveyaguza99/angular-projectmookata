import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  amount = 1;
  menu:any;
  menuprice:any;
  constructor(private dialogRef: MatDialogRef<OrderComponent>, private dataService: DataService) {
    this.menu = dataService.menu;
    this.menuprice = dataService.price;
    console.log("edit  menu ", this.menu);
    console.log("edit  price ", this.menuprice);
  }
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
