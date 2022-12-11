import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TachesRoutingModule } from './gestiontache-routing.module';
import { GestiontacheComponent } from './gestiontache.component';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { ListTacheComponent } from './list-tache/list-tache.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    GestiontacheComponent,
    AddTacheComponent,
    ListTacheComponent,
  ],
  imports: [CommonModule, TachesRoutingModule, FormsModule, NgxPaginationModule],
})
export class TachesModule {}
