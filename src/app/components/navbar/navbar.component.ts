import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DBConectionService } from 'src/app/services/dbconection.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  datatable: any = []
  capturaN:any;
 
  constructor(private modalService: BsModalService, public route: ActivatedRoute, private router: Router,private dBConectionService: DBConectionService) {
 
}

  ngOnInit(): void {
  }
 
   
 public getInputValue(inputValue:string){
    
  this.router.navigate(['Sesion_mecanico/'+inputValue])
  .then(() => {
    window.location.reload();
  });

   
}}
