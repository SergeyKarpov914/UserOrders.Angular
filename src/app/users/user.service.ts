import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map, of } from "rxjs";

import { IUser } from "../users/user";

@Injectable({
  providedIn: 'root'
})
export class OrderUserService {
  private userUrl = 'http://localhost:4210/api/users';
  
  constructor(private http: HttpClient) { }

  users$ = this.http.get<IUser[]>(this.userUrl)
  .pipe(catchError(err => of([])));
    
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}