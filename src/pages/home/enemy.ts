import { random, shuffle } from 'lodash';

export class Enemy {
  generate() {
    let words: string[] = [];
    let flag: number;

    words = [];

    let misc = ['gg wp', 'izi pizi', 'asdasd', ':D', ':P', 'XD', 'lalala', 'asdlkjasldasdlkajsdlakjfldskfjlakjd'];

    flag = random(0,1);
    words.push( flag == 0 ? 'left' : 'right' );

    flag = random(0,2);
    if (flag == 0) words.push('slow');
    if (flag == 2) words.push('fast');

    flag = random(0,misc.length*2);
    if (flag < misc.length) {
      words.push(misc[flag]);
    }

    return shuffle(words).join(' ');
  }
}
