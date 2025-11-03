import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Auth} from '../../auth';
import {waitForAsync} from '@angular/core/testing';

@Component({
  selector: 'app-liga-juego',
  standalone: false,
  templateUrl: './liga-juego.html',
  styleUrl: './liga-juego.css'
})
export class LigaJuego implements OnInit{

  idLiga:number | null=0;
  liga:any=[];
  equipos: any[]= [];
  equiposLiga: any[]= [];
  id_equipo_elegido:number = 0;
  static equipoElegido=false;

  jugadores: any[]= [];


  constructor(private http: HttpClient, private router: Router, private auth: Auth) {}


  ngOnInit() {

    this.auth.estaIniciado()

    if (sessionStorage.getItem('idLiga') != null) {


      const idLigaString = sessionStorage.getItem('idLiga');
      this.idLiga = idLigaString !== null ? parseInt(idLigaString, 10) : null;


    }else {
      this.router.navigate(['/liga']);

    }



    this.http.get<any[]>(`http://localhost:8000/ligaEquipo/api2/${this.idLiga}`, { withCredentials: true })
      .subscribe(res => {
        this.equiposLiga = res

        if (this.hayEquipoElegido()!=0){
          LigaJuego.equipoElegido=true;
          this.id_equipo_elegido=this.hayEquipoElegido();

        }
      });

    this.http.get<any[]>(`http://localhost:8000/ligaEquipo/api/${this.idLiga}`, { withCredentials: true })
      .subscribe(res => {
        this.equipos = res

        for (let equipo of this.equipos){

          if (equipo.id==this.id_equipo_elegido){

            sessionStorage.setItem('nombreEquipoElegido', equipo.nombre);
            sessionStorage.setItem('imagenEquipoElegido', equipo.imagen);


          }

        }

      });





  }

  equipoElegido(): boolean{

    return LigaJuego.equipoElegido;
  }

  hayEquipoElegido():number{



    for (let equipo of this.equiposLiga){


      if (equipo.elegido==1){
        sessionStorage.setItem('idEquipoElegido', equipo.id_equipo.toString());
        return equipo.id_equipo
      }

    }

    return 0;

  }

  elegir(id:number):void{


    this.http.get<any>(`http://localhost:8000/ligaEquipo/update/${this.idLiga}`, {
      params: { id_equipo: id },
      withCredentials: true
    }).subscribe(res => {

    });


  }

  getNombreEquipoElegido():string | null{

    return sessionStorage.getItem('nombreEquipoElegido');

  }

  getImagenEquipoElegido():string | null{

    return sessionStorage.getItem('imagenEquipoElegido');

  }

  ficharJugadores():void{

    this.router.navigate(['/ligaJugadores'], {
      queryParams: { gestion: false }
    });

  }

  gestionarJugadores():void{


    this.router.navigate(['/ligaJugadores'], {
      queryParams: { gestion: true }
    });

  }

  empezarLiga():void{


  }


}
