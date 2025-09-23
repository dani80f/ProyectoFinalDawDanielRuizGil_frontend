import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-equipo',
  standalone: false,
  templateUrl: './equipo.html',
  styleUrl: './equipo.css'
})
export class Equipo implements OnInit{

  equipos: any[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8000/equipo/api', { withCredentials: true })
      .subscribe(res => {
        this.equipos = res;

      });



  }



}
