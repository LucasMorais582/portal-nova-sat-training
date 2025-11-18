import { CardService } from './../../service/card.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../model/card';
import { CreateCardComponent } from "../create-card/create-card.component";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CreateCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  expandedCardId: number | null = null;

  cards: Card[] = [
    { id: 1, title: 'Card Title', description: 'Esse é o texto do componente de card.', icon: 'assets/documentoslogo.png' },
    { id: 2, title: 'Card Title2', description: 'Esse é o texto do componente de card.', icon: 'assets/bob_esponja.png' },
    { id: 3, title: 'Card Title3', description: 'Esse é o texto do componente de card.', icon: 'assets/engenharia_ambiental.png' },
    { id: 4, title: 'Card Title4', description: 'Esse é o texto do componente de card.', icon: 'assets/medicina_simbolo.png' },
    { id: 5, title: 'Card Title5', description: 'Esse é o texto do componente de card.', icon: 'assets/Simbolo_engenharia.svg.png' },
    { id: 6, title: 'Card Title6', description: 'Esse é o texto do componente de card.', icon: 'assets/direito.png' },
  ];

  constructor(private cardService: CardService) {}

  toggleExpand(cardId: number): void {
    this.expandedCardId = this.expandedCardId === cardId ? null : cardId;
  }


  deleteCard(cardId: number){
    // Chama o serviço para apagar pelo id e atualiza a lista local ao receber sucesso
    this.cardService.apagar(cardId).subscribe(res => {
      // remover o card localmente para atualizar a UI
      this.cards = this.cards.filter(c => c.id !== cardId);
      console.log(res);
    });
  }
}
