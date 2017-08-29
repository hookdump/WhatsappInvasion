import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { without, random } from 'lodash';
import { Enemy } from './enemy';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}
  myText: string = '';
  messages: string[] = [];
  enemies: string[] = [];
  enemyGenerator: Enemy = new Enemy();

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
      this.enemies.push(this.enemyGenerator.generate());
    }, 2000);
  }
}
