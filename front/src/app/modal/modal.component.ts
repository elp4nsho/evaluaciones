import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { IngresoComponent} from '../ingreso/ingreso.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  get estado(){
    return IngresoComponent.estado;
  }
  cambiarEstado(){
    IngresoComponent.estado = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
