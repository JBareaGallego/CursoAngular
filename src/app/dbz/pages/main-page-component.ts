import { Component} from '@angular/core';
import { Characters } from '../interfaces/characters.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone:false,
})

export class MainPageComponent {
  constructor(private dbzService:DbzService) {}

  get characters(): Characters[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void {
    this.dbzService.deleteCharByID(id);
  }

  onNewCharacter(char:Characters):void {
    this.dbzService.addCharacter(char);
  }
}
