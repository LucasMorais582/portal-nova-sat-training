import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, delay, Observable, of, throwError} from 'rxjs';
import { User } from '../interface/User';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'auth_token';

  constructor(private router: Router) {}

  private userSource = new BehaviorSubject<any[]>([]);
  $user = this.userSource.asObservable();

  addUser(user: User){
    const currentUsers = this.userSource.value;
    this.userSource.next([...currentUsers, user]);
  }

  getUser(): User[] {
    return this.userSource.value;
  }

  login(email:String, password:String): Observable<String> {

    const users = this.getUser();
    const user = users.find(u => u.email === email && u.password === password);

    if(user) {
      const fakeToken = 'fake-jwt-token-' + Math.random().toString(36).substring(2);
      localStorage.setItem(this.TOKEN_KEY, fakeToken);
      console.log("LocalStorage foi escrito!");
      return of(fakeToken).pipe(delay(1000));
    }
    return throwError(() => new Error('Credenciais inválidas'));
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}

