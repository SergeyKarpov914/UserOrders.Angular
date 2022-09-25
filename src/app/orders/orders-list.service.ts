import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map, of } from "rxjs";

import { IOrder } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class OrderListService {
  private orderUrl = 'http://localhost:4210/api/orders/';
  selectedUser: number = -1;
  
  constructor(private http: HttpClient) { }

  getOrders(id: number): Observable<IOrder[]> {
      return this.http.get<IOrder[]>(this.orderUrl + id) 
        .pipe(
          tap(data => console.log('All: ', JSON.stringify(data))),
          catchError(err => of([]))
        );
  }

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
