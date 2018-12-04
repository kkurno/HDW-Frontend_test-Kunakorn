import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from '../../../services/ui/modal.service';
import { ValidationText } from '../../../constants';
import { Item } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {
  validationText: string;
  itemFormData: FormGroup;

  @Input() data: { items: Array<Item>};
  @Input() callback: Function;

  closeModal() {
    this.modalService.closeModal();
  }

  constructor(private modalService: ModalService) {}

  addItem(itemData) {
    if (itemData.valid) {
      const item = {
        ...itemData.getRawValue(),
        isBestSeller: false,
      };
      this.validationText = '';
      this.callback(item);
    } else {
      this.validationText = ValidationText.REQUIRED;
    }
  }

  ngOnInit() {
    this.itemFormData = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      imageFileName: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(0, Validators.required),
    });
  }
}
