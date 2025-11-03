import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Auth} from '../../auth';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-liga-jugadores',
  standalone: false,
  templateUrl: './liga-jugadores.html',
  styleUrl: './liga-jugadores.css'
})
export class LigaJugadores implements OnInit{

  idLiga:number | null=0;
  jugadoresGlobal: any[]= [];
  jugadoresLocal: any[]= [];
  private vistaGestion: boolean= false;

  displayedColumns: string[] = ['imagen', 'nombre', 'apellidos', 'posicion', 'media', 'precio', 'fichar'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private http: HttpClient, private router: Router, private auth: Auth, private route: ActivatedRoute) {}

  ngOnInit() {

    this.auth.estaIniciado()

    if (sessionStorage.getItem('idLiga') != null) {


      const idLigaString = sessionStorage.getItem('idLiga');
      this.idLiga = idLigaString !== null ? parseInt(idLigaString, 10) : null;


    }else {
      this.router.navigate(['/liga']);

    }

    this.route.queryParams.subscribe(params => {
      const estadoStr = params['gestion'];
      const estado = estadoStr === 'true';
      console.log(estado);


      if (estado) {

        this.vistaGestion = true;
      } else {

        this.vistaGestion = false;

      }

    });


    this.http.get<any[]>(`http://localhost:8000/ligaJugador/api/${this.idLiga}`, { withCredentials: true })
      .subscribe(res => {
        this.jugadoresGlobal = res


      });

    this.http.get<any[]>(`http://localhost:8000/ligaJugador/api2/${this.idLiga}`, { withCredentials: true })
      .subscribe(res => {
        this.jugadoresLocal = res
        this.dataSource.data = this.jugadoresGlobal

      });

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  fichar(id:number, nombre:String,apellidos:String, posicion:String,media:number, precio:number):void {


    window.location.href = `http://localhost:8000/ligaJugador/store/${id}?posicion=${posicion}&precio=${precio}&id_equipo=${sessionStorage.getItem('idEquipoElegido')}&id_liga=${sessionStorage.getItem('idLiga')}`;


  }

  estaFichado(jugador:any):boolean{

    return this.jugadoresLocal.some((p) => p.id_jugador === jugador.id);
  }

  gestionVista():boolean{

      return this.vistaGestion;

  }


}

