import { Component } from '@angular/core';

/**
 * Generated class for the MsgComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'msg',
  templateUrl: 'msg.html'
})
export class MsgComponent {

  text: string;

  constructor() {
    console.log('Hello MsgComponent Component');
    this.text = 'Hello World';
  }

}
