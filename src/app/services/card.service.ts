import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cards = new BehaviorSubject<any[]>([]);
  currentCards = this.cards.asObservable();

  constructor() { }

  addCard(card: any) {
    const currentValue = this.cards.value;
    const updatedValue = [...currentValue, card];
    this.cards.next(updatedValue);
  }
}
