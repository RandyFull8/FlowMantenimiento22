import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TomesComponentComponent } from './components/tomes-component/tomes-component.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioSolicitudComponent } from './components/formulario-solicitud/formulario-solicitud.component';
import { FormularioFinalComponent } from './components/formulario-final/formulario-final.component';
import { MecancomaterialComponent } from './components/mecancomaterial/mecancomaterial.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ViewAceptComponent } from './components/view-acept/view-acept.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { RevisionFinComponent } from './components/revision-fin/revision-fin.component';
import { AdminComponent} from "./components/admin/admin.component";

const routes: Routes = [
  {      
    path: '',component: InicioComponent
  },

  {
    path: 'Resumen_Solicitudes', component: TomesComponentComponent
  },
  {
    path:'view/:id',component:ViewAceptComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'FormSolicitud', component: FormularioSolicitudComponent
  },
  {
    path:'Revision_fin',component:FormularioFinalComponent
  },

  {
    path:'mecanicos3',component:MecancomaterialComponent
  },
  {
    path:'Sesion_mecanico/:id',component:SesionComponent
  },
  {
    path:'revision_final/:id',component:RevisionFinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
