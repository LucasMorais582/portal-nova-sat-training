import { Injectable } from '@angular/core';
import { UsersInterface} from '../interface/UsersInterface';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

constructor(private http: HttpClient) { }

private apiUrl = 'http://localhost:3000/';

getAll(): Observable<UsersInterface[]>{
  return this.http.get<UsersInterface[]>(this.apiUrl);
  };

postUser(postData: any): Observable<any>{
  return this.http.post<any>(this.apiUrl, postData);
}
}
