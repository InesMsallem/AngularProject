import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';


@NgModule({
  declarations: [
    EtudiantsComponent,
    ListEtudiantComponent,
    MyprofileComponent,
    //HeaderComponent,
    ProfileUserComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EtudiantsModule { }
