import { Component, Input, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from '../../../services/ui/modal.service';
import { Item } from '../../../interfaces/interfaces';
import { ValidationText } from '../../../constants';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  validationText: string;

  itemFormData = new FormGroup({
    name: new FormControl('', Validators.required),
    imageFileName: new FormControl(),
    description: new FormControl(),
    price: new FormControl(0, Validators.required)
  });

  @Input() data: Item;
  @Input() callback: Function = () => {};

  closeModal() {
    this.modalService.closeModal();
  }

  constructor(private modalService: ModalService) {}

  editItem(itemData: NgForm) {
    if (itemData.valid) {
      this.validationText = '';
      this.callback(itemData.value);
    } else {
      this.validationText = ValidationText.REQUIRED;
    }
  }

  ngOnInit() {
    const filteredItem = Object.keys(this.data)
      .filter(key => ['name', 'imageFileName', 'description', 'price'].includes(key))
      .reduce((obj, key) => {
        obj[key] = this.data[key];
        return obj;
      }, {});

    this.itemFormData.setValue(filteredItem);
  }

}
