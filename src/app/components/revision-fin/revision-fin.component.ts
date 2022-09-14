import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceModel } from 'src/app/models/serviceModel';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { DBConectionService } from 'src/app/services/dbconection.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
@Component({
  selector: 'app-revision-fin',
  templateUrl: './revision-fin.component.html',
  styleUrls: ['./revision-fin.component.css']
})
export class RevisionFinComponent implements OnInit {
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
    this.serviceModel.emailSent =select.emailsent
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
    this.serviceModel.estatusActividad = select.estatusActividad  
    this.serviceModel.firmaSolicitante =select.firmaSolicitante 
    this.serviceModel.emailSent2='true'
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
    serviceModel.emailSent2='true'
    if ((document.getElementById('flexRadioDefault2') as HTMLInputElement).checked === true) {
      serviceModel.trabajoSanitizado = 'Si' } 
      else{
        if ((document.getElementById('flexRadioDefault1') as HTMLInputElement).checked === true) {
          serviceModel.trabajoSanitizado = 'No' } 
      }


  if ((document.getElementById('flexCheckDefault1') as HTMLInputElement).checked === true) {
    serviceModel.estatusActividad = 'Falta de refacción(Trabajo Temporal)' } 
    else{
      if ((document.getElementById('flexCheckDefault2') as HTMLInputElement).checked === true) {
        serviceModel.estatusActividad = 'Recoger herramientas y refacciones' }
        else{
          if ((document.getElementById('flexCheckDefault3') as HTMLInputElement).checked === true) {
            serviceModel.estatusActividad = 'Terminado' }
            else{
              if ((document.getElementById('flexCheckDefault4') as HTMLInputElement).checked === true) {
                serviceModel.estatusActividad = 'Cancelado' }
            }
        }
    
}

   
  this.dBConectionService.addTareas(serviceModel.idSolicitud, serviceModel)
    .subscribe((res) => {
      if (res) {
        alert('mmm')
      } else {
        alert('Error! :(')
      }
    })
  
 
}

}
