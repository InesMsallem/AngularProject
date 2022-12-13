import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as StudentActions from './students.actions';
import { EtudiantService } from '@core/services/etudiant.service';

@Injectable()
export class StudentEffects {
    loadStudents$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StudentActions.loadStudents),
            switchMap(() =>
                this.studentService.getAll().pipe(
                    map(students => StudentActions.loadStudentsSuccess(students)),
                    catchError(async (error) => StudentActions.loadStudentsFailure({ error }))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private studentService: EtudiantService
    ) { }
}
