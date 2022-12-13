import { createReducer, on } from '@ngrx/store';
import { loadStudents, loadStudentsSuccess, loadStudentsFailure } from './students.actions';
import { Observable } from 'rxjs';

export interface StudentState {
    students: any[];
    isLoading: boolean;
    isLoaded: boolean;
}

const initialState: StudentState = {
    students: [],
    isLoading: false,
    isLoaded: false
};

const _studentReducer = createReducer(
    initialState,
    on(loadStudents, state => ({ ...state, isLoading: true, isLoaded: false })),
    on(loadStudentsSuccess, (state, action) => ({ ...state, students: action.students, isLoading: false, isLoaded: true })),
    on(loadStudentsFailure, (state) => ({ ...state, isLoading: false, isLoaded: true })),
);

export function studentReducer(state: StudentState | undefined, action: any) {
    return _studentReducer(state, action);
}