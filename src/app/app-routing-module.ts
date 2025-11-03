import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {App} from './app';
import {Usuario} from './usuario/usuario';
import {Equipo} from './equipo/equipo';
import {Liga} from './liga/liga';
import {LigaJuego} from './liga/liga-juego/liga-juego';
import {LigaJugadores} from './liga/liga-jugadores/liga-jugadores';
import {LigaSimulacion} from './liga/liga-juego/liga-simulacion/liga-simulacion';

const routes: Routes = [

  { path: 'usuario', component: Usuario },
  { path: 'equipo', component: Equipo },
  { path: 'liga', component: Liga },
  { path: 'ligaJuego', component: LigaJuego },
  { path: 'ligaJugadores', component: LigaJugadores },
  { path: 'ligaSimulacion', component: LigaSimulacion },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
