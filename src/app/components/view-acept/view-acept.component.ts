import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { DBConectionService } from 'src/app/services/dbconection.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { ServiceModel } from 'src/app/models/serviceModel';
@Component({
  selector: 'app-view-acept',
  templateUrl: './view-acept.component.html',
  styleUrls: ['./view-acept.component.css']
})
export class ViewAceptComponent implements OnInit {
  bsModalRef: BsModalRef = new BsModalRef()
  datatable: any = []
  serviceModel: ServiceModel = new ServiceModel()


  constructor(_CargarScriptsService: CargarScriptsService, public route: ActivatedRoute, private router: Router, private dBConectionService: DBConectionService, private modalService: BsModalService) {
_CargarScriptsService.carga(['time'])
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')

        if (id) {
          this.dBConectionService.getByIdSolicitud(id)
            .subscribe({
              next: response => {
                this.datatable = response;


              }
            });
        }
      }

    })



  }
  onSetData(select: any) {
    this.serviceModel.idSolicitud =select.idSolicitud 
    this.serviceModel.nombreSolicitante =select.nombreSolicitante 
    this.serviceModel.correo =select.correo 
    this.serviceModel.fechaSolicitud=select.fechaSolicitud
    this.serviceModel.horaSolicitud =select.horaSolicitud 
    this.serviceModel.area =select.area 
    this.serviceModel.maquina =select.maquina 
    this.serviceModel.dispositivo=select.dispositivo
    this.serviceModel.descripcionProblema =select.descripcionProblema 
    this.serviceModel.nomina =select.nomina 
    this.serviceModel.nombre =select.nombre 
    this.serviceModel.fechaInicio=select.fechaInicio
    this.serviceModel.horaInicio =select.horaInicio 
    this.serviceModel.diagnostico=select.diagnostico
    this.serviceModel.tipoFalla=select.tipoFalla
    this.serviceModel.emailSent ='true' 
    this.serviceModel.generoParo =select.generoParo 
    this.serviceModel.paroCorrectivo=select.paroCorrectivo
    this.serviceModel.paroOperativo =select.paroOperativo 
    this.serviceModel.paroRefaccion =select.paroRefaccion 
    this.serviceModel.tiempoTotal =select.tiempoTotal 
    this.serviceModel.grasaUtilizada=select.grasaUtilizada
    this.serviceModel.refaMateHerra =select.refaMateHerra 
    this.serviceModel.fechaFinal =select.fechaFinal 
    this.serviceModel.horaFinal =select.horaFinal 
    this.serviceModel.trabajoSanitizado=select.trabajoSanitizado
    this.serviceModel.estatusActividad =select.estatusActividad 
    this.serviceModel.firmaSolicitante =select.firmaSolicitante 
    this.serviceModel.emailSent2=select.emailSent2
    }
  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template)
  }
  saveSomeThing() {
    this.bsModalRef.hide()
  } 

  onDataTable() {
    this.dBConectionService.getSolicitud().subscribe(res => {
      this.datatable = res;

    });
  }
  onUpdateSalida(serviceModel: ServiceModel): void {

  this.dBConectionService.addDiagnostico(serviceModel.idSolicitud, serviceModel)
    .subscribe((res) => {
      if (res) {
        
      } else {
        alert('Error! :(')
      }
    })
  
 
}

}
