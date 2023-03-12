import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as ReceiptCvt, Receipt } from 'src/app/model/receipt.model';
import { Convert as OrderCvt, Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent {
  today = new Date();
  receipt = 1;
  receipts = Array<Receipt>();
  order = 1;
  orders = Array<Order>();
  ref_id = 5;

  constructor(private dataService: DataService, private http: HttpClient) {
    setInterval(() => {
      this.today = new Date();
    }, 1000);

    http.get(dataService.apiEndpoint + '/receipts').subscribe((data: any) => {
      this.receipts = ReceiptCvt.toReceipt(JSON.stringify(data));
      console.log(this.receipts);
    });
    http.get(dataService.apiEndpoint + '/orderofref/' + this.ref_id).subscribe((data: any) => {
      this.orders = OrderCvt.toOrder(JSON.stringify(data));
      console.log(this.orders);
    });
  }
  show(ref_id:any){
    this.ref_id = ref_id
    console.log(ref_id)
    this.http.get(this.dataService.apiEndpoint + '/orderofref/' + this.ref_id).subscribe((data: any) => {
      this.orders = OrderCvt.toOrder(JSON.stringify(data));
      console.log(this.orders);
    });
  }

}
