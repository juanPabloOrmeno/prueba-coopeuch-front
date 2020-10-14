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
}
