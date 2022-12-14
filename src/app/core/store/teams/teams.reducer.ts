import { createReducer, on } from '@ngrx/store';
import { loadTeams, loadTeamsSuccess, loadTeamsFailure } from './teams.actions';
import { Observable } from 'rxjs';

export interface TeamState {
    teams: any[];
    isLoading: boolean;
    isLoaded: boolean;
}

const initialState: TeamState = {
    teams: [],
    isLoading: false,
    isLoaded: false
};

const _teamReducer = createReducer(
    initialState,
    on(loadTeams, state => ({ ...state, isLoading: true, isLoaded: false })),
    on(loadTeamsSuccess, (state, action) => ({ ...state, teams: action.teams, isLoading: false, isLoaded: true })),
    on(loadTeamsFailure, (state) => ({ ...state, isLoading: false, isLoaded: true })),
);

export function teamReducer(state: TeamState | undefined, action: any) {
    return _teamReducer(state, action);
}