import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {App} from './app';
import {Usuario} from './usuario/usuario';
import {Equipo} from './equipo/equipo';

const routes: Routes = [

  { path: 'usuario', component: Usuario },
  { path: 'equipo', component: Equipo },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
