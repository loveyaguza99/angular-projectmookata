import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiEndpoint = 'http://localhost/myapi';
  menu: any;
  price: any;
  amount: any;
  totalprice: any = 0;
  tablex: any;
  tablenumber: any = 1;
  sum: any = 0;
  table1 = Array.of();
  table2 = Array.of();
  table3 = Array.of();
  table4 = Array.of();
  constructor() {}
}
