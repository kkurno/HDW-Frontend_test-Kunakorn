import { Component, OnDestroy } from '@angular/core';
import { ItemService } from '../../services/data/item.service';
import { Item } from '../../interfaces/interfaces';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnDestroy {
  itemCount = 0;
  service;

  constructor(itemService: ItemService) {
    this.service = itemService.items.subscribe(v => this.itemCount = v.length);
  }

  ngOnDestroy() {
    this.service.unsubscribe();
  }
}
