import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  nombreUsuario: string = '';


  constructor(private http: HttpClient, private router: Router) { }

  estaIniciado(): void {

    this.http.get<{ nombre: string }>('http://localhost:8000/usuario', { withCredentials: true })
      .subscribe({
        next: res => {
          return;
        },
        error: err => {
          if (err.status === 401) {

            window.location.href = 'http://localhost:8000/login';


          }
        }
      });
  }

}
