import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  private nextId = 6; // Como temos 5 usuários iniciais, o próximo id é 6
  private apiUrl = '/assets/data/users.json'; // URL para carregar dados iniciais

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.http.get<User[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.usersSubject.next(data);
      },
      error: (err) => {
        console.error('Erro ao carregar usuários:', err);
        // Inicializa com array vazio em caso de erro para evitar crash
        this.usersSubject.next([]);
      }
    });
  }

  // Obter usuários
  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  // Adicionar usuário
  addUser(user: Omit<User, 'id'>): Observable<User> {
    const currentUsers = this.usersSubject.value;
    const newUser: User = { ...user, id: this.nextId++ };

    // Simula uma chamada de API atualizando o estado local
    const updatedUsers = [...currentUsers, newUser];
    this.usersSubject.next(updatedUsers);

    return of(newUser);
  }

  // Atualizar usuário
  updateUser(user: User): Observable<User> {
    const currentUsers = this.usersSubject.value;
    const index = currentUsers.findIndex(u => u.id === user.id);

    if (index !== -1) {
      const updatedUsers = [...currentUsers];
      updatedUsers[index] = user;
      this.usersSubject.next(updatedUsers);
      return of(user);
    }

    // Se não encontrar, retorna o usuário original ou lança erro (aqui apenas retornamos)
    return of(user);
  }

  // Deletar usuário
  deleteUser(id: number): Observable<void> {
    const currentUsers = this.usersSubject.value;
    const updatedUsers = currentUsers.filter(u => u.id !== id);
    this.usersSubject.next(updatedUsers);
    return of(undefined);
  }
}
