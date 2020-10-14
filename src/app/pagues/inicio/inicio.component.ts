import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  resp = {}

  constructor(private tareaService: TareaService) { }

  async ngOnInit() {

    this.resp = await this.tareaService.obtenerProductos();

    console.log(this.resp)
  }

}
