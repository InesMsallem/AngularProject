import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjetComponent } from './GestionProjet/add-projet/add-projet.component';


const routes: Routes = [
  {path:"app-add-projet", component:AddProjetComponent},
  { path: 'contracts', loadChildren: () => import('./contracts/contracts.module').then(m => m.ContractsModule) },
  { path: 'etudiants', loadChildren: () => import('./etudiants/etudiants.module').then(m => m.EtudiantsModule) },
  { path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
