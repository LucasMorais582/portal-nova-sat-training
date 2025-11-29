import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {CardService} from '../service/card.service';

@Component({
  selector: 'app-card',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private cardService: CardService,
              private router: Router) {

  }

  cards: any[] = [];

  ngOnInit() {
    this.cardService.cards$.subscribe(cards => {
      console.log("cards recebidos:", cards);
      this.cards = cards;
    });

  }

  protected openDetail(card: any) {
    this.router.navigate(['/card', card.numberPaIc]);
  }
}
