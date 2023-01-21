import { Component } from "@angular/core";


@Component({
    selector: "app-hero",
    templateUrl: "hero.component.html"
})
export class HeroComponent{
    name:string="Ciclope";
    age:number=35;

    get nameUpperCase():string{
        return this.name.toUpperCase();
    }
    
    getName():string{
        return `${this.name} - ${this.age}`
    }

    changeName():void{
        this.name="Gambito";
    }

    changeAge():void{
        this.age=25;
    }
}