import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DetailsDepartmentComponent } from './details-department/details-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DepartmentsComponent,
    CreateDepartmentComponent,
    DetailsDepartmentComponent,
    ListDepartmentComponent
  ],
  imports: [CommonModule, DepartmentsRoutingModule, FormsModule],
})
export class DepartmentsModule { }
