import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../../interfaces/interfaces';

import { mockItems } from './mock.data';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items = new BehaviorSubject<Array<Item>>(mockItems);
  private currentItems: Array<Item>;

  constructor() {
    this.items.subscribe(v => this.currentItems = v);
  }

  getCurrentItems() {
    return this.currentItems;
  }

  addItem(item: Item) {
    this.items.next([
      ...this.currentItems,
      item
    ]);
  }

  removeItems(indexes: Array<number>) {
    let newItems = this.currentItems;
    indexes.forEach(i => {
      newItems[i] = undefined;
    });
    newItems = newItems.filter(i => i !== undefined);
    this.items.next(newItems);
  }

  editItem(id: string, data: Item) {
    const newItems = this.currentItems;
    newItems[newItems.findIndex(item => item.id === id)] = data;
    this.items.next(newItems);
  }
}
