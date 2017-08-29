import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) { }
  myText: string = '';
  messages: string[] = [];

  hidePlaceholder() {
    return this.myText !== '';
  }
  sendMessage() {
    this.messages.push(this.myText);
    setTimeout(() => {
      this.messages = [];
    }, 4000);
    this.myText = '';
  }
}
