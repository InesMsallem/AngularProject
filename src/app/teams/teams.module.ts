import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamsComponent } from './teams.component';

@NgModule({
    declarations: [
      TeamsComponent,
    ],
    imports: [
      CommonModule,
      FormsModule
    ]
  })
  export class TeamsModule { }
  