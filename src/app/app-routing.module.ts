import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractChartComponent } from './contracts/contract-chart/contract-chart.component';
import { ContractFormComponent } from './contracts/contract-form/contract-form.component';
import { AddProjetComponent } from './GestionProjet/add-projet/add-projet.component';


const routes: Routes = [
  {path:"", component:ContractChartComponent},
  {path:"app-add-projet", component:AddProjetComponent},
  { path: 'contracts', loadChildren: () => import('./contracts/contracts.module').then(m => m.ContractsModule) },
  { path: 'etudiants', loadChildren: () => import('./etudiants/etudiants.module').then(m => m.EtudiantsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
