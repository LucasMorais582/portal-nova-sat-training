import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private dataUrl = 'assets/data/cards.json';
  private cardsSubject = new BehaviorSubject<Card[]>([]);
  cards$ = this.cardsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialCards();
  }

  private loadInitialCards() {
    this.http.get<Card[]>(this.dataUrl).subscribe(cards => {
      this.cardsSubject.next(cards);
    });
  }

  getAllCards(): Observable<Card[]> {
    return this.cards$;
  }

  addCard(card: Card) {
    const currentCards = this.cardsSubject.value;
    this.cardsSubject.next([...currentCards, card]);
  }

  apagar(cardId: number) {
    // Simula uma chamada HTTP para apagar o card
    return {
      subscribe: (callback: (res: any) => void) => {
        console.log(`Card with ID ${cardId} deleted.`);
        callback({ success: true });
      }
    };
  }
}
