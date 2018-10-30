import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected httpClient: HttpClient) {
  }
  getAll(path: string): Observable<any[]> {
    return this.httpClient.get(`${environment.apiUrl}${path}`)
      .pipe(
        map(response => response as any[]), catchError(e => throwError(new Error('something went wrong')))
      );
  }

  getOne(path: string, id:number): Observable<any>
  {
      return this.httpClient.get(`${environment.apiUrl}${path}` + id)
      .pipe(
        map(response => response as any));
  }
  }
}
