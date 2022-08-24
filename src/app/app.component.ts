import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';

  checkUserName(){
    return this.userName === '';
  }

  resetUserName() {
    this.userName = '';
  }
}
