import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Auth} from '../auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-equipo',
  standalone: false,
  templateUrl: './equipo.html',
  styleUrl: './equipo.css'
})
export class Equipo implements OnInit{

  equipos: any[] = [];
  //nombreUsuario: string = '';
  static misequiposestado=false;

  constructor(private http: HttpClient, private router: Router, private auth: Auth) {}



  ngOnInit(): void {

    this.auth.estaIniciado()

    this.http.get<any[]>('http://localhost:8000/equipo/api', { withCredentials: true })
      .subscribe(res => {
        this.equipos = res

      });


  }

  misequiposestado(): boolean{

    return Equipo.misequiposestado;
  }

  misequipos(): void{

    if (Equipo.misequiposestado){

      Equipo.misequiposestado=false;
      this.ngOnInit()
      return;

    }else {

      this.http.get<any[]>('http://localhost:8000/equipo/misequipos', { withCredentials: true })
        .subscribe(res => {
          this.equipos = res

        });
      Equipo.misequiposestado=true;
      return;

    }

  }

  eliminar(id: number): void {

    window.location.href = `http://localhost:8000/equipo/delete/${id}`;

  }

  modificar(id: number): void {

    window.location.href = `http://localhost:8000/equipo/edit/${id}`;

  }



}
