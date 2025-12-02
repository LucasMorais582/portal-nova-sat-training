import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const httpLoggerInterceptor: HttpInterceptorFn = (req, next) => {
    const startTime = Date.now();
    console.log(`[Requisição HTTP] ${req.method} ${req.url}`);

    return next(req).pipe(
        tap({
            next: (event) => {
                // Sucesso na requisição
            },
            error: (error) => {
                // Log de erro com duração
                const duration = Date.now() - startTime;
                console.warn(`[Erro HTTP] ${req.method} ${req.url} - Status: ${error.status} - Duração: ${duration}ms`);
            },
            finalize: () => {
                // Finalização da requisição com duração total
                const duration = Date.now() - startTime;
                console.log(`[Resposta HTTP] ${req.method} ${req.url} - Duração: ${duration}ms`);
            }
        })
    );
};
