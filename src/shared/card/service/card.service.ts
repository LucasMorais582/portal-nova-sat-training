import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Cards} from '../interface/cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardsSource = new BehaviorSubject<any[]>([]);
  cards$ = this.cardsSource.asObservable();

  addCard(card: Cards) {
    const currentCards = this.cardsSource.value;
    this.cardsSource.next([...currentCards, card]);
  }

  getCards(){
    return this.cardsSource.value;
  }

  constructor() { }
}
