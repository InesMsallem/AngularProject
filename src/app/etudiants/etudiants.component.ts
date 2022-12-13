import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadStudents } from '@core/store/students/students.actions';
import * as fromStore from '@core/store';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit(): void {
    this.store.dispatch(loadStudents());
  }

}
