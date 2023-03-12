import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { OrderComponent } from '../order/order.component';
import { ConfirmboxComponent } from '../confirmbox/confirmbox.component';
import { DataService } from 'src/app/service/data.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  today= new Date();
  table = 1;
  menuarray = Array.of()
  s = { menu: 'Daisy', price: 21, count: 1, totalprice: 22 };//0
  a = { menu: 'Rose', price: 18, count: 2, totalprice: 36 };//1
  b = { menu: 'Lily', price: 25, count: 1, totalprice: 25 };//2
  p = { menu: 'Lily1', price: 25, count: 1, totalprice: 25 };//3
  o = { menu: 'Lily2', price: 25, count: 1, totalprice: 25 };//4

  constructor(private dialog : MatDialog, private dataService: DataService) {
    setInterval(() => {
      this.today = new Date()
    }, 1000)
    this.menuarray.push(this.s);
    this.menuarray.push(this.a);
    this.menuarray.push(this.b);
    this.menuarray.push(this.p);
    this.menuarray.push(this.o);
    this.menuarray.splice(0, 2);
    console.log("test ", this.menuarray);
  }
  Order(menu:any, menuprice:any){
    this.dataService.menu = menu;
    this.dataService.price = menuprice;
    this.dialog.open(OrderComponent, {
      minWidth: '260px',
    });
    console.log("data ", this.dataService.menu);
  }
  onSelected(value:any): void {
		this.table = value;
    console.log(this.table)
	}
  pay(){
    this.dialog.open(ConfirmboxComponent, {
      minWidth: '260px',
    });
  }
}
