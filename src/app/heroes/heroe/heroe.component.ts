import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: String = "Iroman";
    edad : number = 33;

    get nombreCapitalizado(): String{
        return this.nombre.toUpperCase();

    }

    obtenerNombre(){
        return `${this.nombre} / ${this.edad}`;
    }

    CambiarNombre(): void{
        this.nombre ='Spiderman';
    }

    CambiarEdad(): void{
        this.edad = 45;
    }

}