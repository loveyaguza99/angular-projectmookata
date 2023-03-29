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
  today: any;
  receipt: any;
  receipts = Array<Receipt>();
  order:any;
  orders = Array<Order>();
  ref_id: any;
  totalprice: any;
  p = 1;

  constructor(private dataService: DataService, private http: HttpClient) {
    setInterval(() => {
      this.today = new Date();
      const formatter = new Intl.DateTimeFormat('th-TH', { day: 'numeric', month: 'long', year: 'numeric', hour:'numeric', minute:'numeric'});
      this.today = formatter.format(this.today);
    }, 10);

    http.get(dataService.apiEndpoint + '/receipts').subscribe((data: any) => {
      this.receipts = ReceiptCvt.toReceipt(JSON.stringify(data));
      console.log(this.receipts);
    });
    http.get(dataService.apiEndpoint + '/orderofref/' + this.ref_id).subscribe((data: any) => {
      this.orders = OrderCvt.toOrder(JSON.stringify(data));
      console.log(this.orders);
    });
  }
  show(ref_id: any, sum:any) {
    this.ref_id = ref_id
    this.totalprice = sum
    console.log(ref_id)
    console.log(sum)
    this.http.get(this.dataService.apiEndpoint + '/orderofref/' + this.ref_id).subscribe((data: any) => {
      this.orders = OrderCvt.toOrder(JSON.stringify(data));
      console.log(this.orders);
    });
  }

}
