import { ActionReducerMap } from '@ngrx/store';
import * as fromTeam from '@core/store/teams/teams.reducer';

import * as teamEffects from '@core/store/teams/teams.effects';

export interface State {
    teams: fromTeam.TeamState;
}

export const reducers: ActionReducerMap<State> = { teams: fromTeam.teamReducer };

export const effects: any[] = [teamEffects.TeamEffects];

export const getTeams = (state: State) => state.teams.teams;
export const getIsLoading = (state: State) => state.teams.isLoading;
export const getIsLoaded = (state: State) => state.teams.isLoaded;