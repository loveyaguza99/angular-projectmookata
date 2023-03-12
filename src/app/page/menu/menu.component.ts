import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderComponent } from '../order/order.component';
import { ConfirmboxComponent } from '../confirmbox/confirmbox.component';
import { DataService } from 'src/app/service/data.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  today = new Date();
  tablenumber = 1;
  tablex: any;
  sum: any = 0;

  table1 = Array.of({ menu: '', price: 0, count: 0, totalprice: 0 });
  table2 = Array.of({ menu: '', price: 0, count: 0, totalprice: 0 });
  table3 = Array.of({ menu: '', price: 0, count: 0, totalprice: 0 });
  table4 = Array.of({ menu: '', price: 0, count: 0, totalprice: 0 });

  s = { menu: 'Daisy', price: 21, count: 1, totalprice: 22 }; //0
  a = { menu: 'Rose', price: 18, count: 2, totalprice: 36 }; //1
  b = { menu: 'Lily', price: 25, count: 1, totalprice: 25 }; //2
  p = { menu: 'Lily1', price: 25, count: 1, totalprice: 25 }; //3
  o = { menu: 'Lily2', price: 25, count: 1, totalprice: 25 }; //4

  constructor(private dialog: MatDialog, private dataService: DataService) {
    setInterval(() => {
      this.today = new Date();
      this.sum = dataService.sum;
    }, 250);

    dataService.table1.splice(0, 1);
    dataService.table2.splice(0, 1);
    dataService.table3.splice(0, 1);
    dataService.table4.splice(0, 1);

    dataService.tablex = dataService.table1;
    this.tablex = dataService.tablex;
    console.log(this.tablex.length);

    // dataService.table4.push(this.s);
    // this.table2.push(this.a);
    // this.table3.push(this.b);
    // this.table4.push(this.p);
    // this.tablex = this.table1;
    // this.menuarray.push(this.a);
    // this.menuarray.push(this.b);
    // this.menuarray.push(this.p);
    // this.menuarray.push(this.o);
    // console.log("test ", this.menuarray);
  }
  Order(menu: any, menuprice: any) {
    this.dataService.menu = menu;
    this.dataService.price = menuprice;
    this.dialog.open(OrderComponent, {
      minWidth: '260px',
    });
    console.log('data ', this.dataService.menu);
  }
  onSelected(value: any): void {
    this.dataService.tablenumber = value;
    this.tablenumber = this.dataService.tablenumber;

    if (this.tablenumber == 1) {
      // this.tablex = this.table1;
      this.dataService.tablex = this.dataService.table1;
    } else if (this.tablenumber == 2) {
      // this.tablex = this.table2;
      this.dataService.tablex = this.dataService.table2;
    } else if (this.tablenumber == 3) {
      // this.tablex = this.table3;
      this.dataService.tablex = this.dataService.table3;
    } else if (this.tablenumber == 4) {
      // this.tablex = this.table4;
      this.dataService.tablex = this.dataService.table4;
    }
    this.tablex = this.dataService.tablex;

    console.log(this.tablenumber);
    console.log(this.tablex);
    console.log(this.sum);
  }
  pay() {
    this.dialog.open(ConfirmboxComponent, {
      minWidth: '260px',
    });
  }
  calsum() {
    this.dataService.sum = 0;
    this.dataService.tablex.forEach((element: any) => {
      this.dataService.sum += element.totalprice;
    });
    console.log("order sum ",this.dataService.sum);
  }
}
