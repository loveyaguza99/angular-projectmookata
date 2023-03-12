import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { OrderComponent } from '../order/order.component';
import { ConfirmboxComponent } from '../confirmbox/confirmbox.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  today= new Date();
  table = 1

  constructor(private dialog : MatDialog) {
    setInterval(() => {
      this.today = new Date()
      console.log(this.table)
    }, 1000)
  }
  Order(){
    // this.dataService.countries = this.countries;
    this.dialog.open(OrderComponent, {
      minWidth: '260px',
    });
  }
  onSelected(value:any): void {
		this.table = value;
	}
  pay(){
    this.dialog.open(ConfirmboxComponent, {
      minWidth: '260px',
    });
  }
}
