import {Component, OnInit, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Auth} from './auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('frontend');

  perfil:string='';

  constructor(private http: HttpClient, private router: Router, private auth: Auth) {}

  ngOnInit() {


    this.http.get<{ perfil: string }>('http://localhost:8000/usuario', { withCredentials: true })
      .subscribe(res => {
        this.perfil = res.perfil;


      });

  }

  esAdmin():boolean{

    if (this.perfil=='admin'){
      return true;
    }
    return false;
  }


}
