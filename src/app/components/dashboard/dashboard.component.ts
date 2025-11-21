import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    /** Lista de cards com estatísticas para exibição */
    cards = [
    { title: 'Ordens de Serviço Abertas', value: '08', icon: 'assignment', color: 'text-orange' },
    { title: 'Ordens de Serviço Finalizadas', value: '05', icon: 'assignment', color: 'text-green' },
    { title: 'Ordens de Serviço Canceladas', value: '02', icon: 'assignment', color: 'text-red' },
    ];

  /** Configuração dos dados do gráfico de barras */
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Acessos ao Site' }
    ]
  };

  /** Opções de configuração do gráfico */
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
  };
}
