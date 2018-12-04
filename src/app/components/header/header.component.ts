import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/ui/modal.service';
import { ItemService } from '../../services/data/item.service';
import { Item } from '../../interfaces/interfaces';

@Component({
  selector: 'app-component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  keyword: string;

  @Input() items: Array<Item>;
  @Input() filterAndUpdateItems: Function;
  @Input() updateKeyword: Function;
  @Input() headerName: string;

  openAddModal() {
    this.modalService.openModal('add', { items: this.items }, (item: Item) => {
      this.itemService.addItem(item);
      this.modalService.closeModal();
    });
  }

  openRemoveModal() {
    this.modalService.openModal('remove', { items: this.items }, (indexes: Array<number>) => {
      this.itemService.removeItems(indexes);
      this.modalService.closeModal();
    });
  }

  constructor(private itemService: ItemService, private modalService: ModalService) {}

  search() {
    this.updateKeyword(this.keyword);
    this.filterAndUpdateItems();
  }
}
