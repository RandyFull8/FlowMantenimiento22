import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ServiceModel } from '../models/serviceModel';
import { ServiceModelArea } from '../models/serviceModelArea';
import { Observable } from 'rxjs';
import { ServiceModelMecanico } from '../models/serviceModelMecanico';
import { ServiceModelMaquina } from '../models/serviceModelMaquina';

@Injectable({
  providedIn: 'root'
})
export class DBConectionService {
  constructor(private http: HttpClient) {}

  urlServices:string="http://172.16.200.160:8082/api/";
  //172.16.200.95:8083

  getSolicitud(){
    return this.http.get(this.urlServices+'solicitud');

   }

   getSolicitudArea(){
    return this.http.get(this.urlServices+'solicitudarea');

   }
   getSolicitudMaquina(){
    return this.http.get(this.urlServices+'solicitudmaquina');

   }
   getSolicitudMecanico(){
    return this.http.get(this.urlServices+'solicitudmecanicos');

   }
   getSolicitudSM(id_Solicitud: string){
    return this.http.get(this.urlServices+'solicitud6'+ `/${id_Solicitud}`);

   }
   /**obtener datos por id */
   getByIdSolicitud(id_Solicitud: string): Observable<ServiceModel> {
    return this.http.get<ServiceModel>(this.urlServices +'Solicitud'+ `/${id_Solicitud}`)
  }
   /**para crear los primeros campos de la solicitud etapa 1 */
   addSolicitud(serviceModel:ServiceModel): Observable <ServiceModel> {
    return this.http.post<ServiceModel>(this.urlServices +'Solicitud2', serviceModel)
  }
  addArea(serviceModelArea:ServiceModelArea): Observable <ServiceModelArea> {
    return this.http.post<ServiceModelArea>(this.urlServices +'Solicitudarea', serviceModelArea)
  }

  addMecanico(serviceModelMecanico:ServiceModelMecanico): Observable <ServiceModelMecanico> {
    return this.http.post<ServiceModelMecanico>(this.urlServices +'Solicitudmecanicos', serviceModelMecanico)
  }

  addMaquina(serviceModelMaquina:ServiceModelMaquina): Observable <ServiceModelMaquina> {
    return this.http.post<ServiceModelMaquina>(this.urlServices +'Solicitudmaquina', serviceModelMaquina)
  }
  /**campos diagnostico etapa 2 */
  addDiagnostico( id_Solicitud: number, serviceModel:ServiceModel): Observable<ServiceModel> {
    return this.http.put<ServiceModel>(this.urlServices +'Solicitud3'+ `/${id_Solicitud}`, serviceModel)
  }
  /**campos tareas ejecutadas-tiempos etapa 3 */
  addTareas(id_Solicitud: number, serviceModel:ServiceModel): Observable <ServiceModel> {
    return this.http.put<ServiceModel>(this.urlServices +'Solicitud4'+`/${id_Solicitud}`, serviceModel)
  }
  /**campos revision etapa 4 */
  addRevision(serviceModel:ServiceModel): Observable <ServiceModel> {
    return this.http.put<ServiceModel>(this.urlServices +'Solicitud5', serviceModel)
  }
  updateSolicitud( idSolicitud: number, serviceModel:ServiceModel): Observable<ServiceModel> {
    return this.http.put<ServiceModel>(this.urlServices +'Solicitud'+ `/${idSolicitud}`, serviceModel)
  }
}

