import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    nombre:string = 'Jacobo';

    arreglo:number[] = [1,2,3,4,5,6,7,9,10];

    PI:number = Math.PI;

    percentage:number = 0.234;

    money:number = 13213.25;

    heroe:any = {
        nombre: "Logan",
        clave: "Wolverine",
        casa: {
            calle: "Ignacio",
            numero: 5
        }
    }

    valorDePromesa = new Promise( (resolve,reject)=>{

        setTimeout( ()=>resolve('Llego la data'), 3500 );

    } );

    video:string = '6wJ1lMgtHFE';

    clave:boolean = false;
}
