import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //declarations = componetes
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    //exports = cosas visibles (publicas) <app-listado>
    exports:[
        ListadoComponent
    ],
    
    //imports = solo modulos
    imports:[
        //MODULO QUE CONTIENE FUNCIONES COMO (*ngIf , *ngFor, ETC .....)
        CommonModule
    ]

})

export class HeroesModule{}