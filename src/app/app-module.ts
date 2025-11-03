import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Rutas
import { AppRoutingModule } from './app-routing-module';

// Componentes propios
import { App } from './app';
import { Usuario } from './usuario/usuario';
import { Equipo } from './equipo/equipo';
import { Liga } from './liga/liga';
import { LigaJuego } from './liga/liga-juego/liga-juego';
import { LigaJugadores } from './liga/liga-jugadores/liga-jugadores';
import { LigaSimulacion } from './liga/liga-juego/liga-simulacion/liga-simulacion';

// 🧱 Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    App,
    Usuario,
    Equipo,
    Liga,
    LigaJuego,
    LigaJugadores,
    LigaSimulacion
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // 👈 Necesario para Material
    HttpClientModule,
    FormsModule,
    RouterModule,             // 👈 Para <router-outlet>
    AppRoutingModule,
    // Material modules
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
