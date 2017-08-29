import { Component, Input } from '@angular/core';

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
  private _text = '';
  classes: string[] = [];
  ttl: number = 5000;

  @Input() enemy: boolean = false;
  @Input()
  set text(text: string) {
    this._text = text;
    if (/left/.test(text)) this.classes.push('msg_left');
    if (/fast/.test(text)) {
      this.classes.push('msg_fast');
      this.ttl = 2000;
    }
    if (/slow/.test(text)) {
      this.classes.push('msg_slow');
      this.ttl = 10000;
    }

    if (this.enemy) {
      this.classes.push('anim_down');
    } else {
      this.classes.push('anim_up');
    }
    setTimeout(() => { this.classes.push('msg_hidden'); }, this.ttl);
  }
  get text(): string { return this._text; }

  constructor() { }
}
