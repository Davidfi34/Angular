import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent{
  heroes: String[]= ['Spiderman','Iroman','Hulk','Thor'];
  heroeBorrardo: String = '';

  BorrarHeroe(){
    //  si no devuelve un string || retorna un ""...
    this.heroeBorrardo = this.heroes.shift()|| '';
    
    
  }






}
