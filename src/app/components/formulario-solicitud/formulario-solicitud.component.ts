import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/serviceModel';
import { ServiceModelArea } from 'src/app/models/serviceModelArea';
import { ServiceModelMecanico } from 'src/app/models/serviceModelMecanico';
import { ServiceModelMaquina } from 'src/app/models/serviceModelMaquina';
import { NgModule } from '@angular/core';
import { DBConectionService } from 'src/app/services/dbconection.service';
import { CargarScriptsService } from '../../services/cargar-scripts.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-formulario-solicitud',
  templateUrl: './formulario-solicitud.component.html',
  styleUrls: ['./formulario-solicitud.component.css'],
})


export class FormularioSolicitudComponent implements OnInit {
  serviceModel: ServiceModel = new ServiceModel()
  serviceModelArea: ServiceModelArea = new ServiceModelArea()
  serviceModelMaquina: ServiceModelMaquina = new ServiceModelMaquina()

  datatable: any = []
  datatable2: any = []
  datatable3: any = []
  constructor(  public route: ActivatedRoute,private router: Router,private dBConectionService: DBConectionService,_CargarScriptsService:CargarScriptsService) { _CargarScriptsService.carga(['time']), _CargarScriptsService.carga(['NabBarFunctions'])}

  ngOnInit(): void {

    this.onDataTable2();
    this.onDataTable3();
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

  onAddSolicitud(serviceModel: ServiceModel): void {
      this.dBConectionService.addSolicitud(serviceModel).subscribe((res) => {
        if (res) {
console.log(res)

          Swal.fire({
            title: 'Registro de solicitud',
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
                'Notificación enviada.',
                'success',

              ),
              window.location.reload()

            }
          })


        } else {
          alert('Error! :(')

        }
      })
    }






}
