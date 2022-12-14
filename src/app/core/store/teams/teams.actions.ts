import { createAction } from '@ngrx/store';

const LOAD_TEAMS = '[Team] Load';
const LOAD_TEAMS_SUCCESS = '[Team] Load Success';
const LOAD_TEAMS_FAILURE = '[Team] Load Failure';

export const loadTeams = createAction(LOAD_TEAMS);
export const loadTeamsSuccess = createAction(LOAD_TEAMS_SUCCESS, (teams: any) => ({ teams }));
export const loadTeamsFailure = createAction(LOAD_TEAMS_FAILURE, (error: any) => ({ error }));