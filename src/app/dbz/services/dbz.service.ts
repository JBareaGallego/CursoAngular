import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Characters } from '../interfaces/characters.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters:Characters[] = [
      { name:'Krillin',
        id: uuid(),
        powerLevel:0,
      },
      { name:'Goku',
        id: uuid(),
        powerLevel:10600
      },
      { name:'Trunks',
        id: uuid(),
        powerLevel:6000
      },
    ];

  deleteCharByID(id:string):void {

    this.characters = this.characters.filter(char => char.id !== id);

  }

  addCharacter(char:Characters):void {

    const newChar:Characters = {...char, id: uuid()}
    char.id = uuid(),
    this.characters.push(char);

  };

}
