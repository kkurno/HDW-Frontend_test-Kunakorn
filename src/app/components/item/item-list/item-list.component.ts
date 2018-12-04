import { Component, Input } from '@angular/core';
import { ModalService } from '../../../services/ui/modal.service';
import { ItemService } from '../../../services/data/item.service';
import { Item } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-component-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input() item: Item;

  constructor(private modalService: ModalService, private itemService: ItemService) { }

  editItem() {
    this.modalService.openModal('edit', this.item, (formData) => {
      this.itemService.editItem(this.item.id, {
        ...this.item,
        ...formData,
      });
      this.modalService.closeModal();
    });
  }

}
