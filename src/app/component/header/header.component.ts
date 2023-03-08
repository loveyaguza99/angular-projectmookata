import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  today= new Date();
  // todaysDataTime = '';
  constructor() {
    // this.todaysDataTime = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US');
    this.today.toLocaleDateString('th-TH')
    setInterval(() => {
      this.today = new Date()
    }, 1000)
  }
}
