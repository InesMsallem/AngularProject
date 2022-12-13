import { ActionReducerMap } from '@ngrx/store';
import * as fromStudent from '@core/store/students/students.reducer';

import * as effectsStudent from '@core/store/students/students.effects';

export interface State {
    students: fromStudent.StudentState;
}

export const reducers: ActionReducerMap<State> = { students: fromStudent.studentReducer };

export const effects: any[] = [effectsStudent.StudentEffects];

export const getStudents = (state: State) => state.students.students;
export const getIsLoading = (state: State) => state.students.isLoading;
export const getIsLoaded = (state: State) => state.students.isLoaded;