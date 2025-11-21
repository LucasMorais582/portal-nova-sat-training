import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

export const appConfig: ApplicationConfig = {
  providers: [
    // Otimização de detecção de mudanças
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Configuração de rotas
    provideRouter(routes),
    // Cliente HTTP para requisições
    provideHttpClient(),
    // Configuração de gráficos (ng2-charts)
    provideCharts(withDefaultRegisterables())
  ]
};
