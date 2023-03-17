import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-editremoveorder',
  templateUrl: './editremoveorder.component.html',
  styleUrls: ['./editremoveorder.component.scss']
})
export class EditremoveorderComponent {
  amount: any = 1;
  menu: any;
  menuprice: any;
  totalprice: any;

  constructor(
    private dialogRef: MatDialogRef<EditremoveorderComponent>,
    private dataService: DataService,
  ) {
    this.menu = dataService.menu;
    this.menuprice = dataService.price;
    this.totalprice = this.amount * this.menuprice;

    for (let i = 0; i < this.dataService.tablex.length; i++) {
      if (this.dataService.tablex[i].menu == this.menu) {
        this.amount = this.dataService.tablex[i].count
      }
    }

    console.log('edit  menu ', this.menu);
    console.log('amount ', this.amount);
    console.log('edit  price ', this.menuprice);
    console.log('totalprice : ', this.totalprice);
  }
  close() {
    this.dialogRef.close();
  }
  add() {
    this.amount = this.amount + 1;
    this.totalprice = this.amount * this.menuprice;
    console.log('add : ', this.amount);
    console.log('totalprice : ', this.totalprice);
  }
  remove() {
    if (this.amount > 1) {
      this.amount = this.amount - 1;
      this.totalprice = this.amount * this.menuprice;
      console.log('remove : ', this.amount);
      console.log('totalprice : ', this.totalprice);
    }
  }
  editorder() {
      if (this.dataService.tablenumber == 1) {
        for (let i = 0; i < this.dataService.tablex.length; i++) {
          if (this.dataService.tablex[i].menu == this.menu) {
            this.dataService.table1.splice(i, 1);
          }
        }
        this.dataService.table1.push({
          menu: this.menu,
          price: this.menuprice,
          count: this.amount,
          totalprice: this.totalprice,
        });
      } else if (this.dataService.tablenumber == 2) {
        for (let i = 0; i < this.dataService.tablex.length; i++) {
          if (this.dataService.tablex[i].menu == this.menu) {
            this.dataService.table2.splice(i, 1);
          }
        }
        this.dataService.table2.push({
          menu: this.menu,
          price: this.menuprice,
          count: this.amount,
          totalprice: this.totalprice,
        });
      } else if (this.dataService.tablenumber == 3) {
        for (let i = 0; i < this.dataService.tablex.length; i++) {
          if (this.dataService.tablex[i].menu == this.menu) {
            this.dataService.table3.splice(i, 1);
          }
        }
        this.dataService.table3.push({
          menu: this.menu,
          price: this.menuprice,
          count: this.amount,
          totalprice: this.totalprice,
        });
      } else if (this.dataService.tablenumber == 4) {
        for (let i = 0; i < this.dataService.tablex.length; i++) {
          if (this.dataService.tablex[i].menu == this.menu) {
            this.dataService.table4.splice(i, 1);
          }
        }
        this.dataService.table4.push({
          menu: this.menu,
          price: this.menuprice,
          count: this.amount,
          totalprice: this.totalprice,
        });
      }
    // this.calsum();
    this.dialogRef.close();
  }

  deleteorder(){
    this.menu = this.dataService.menu;
    for (let i = 0; i < this.dataService.tablex.length; i++) {
      if (this.dataService.tablex[i].menu == this.menu) {
        this.dataService.tablex.splice(i, 1);
      }
    }
    this.dialogRef.close();
  }

  // calsum() {
  //   this.dataService.sum = 0;
  //   this.dataService.tablex.forEach((element: any) => {
  //     this.dataService.sum += element.totalprice;
  //   });
  //   console.log("order sum ", this.dataService.sum);
  // }
}
