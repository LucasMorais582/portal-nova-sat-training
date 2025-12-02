import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    // Verifica se o usuário está logado
    if (authService.isLoggedIn()) {
        return true;
    } else {
        // Redireciona para o login se não estiver autenticado
        router.navigate(['/login']);
        return false;
    }
};
