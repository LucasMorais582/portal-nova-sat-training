import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private users: User[] = [];
  private nextId = 6; // Since we have 5 users, next id 6

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.http.get<User[]>('assets/data/users.json').subscribe(data => {
      this.users = data;
    });
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: Omit<User, 'id'>): Observable<User> {
    const newUser: User = { ...user, id: this.nextId++ };
    this.users.push(newUser);
    return of(newUser);
  }

  updateUser(user: User): Observable<User> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
      return of(user);
    }
    throw new Error('User not found');
  }

  deleteUser(id: number): Observable<void> {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return of(undefined);
    }
    throw new Error('User not found');
  }
}
