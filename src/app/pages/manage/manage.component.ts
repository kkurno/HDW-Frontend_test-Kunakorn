import { Component, OnDestroy } from '@angular/core';
import { Item } from '../../interfaces/interfaces';
import { ItemService } from '../../services/data/item.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnDestroy {
  items: Array<Item>;
  filterKeyword: string;
  service;

  updateKeyword = (newKeyword) => {
    this.filterKeyword = newKeyword;
  }

  filterAndUpdateItems = () => {
    const currentItems = this.itemService.getCurrentItems();
    if (this.filterKeyword === '' || this.filterKeyword === undefined) {
      this.items = currentItems;
    } else {
      this.items = currentItems.filter(item => item.name.indexOf(this.filterKeyword) !== -1);
    }
  }

  constructor(private itemService: ItemService) {
    this.service = itemService.items.subscribe(v => {
      this.filterAndUpdateItems();
    });
  }

  ngOnDestroy() {
    this.service.unsubscribe();
  }
}
