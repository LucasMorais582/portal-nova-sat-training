import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  /** URL do arquivo JSON com os dados iniciais dos cards */
  private dataUrl = 'assets/data/cards.json';

  /** Subject para gerenciar o estado dos cards */
  private cardsSubject = new BehaviorSubject<Card[]>([]);

  /** Observable exposto para os componentes consumirem a lista de cards */
  cards$ = this.cardsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialCards();
  }

  /**
   * Carrega os cards iniciais a partir do arquivo JSON.
   */
  private loadInitialCards() {
    this.http.get<Card[]>(this.dataUrl).subscribe(cards => {
      this.cardsSubject.next(cards);
    });
  }

  /**
   * Retorna o Observable com a lista de cards.
   * @returns Observable<Card[]>
   */
  getAllCards(): Observable<Card[]> {
    return this.cards$;
  }

  /**
   * Adiciona um novo card à lista.
   * @param card Objeto Card a ser adicionado
   */
  addCard(card: Card) {
    const currentCards = this.cardsSubject.value;
    this.cardsSubject.next([...currentCards, card]);
  }

  /**
   * Simula a exclusão de um card.
   * @param cardId ID do card a ser apagado
   * @returns Objeto simulando uma resposta HTTP
   */
  apagar(cardId: number) {
    // Simula uma chamada HTTP para apagar o card
    return {
      subscribe: (callback: (res: any) => void) => {
        console.log(`Card com ID ${cardId} deletado.`);
        callback({ success: true });
      }
    };
  }
}
