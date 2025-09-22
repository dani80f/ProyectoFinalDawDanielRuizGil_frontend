import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Usuario } from './usuario/usuario';
import { Equipo } from './equipo/equipo';


@NgModule({
  declarations: [
    App,
    Usuario,
    Equipo,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
