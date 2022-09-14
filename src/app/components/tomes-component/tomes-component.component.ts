import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DBConectionService } from '../../services/dbconection.service';
import { CargarScriptsService } from '../../services/cargar-scripts.service';

@Component({
  selector: 'app-tomes-component',
  templateUrl: './tomes-component.component.html',
  styleUrls: ['./tomes-component.component.css']
})
export class TomesComponentComponent implements OnInit {
  
  datatable: any = []
 
 
  
  constructor(_CargarScriptsService:CargarScriptsService, public route: ActivatedRoute, private router: Router,private dBConectionService: DBConectionService) { 
    
  }

  ngOnInit(): void {
    this.onDataTable();
  }

 

  onDataTable(){
  this.dBConectionService.getSolicitud().subscribe(res=>{
this.datatable=res;

  });
}












}
