import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private tokenKey = 'auth_token';
    private usersKey = 'registered_users';

    constructor() { }

    /**
     * Simula uma chamada de API de login.
     * @param email Email do usuário
     * @param password Senha do usuário
     * @returns Observable<boolean>
     */
    login(email: string, password: string): Observable<boolean> {
        return new Observable(observer => {
            setTimeout(() => {
                const users = this.getUsers();
                const user = users.find(u => u.email === email && u.password === password);

                if (user) {
                    localStorage.setItem(this.tokenKey, 'fake-jwt-token-' + Math.random());
                    observer.next(true);
                    observer.complete();
                } else {
                    observer.error(new Error('Credenciais inválidas'));
                }
            }, 1500);
        });
    }

    /**
     * Registra um novo usuário.
     * @param user Objeto do usuário
     * @returns Observable<boolean>
     */
    register(user: any): Observable<boolean> {
        return new Observable(observer => {
            setTimeout(() => {
                const users = this.getUsers();
                if (users.find(u => u.email === user.email)) {
                    observer.error(new Error('Email já cadastrado'));
                    return;
                }

                users.push(user);
                localStorage.setItem(this.usersKey, JSON.stringify(users));
                observer.next(true);
                observer.complete();
            }, 1000);
        });
    }

    private getUsers(): any[] {
        const users = localStorage.getItem(this.usersKey);
        if (users) {
            return JSON.parse(users);
        }

        // Cria usuário padrão se não houver usuários
        const defaultUser = {
            email: 'admin@email.com',
            password: '123456',
            name: 'Admin'
        };
        localStorage.setItem(this.usersKey, JSON.stringify([defaultUser]));
        return [defaultUser];
    }

    /**
     * Desloga o usuário removendo o token.
     */
    logout(): void {
        localStorage.removeItem(this.tokenKey);
    }

    /**
     * Verifica se o usuário está logado.
     * @returns boolean
     */
    isLoggedIn(): boolean {
        return !!localStorage.getItem(this.tokenKey);
    }
}
