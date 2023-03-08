import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  today= new Date();

  constructor() {
    setInterval(() => {
      this.today = new Date()
    }, 1000)
  }
}
