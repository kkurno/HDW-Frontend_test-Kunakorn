import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Modal } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modal = new BehaviorSubject<Modal>({
    isOpened: false,
    type: '',
    data: {},
    callback: () => {},
  });

  constructor() {}

  openModal(type: string, data: Object, callback: Function) {
    this.modal.next({ isOpened: true, type, data, callback});
  }

  closeModal() {
    this.modal.next({ isOpened: false, type: '', data: {}, callback: () => {}});
  }
}
