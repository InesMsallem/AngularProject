import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTeams } from '@core/store/teams/teams.actions';
import * as fromStore from '@core/store';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private store: Store<fromStore.State>) { }

  teams$ = this.store.select(fromStore.getTeams);

  ngOnInit(): void {
    this.store.dispatch(loadTeams());
  }

}
