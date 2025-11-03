import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Auth} from '../auth';

@Component({
  selector: 'app-liga',
  standalone: false,
  templateUrl: './liga.html',
  styleUrl: './liga.css'
})
export class Liga  implements OnInit{

  ligas: any[] = [];

  constructor(private http: HttpClient, private router: Router, private auth: Auth) {}


  ngOnInit(): void {

    this.auth.estaIniciado()

    this.http.get<any[]>('http://localhost:8000/liga/api', { withCredentials: true })
      .subscribe(res => {
        this.ligas = res

      });

  }

  crearLiga(): void{

    window.location.href = `http://localhost:8000/liga/create`;

  }

  eliminar(id: number): void {

    window.location.href = `http://localhost:8000/liga/delete/${id}`;

  }

  modificar(id: number): void {

    window.location.href = `http://localhost:8000/liga/edit/${id}`;

  }

  anadirEquipos(id: number): void{

    window.location.href = `http://localhost:8000/liga/anadirEquipos/${id}`;


  }

  empezarLiga(id: number): void{

    this.http.get<any[]>(`http://localhost:8000/liga/empezarLiga/${id}`, { withCredentials: true })
      .subscribe(res => {
        this.ligas = res

      });
  }

  estaIniciada(id: number): boolean{


    for (let i = 0; i < this.ligas.length; i++){

      if (this.ligas[i].id === id){
        return true;
      }

    }

    return false;

  }

  jugar(id: number): void{

    sessionStorage.setItem('idLiga', id.toString());


    if (this.estaIniciada(id)){

      this.router.navigate(['/ligaJuego']);

    }

  }

}
