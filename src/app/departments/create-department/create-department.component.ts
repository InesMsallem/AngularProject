import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/Model/Department';
import { Universite } from 'src/app/core/Model/Universite';
import { DepartmentService } from 'src/app/core/services/department.service';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  listdepartments: Departement[];
  action:String;
  nomUniversite:Universite;
  departement: Departement=new Departement();
  listuniversites:Universite[]
  idUniversite:any;
  value:any
 
universites: Universite = new Universite();
  constructor(private departmentserivce: DepartmentService, private router: Router,  private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
      //this.departmentserivce.getAllUniv().subscribe(response =>this.listuniversites=response)
    this.getUniversites();
    }

  //add|update
  add() {

      let currentName=this.idUniversite;
      let currentId;
      this.listuniversites.forEach(function (value) {
        if(value.nomUniversite==currentName)
        {
          currentId=value.idUniversite;
          console.log("eee"+currentId);
        }
      });
      this.departmentserivce.addDeparttouni(currentId).subscribe(
        res => {
          console.log('department created!');
          this.departement = res;
          console.log(this.departement)
        });

        
    }
  
  changeidUniversite(value:any): void {

    console.log((value.target as HTMLInputElement).value);
    this.idUniversite=(value.target as HTMLInputElement).value;
    console.log(this.idUniversite);
  }

  getUniversites(){
    this.departmentserivce.getUniversites().subscribe(
    (data) => {
      this.listuniversites = data;
      console.log(this.listuniversites);
    });
}

  //delete
  delete() {
    this.departmentserivce.deleteDepartment(this.departement.idDepartement);
  }
  //navigate
  goToDepartmentList() {
    this.router.navigate(['/Department']);
  }

}


