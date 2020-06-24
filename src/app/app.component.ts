import { Component } from '@angular/core';
import { Actor } from './Entidades/Actor';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form';
  
  Nombre = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  Apellido = new FormControl('', [Validators.required, Validators.maxLength(55)]);
  Edad = new FormControl(20, Validators.required);
  Pais = new FormControl({ value: 'Argentina', disabled: true });
  Profesional = new FormControl(true);
  constructor() {
  }

  setNameValue() {
    this.Nombre.setValue('Donald Trump');
    console.log('Name: ' + this.Nombre.value);
    console.log('Estado: ' + this.Nombre.status);
  }
  setResetName() {
    this.Nombre.reset();
  }
  changeValue() {
    console.log(this.Pais.value);
    this.Pais = new FormControl('EEUU');
  }

  accionformulario() {
    console.log(this.Nombre.value);
    console.log(this.Apellido.value);
  }
}
