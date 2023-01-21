import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heroes:string[]=['Ciclope','Gambito','Jubilo','Bestia'];
  heroDeleted:string="";

  deleteHero():void{
    this.heroDeleted=this.heroes.shift() || "";
  }
}
