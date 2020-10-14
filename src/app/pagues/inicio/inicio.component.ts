import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  resp = {}
  tarea: any = {}

  constructor(private tareaService: TareaService) { }

  async ngOnInit() {
    this.resp = await this.tareaService.obtenerProductos();
    console.log(this.resp)
  }



  async guardar(forma: NgForm) {
    let guardar = await this.tareaService.nuevaTarea(forma.value)
    this.resp = await this.tareaService.obtenerProductos();
    console.log(guardar) 
  }


  async actualizar(forma: NgForm) {
    let actualizar = await this.tareaService.actualizarTarea(forma.value)
    this.resp = await this.tareaService.obtenerProductos();
    console.log(actualizar) 
  }

}
