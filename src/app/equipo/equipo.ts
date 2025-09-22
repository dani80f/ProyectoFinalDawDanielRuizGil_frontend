import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-equipo',
  standalone: false,
  templateUrl: './equipo.html',
  styleUrl: './equipo.css'
})
export class Equipo implements OnInit{

  equipos: any[] = [];
  nuevoEquipo = { nombre: '', precio: 0, stock: 0 };
  productoSeleccionado: any = null;

}
