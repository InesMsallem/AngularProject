import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjetComponent } from './GestionProjet/add-projet/add-projet.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { AuthGuard } from './_auth/auth.guard';


const routes: Routes = [
  { path:'login',component:LoginComponent},
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'register',component:RegisterComponent},
  { path:'home',component:HeaderComponent,canActivate: [AuthGuard], data: { roles: ['User'] }},
  { path:'admin',component:HeaderComponent,canActivate: [AuthGuard], data: { roles: ['Admin'] }},
  { path:"app-add-projet", component:AddProjetComponent},
  { path: 'contracts', loadChildren: () => import('./contracts/contracts.module').then(m => m.ContractsModule) },
  { path: 'etudiants', loadChildren: () => import('./etudiants/etudiants.module').then(m => m.EtudiantsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
