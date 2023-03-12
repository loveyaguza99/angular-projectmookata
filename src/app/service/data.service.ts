import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiEndpoint = 'http://localhost/myapi';
  menu: any;
  price: any;
  amount: any;
  totalprice: any;
  tablex: any;
  tablenumber: any = 1;
  sum: any = 0;
  table1 = Array.of({ menu: '', price: 0, count: 0, totalprice: 1 });
  table2 = Array.of({ menu: '', price: 0, count: 0, totalprice: 2 });
  table3 = Array.of({ menu: '', price: 0, count: 0, totalprice: 3 });
  table4 = Array.of({ menu: '', price: 0, count: 0, totalprice: 4 });
  constructor() {}
}
