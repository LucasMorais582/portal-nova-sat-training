import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { CardComponent } from "../../components/card/card.component";
import { CreateCardComponent } from "../../components/create-card/create-card.component";
import { CardService } from '../../service/card.service';
import { Card } from '../../model/card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboardpage',
  standalone: true,
  imports: [CommonModule, DashboardComponent, CardComponent, CreateCardComponent],
  templateUrl: './dashboardpage.component.html',
  styleUrl: './dashboardpage.component.css'
})
export class DashboardpageComponent implements OnInit {
  /** Observable que contém a lista de cards */
  cards$: Observable<Card[]> | undefined;

  constructor(private cardService: CardService) {}

  /**
   * Inicializa o componente carregando todos os cards do serviço.
   */
  ngOnInit(): void {
    this.cards$ = this.cardService.getAllCards();
  }
}
