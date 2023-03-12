import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  today= new Date();

  constructor(private dialog : MatDialog) {
    setInterval(() => {
      this.today = new Date()
    }, 1000)
  }
  Order(){
    // this.dataService.countries = this.countries;
    this.dialog.open(OrderComponent, {
      minWidth: '300px',
    });
  }
}
