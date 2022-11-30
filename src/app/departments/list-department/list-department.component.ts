import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/core/Model/Department';
import { Observable } from "rxjs";
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
  list: Department[];
  listdepartments: any;
  nomUni:any;
  idDepart:number;
  departmentsList:any;
  codeDepartment:any;
  constructor(private departmentservice:DepartmentService,private router: Router,private uss: ActivatedRoute) { }

 /* listData: MatTableDataSource<any>;*/
  ngOnInit(): void {
   this.getAlldep();
  }
 
  getAlldep() {
    this.departmentservice.getAlldep().subscribe((res) => {
      this.listdepartments = res;
    });
  }
  updatedepartment(idDepart: number) {
    this.router.navigate(['/departments/Department/putDepartement', idDepart]);
  }

  
  deletedepartment(idDepart: number) {
    this.departmentservice. deleteDepartment(idDepart).subscribe((data) => {
      console.log(data);
      this.getAlldep();
    });
  }
  
  toadd(){
    this.router.navigate(['/departments/Department/add'])
  } 
      
  exportToPDF() {
    this.departmentservice.exportPDF().subscribe((responseMessage: any) => {
      const file = new Blob([responseMessage], {
        type: 'application/pdf',
      });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }
  recherche(idDepart: number){
    this.departmentsList= this.departmentservice.getDepartmentByIdList(idDepart).subscribe(res => {
       
       this.departmentsList = res;
       setTimeout(()=>{
         this.list=[];
         this.list[0]=this.departmentsList;
         console.log( res);
       },500)
       
       
       

 
      },
     error => console.log(error));
    
     
   ;}

   
}
