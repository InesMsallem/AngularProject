import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as TeamActions from './teams.actions';
import { TeamService } from '@core/services/team.service';

@Injectable()
export class TeamEffects {
    loadTeams$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TeamActions.loadTeams),
            switchMap(() =>
                this.teamService.getAll().pipe(
                    map(teams => TeamActions.loadTeamsSuccess(teams)),
                    catchError(async (error) => TeamActions.loadTeamsFailure({ error }))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private teamService: TeamService
    ) { }
}
