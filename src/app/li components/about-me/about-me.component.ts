import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['../home/home.component.css', "../about-me/about-me.component.css"]
  
})

export class AboutMeComponent {
  nombre:String="Felipe";
  edad:Number=20;
  apellido:String="Guzman";
  email:String="guzmanfelipe1000@gmail.com";
  direccion:String="Buenos Aires, Quilmes";
  formacionAcademica:String="Administracion y Economia, Secundario completo";
  universidadEnCurso:String="In progress"
  experiencia:Boolean=false;
    constructor(){
    }
}
