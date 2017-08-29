import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { without } from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) { }
  myText: string = '';
  messages: string[] = [];
  enemies: string[] = [];

  hidePlaceholder() {
    return this.myText !== '';
  }
  sendMessage() {
    let text = this.myText;
    this.messages.push(text);
    setTimeout(() => {
      this.messages = without(this.messages, text);
    }, 10000);
    this.myText = '';
  }

  ngOnInit() {
    setInterval(() => {
      this.enemies.push('left slow');
    }, 2000);
  }
}
