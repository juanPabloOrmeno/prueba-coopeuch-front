import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { fromEvent } from 'rxjs';
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


    console.log('guarda')

    if (forma.valid) {
      let guardar = await this.tareaService.nuevaTarea(forma.value)
      this.resp = await this.tareaService.obtenerProductos();
      console.log(guardar)
    } else {
      console.log("formulario invalido")
    }
  }


  async actualizar(tarea) {

      let datos = {
        id: this.tarea.id,
        descripcion: tarea.value.descripcion,
        vigente: tarea.value.vigente,
      }

      let actualizar = await this.tareaService.actualizarTarea(datos)
      this.resp = await this.tareaService.obtenerProductos();
      console.log(actualizar)
      this.crear = true
    
  }


  seleccionarTarea(tarea){
    this.crear = false
    this.tarea.id = tarea._id
    this.tarea.descripcion = tarea.descripcion
    this.tarea.vigente = tarea.vigente
    console.log(this.tarea)
  }

  async borrarTarea(tarea){
    
    await this.tareaService.eliminarTarea(tarea)
    this.resp = await this.tareaService.obtenerProductos();
  }

}
