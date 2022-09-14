import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../services/cargar-scripts.service';

@Component({
  selector: 'app-mecancomaterial',
  templateUrl: './mecancomaterial.component.html',
  styleUrls: ['./mecancomaterial.component.css']
})
export class MecancomaterialComponent implements OnInit {

  constructor(_CargarScriptsService:CargarScriptsService) 
  {_CargarScriptsService.carga(['time']) }

  ngOnInit(): void {
  }

}
