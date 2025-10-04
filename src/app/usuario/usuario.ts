import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css'
})
export class Usuario implements OnInit {

  nombreUsuario: string = '';

  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.http.get<{ nombre: string }>('http://localhost:8000/usuario', { withCredentials: true })
      .subscribe(res => {
        this.nombreUsuario = res.nombre;
      });


  }





}
