import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = 'http://localhost:7070/EventBooking/';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  
 

  private extractData(res: Response){
    let body=res;
    return body || {};
  }

  getEventbyGame(game): Observable<any>{
    return this.http.get(endpoint + 'event/' + game).pipe(map(this.extractData));
  }

  getOngoingEvent(game):Observable<any>{
    return this.http.get(endpoint + 'event/' + game + '/ongoing').pipe(map(this.extractData));
  }

  getUpcomingEvent(game):Observable<any>{
    return this.http.get(endpoint + 'event/' + game + '/upcoming').pipe(map(this.extractData));
  }

  getPastEvent(game):Observable<any>{
    return this.http.get(endpoint + 'event/' + game + '/past').pipe(map(this.extractData));
  }


 

   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
