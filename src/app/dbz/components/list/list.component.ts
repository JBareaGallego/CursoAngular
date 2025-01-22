import {  Component, Input,Output,EventEmitter } from '@angular/core';
import { Characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false,
})
export class ListComponent {


  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Characters[] = [
    {
      name:'fill',
      powerLevel:0
    }
  ];

  emitRemoveCharacter(id?:string):void {

    if(!id)return;

    this.onDelete.emit(id);
    //console.log(index);
  }
 }
