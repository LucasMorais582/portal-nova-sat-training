import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from '../../service/card.service';
import { Card } from '../../model/card';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardpage',
  imports: [CardComponent, CommonModule],
  templateUrl: './cardpage.component.html',
  styleUrl: './cardpage.component.css',
})
export class CardpageComponent {
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
