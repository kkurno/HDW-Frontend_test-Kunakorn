import { Component, Input } from '@angular/core';
import { ModalService } from '../../../services/ui/modal.service';
import { ValidationText } from '../../../constants';

@Component({
  selector: 'app-modal-remove',
  templateUrl: './modal-remove.component.html',
  styleUrls: ['./modal-remove.component.scss']
})
export class ModalRemoveComponent {
  removedItemList: Array<boolean> = [];
  validationText: string;

  @Input() data: Object;
  @Input() callback: Function;

  closeModal() {
    this.modalService.closeModal();
  }

  constructor(private modalService: ModalService) { }

  removeItem(removedItem) {
    this.callback(removedItem);
  }

  removeItems() {
    if (this.removedItemList.length) {
      this.validationText = '';
      this.callback(this.removedItemList);
    } else {
      this.validationText = ValidationText.PLEASE_SELECT;
    }
  }

  check(isChecked, index) {
    isChecked ? this.removedItemList.push(index) : this.removedItemList.splice(this.removedItemList.findIndex(i => i === index), 1);
  }
}
