import { Component, EventEmitter, Output } from '@angular/core';
import { Characters } from '../../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrl: './addCharacter.component.css',
  standalone: false,
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Characters> = new EventEmitter();

  public character: Characters = {
    name: '',
    powerLevel:0,
  };

  emitCharacter():void {
    //console.log(this.character)

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name:'', powerLevel: 0};

  }

}

