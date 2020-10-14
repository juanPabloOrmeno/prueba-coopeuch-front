import { Injectable } from '@angular/core';
import { TareasService, ResponseDelete, ResponseTarea, ResponseTareaResponse, ResponseUserDb } from 'src/api';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private tareasService: TareasService) { }


  async obtenerProductos() {
    try {
      return await this.tareasService.rootGet().toPromise();
    } catch (err) {
      console.log(err)
    }
  }


  async nuevaTarea(tarea: any) {
    try {
      return await this.tareasService.createPost(tarea).toPromise()
    } catch (err) {
      console.log(err)
    }
  }



  async actualizarTarea(tarea: any) {
    try {
      return await this.tareasService.updatePut(tarea).toPromise()
    } catch (err) {
      console.log(err)
    }
  }



  async eliminarTarea(tarea: any) {
    try {


      let borrar = {
        id: tarea._id
      }


      console.log(borrar)


      return await this.tareasService.deletePost(borrar).toPromise()
    } catch (err) {
      console.log(err)
    }
  }
}
