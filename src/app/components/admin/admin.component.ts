import { Component, OnInit } from '@angular/core';
//import { Component, OnInit, TemplateRef } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DBConectionService } from 'src/app/services/dbconection.service';
import { ServiceModel } from 'src/app/models/serviceModel';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { ServiceModelArea } from 'src/app/models/serviceModelArea';
import { ServiceModelMaquina } from 'src/app/models/serviceModelMaquina';
import { ServiceModelMecanico} from 'src/app/models/serviceModelMecanico';
import Swal from 'sweetalert2'
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  serviceModel: ServiceModel = new ServiceModel()
  serviceModelArea: ServiceModelArea = new ServiceModelArea()
  serviceModelMaquina: ServiceModelMaquina = new ServiceModelMaquina()
  serviceModelMecanico: ServiceModelMecanico = new ServiceModelMecanico()

  datatable: any = []
  datatable2: any = []
  datatable3: any = []
  datatable4: any = []
  constructor(  public route: ActivatedRoute,private router: Router,private dBConectionService: DBConectionService,_CargarScriptsService:CargarScriptsService) { _CargarScriptsService.carga(['time']), _CargarScriptsService.carga(['NabBarFunctions'])}
  ngOnInit(): void {
    this.onDataTable();
    this.onDataTable2();
    this.onDataTable3();
    this.onDataTable4();
  }
  onDataTable(){
    this.dBConectionService.getSolicitud().subscribe(res=>{
  this.datatable=res;

    });
  }
  onDataTable2(){
    this.dBConectionService.getSolicitudArea().subscribe(res=>{
  this.datatable2=res;

    });
  }
  onDataTable3(){
    this.dBConectionService.getSolicitudMaquina().subscribe(res=>{
  this.datatable3=res;
    });
  }
  onDataTable4(){
    this.dBConectionService.getSolicitudMecanico().subscribe(res=>{
  this.datatable4=res;
    });
  }

  onAddSolicitud(serviceModelArea: ServiceModelArea): void {
    this.dBConectionService.addArea(serviceModelArea).subscribe((res) => {
      if (res) {
console.log(res)

        Swal.fire({
          title: 'Registro de area',
          text: "¡¡Presione el botón para confirmar!!",
          icon: 'info',
          showCancelButton: false,
          confirmButtonColor: 'rgb(255, 194, 28)',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok,volver'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Registro exitoso!',
              'success',

            ),
            //window.location.reload()
            this.onDataTable2();
          }
        })


      } else {
        alert('Error! :(')

      }
    })
  }
  onAddSolicitudMecanico(serviceModelMecanico: ServiceModelMecanico): void {
    this.dBConectionService.addMecanico(serviceModelMecanico).subscribe((res) => {
      if (res) {
console.log(res)

        Swal.fire({
          title: 'Registro de area',
          text: "¡¡Presione el botón para confirmar!!",
          icon: 'info',
          showCancelButton: false,
          confirmButtonColor: 'rgb(255, 194, 28)',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok,volver'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Registro exitoso!',
              'success',

            ),
            //
            this.onDataTable4();

          }
        })


      } else {
        alert('Error! :(')

      }
    })
  }

  onAddSolicitudMaquina(serviceModelMaquina: ServiceModelMaquina): void {
    this.dBConectionService.addMaquina(serviceModelMaquina).subscribe((res) => {
      if (res) {
console.log(res)

        Swal.fire({
          title: 'Registro de area',
          text: "¡¡Presione el botón para confirmar!!",
          icon: 'info',
          showCancelButton: false,
          confirmButtonColor: 'rgb(255, 194, 28)',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok,volver'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Registro exitoso!',
              'success',

            ),
            //
            this.onDataTable3();

          }
        })


      } else {
        alert('Error! :(')

      }
    })
  }




}
