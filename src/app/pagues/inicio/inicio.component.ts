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
  tareaSelect: any = {}
  crear = true;

  constructor(private tareaService: TareaService) { }

  async ngOnInit() {
    this.resp = await this.tareaService.obtenerProductos();
    console.log(this.resp)
  }



  async guardar(forma: NgForm) {

    if (forma.valid) {
      let guardar = await this.tareaService.nuevaTarea(forma.value)
      this.resp = await this.tareaService.obtenerProductos();
      console.log(guardar)
    } else {
      console.log("formulario invalido")
    }
  }


  async actualizar(forma: NgForm) {
    if (forma.valid) {
      this.tareaSelect.descripcion = forma.value.descripcion
      let actualizar = await this.tareaService.actualizarTarea(this.tareaSelect)
      this.resp = await this.tareaService.obtenerProductos();
      console.log(actualizar)
      this.crear = true
    } else {
      console.log("formulario invalido")
    }
  }


  seleccionarTarea(tarea){
    this.crear = false
    this.tareaSelect.id = tarea._id
    this.tareaSelect.descripcion = tarea.descripcion
    this.tareaSelect.vigente = tarea.vigente
    console.log(this.tareaSelect)
  }

  borrarTarea(id){
    console.log(id)
  }

}
