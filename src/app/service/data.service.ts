import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEndpoint = 'http://localhost/myapi';
  menu:any;
  price:any
  constructor() { }
}
