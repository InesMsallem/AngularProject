import { createAction } from '@ngrx/store';

const LOAD_STUDENTS = '[Student] Load';
const LOAD_STUDENTS_SUCCESS = '[Student] Load Success';
const LOAD_STUDENTS_FAILURE = '[Student] Load Failure';

export const loadStudents = createAction(LOAD_STUDENTS);
export const loadStudentsSuccess = createAction(LOAD_STUDENTS_SUCCESS, (students: any) => ({ students }));
export const loadStudentsFailure = createAction(LOAD_STUDENTS_FAILURE, (error: any) => ({ error }));