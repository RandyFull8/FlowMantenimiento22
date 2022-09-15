import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioSolicitudComponent } from './components/formulario-solicitud/formulario-solicitud.component';
import { FormularioFinalComponent } from './components/formulario-final/formulario-final.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TomesComponentComponent } from './components/tomes-component/tomes-component.component';
import { MecancomaterialComponent } from './components/mecancomaterial/mecancomaterial.component';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule } from '@angular/forms';
import { ViewAceptComponent } from './components/view-acept/view-acept.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SesionComponent } from './components/sesion/sesion.component';
import { RevisionFinComponent } from './components/revision-fin/revision-fin.component';
import { AdminComponent } from './components/admin/admin.component'
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    FormularioSolicitudComponent,
    FormularioFinalComponent,
    NavbarComponent,
    TomesComponentComponent,
    MecancomaterialComponent,
    ViewAceptComponent,
    SesionComponent,
    RevisionFinComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
