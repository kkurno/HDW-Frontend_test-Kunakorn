import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/interfaces';

@Component({
  selector: 'app-component-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  @Input() items: Array<Item>;

  constructor() {}
}
