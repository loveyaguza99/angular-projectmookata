import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { OrderresultComponent } from '../orderresult/orderresult.component';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as ReceiptCvt, Receipt } from 'src/app/model/receipt.model';

@Component({
  selector: 'app-confirmbox',
  templateUrl: './confirmbox.component.html',
  styleUrls: ['./confirmbox.component.scss'],
})
export class ConfirmboxComponent {
  receipts = Array<Receipt>();
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ConfirmboxComponent>,
    private dataService: DataService,
    private http: HttpClient
  ) {
  }
  close() {
    this.dialogRef.close();
  }
  confirm() {
    console.log('confirmtotal ', this.dataService.sum);
    this.calsum();
    this.http
      .get(
        this.dataService.apiEndpoint +
          '/insertreceipt/' +
          this.dataService.tablenumber +
          '/' +
          this.dataService.sum
      )
      .subscribe((data: any) => {
        this.receipts = ReceiptCvt.toReceipt(JSON.stringify(data));
        console.log(this.receipts);
      });
    this.dialogRef.close();
    this.dialog.open(OrderresultComponent, {
      minWidth: '500px',
    });
  }
  calsum() {
    this.dataService.sum = 0;
    this.dataService.tablex.forEach((element: any) => {
      this.dataService.sum += element.totalprice;
    });
    console.log('order sum ', this.dataService.sum);
  }
}
