import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-orderresult',
  templateUrl: './orderresult.component.html',
  styleUrls: ['./orderresult.component.scss']
})
export class OrderresultComponent {
  tablenumber = this.dataService.tablenumber;
  tablex: any;
  sum: any = 0;

  constructor(private dialogRef: MatDialogRef<OrderresultComponent>, private dataService: DataService) {
    this.tablex = dataService.tablex;
    this.sum = this.dataService.sum;
  }
  close() {
    this.dialogRef.close();
    // clear order
    this.dataService.tablex.length = 0;
    this.dataService.sum = 0;
    console.log('clear order success');
  }
}
