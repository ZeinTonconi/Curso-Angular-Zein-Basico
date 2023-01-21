import {Component} from '@angular/core'

@Component({
    selector: 'app-counter',
    template: `
        <h1>{{title}}</h1>
        <h3>La base es: {{base}}</h3>

        <button (click)="acumular(base);"> +{{base}} </button>
        <span>{{number}}</span>
        <button (click)="acumular(-base);"> -{{base}} </button>
    `
})
export class CounterComponent {
    title = 'Contador App';
    number:number=0;
    base:number=5;
    acumular(valor:number){
        this.number+=valor;
    }
}