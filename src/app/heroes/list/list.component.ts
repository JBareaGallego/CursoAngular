import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroNames: string[] = ['Spiderman','Magik','Jeff The Shark', 'Loki'];

    public deletedHero:string | undefined

    deleteLast():void | undefined {
      this.deletedHero = this.heroNames.pop();
    }
}
