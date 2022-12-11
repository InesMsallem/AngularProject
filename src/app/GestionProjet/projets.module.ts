import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';
import { GestionprojetComponent } from './gestionprojet.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    GestionprojetComponent,
    AddProjetComponent,
    ListProjetComponent,
  ],
  imports: [CommonModule, ProjetsRoutingModule, FormsModule, NgxPaginationModule],
})
export class ProjetsModule {}
