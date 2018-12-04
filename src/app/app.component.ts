import { Component } from '@angular/core';
import { ModalService } from './services/ui/modal.service';
import { Modal } from './interfaces/interfaces';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modal: Modal;
  closeModal: Function;
  version: string = environment.VERSION;

  constructor(modalService: ModalService) {
    modalService.modal.subscribe((modal) => {
      this.modal = modal;
    });
  }
}
