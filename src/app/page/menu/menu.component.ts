import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderComponent } from '../order/order.component';
import { ConfirmboxComponent } from '../confirmbox/confirmbox.component';
import { DataService } from 'src/app/service/data.service';
import { EditorderComponent } from '../editorder/editorder.component';
import { EditremoveorderComponent } from '../editremoveorder/editremoveorder.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  today: any;
  tablenumber = 1;
  tablex: any;
  sum: any = 0;

  table1 = Array.of();
  table2 = Array.of();
  table3 = Array.of();
  table4 = Array.of();

  constructor(private dialog: MatDialog, private dataService: DataService) {
    setInterval(() => {
      this.today = new Date();
      const formatter = new Intl.DateTimeFormat('th-TH', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' });
      this.today = formatter.format(this.today);

      this.calsum();
    }, 10);

    // default table = table1
    dataService.tablex = dataService.table1;
    this.tablex = dataService.tablex;
    console.log(this.tablex.length);

  }

  Order(menu: any, menuprice: any) {
    this.dataService.menu = menu;
    this.dataService.price = menuprice;
    let isNewOrder = true;
    for (let i = 0; i < this.dataService.tablex.length; i++) {
      if (this.dataService.tablex[i].menu == menu) {
        isNewOrder = false;
        break;
      }
    }
    if (isNewOrder) {
      this.dialog.open(OrderComponent, {
        minWidth: '260px',
        disableClose: true
      });
      console.log('Opening OrderComponent');
    } else {
      this.dialog.open(EditorderComponent, {
        minWidth: '260px',
        disableClose: true
      });
      console.log('Opening EditorderComponent');
    }
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
      disableClose: true
    });
  }
  calsum() {
    this.dataService.sum = 0;
    this.dataService.tablex.forEach((element: any) => {
      this.dataService.sum += element.totalprice;
    });
    this.sum = this.dataService.sum;
  }
  editremoveOrder(menu: any) {
    this.dataService.menu = menu;
    this.dialog.open(EditremoveorderComponent, {
      minWidth: '260px',
      disableClose: true
    });
  }
}
