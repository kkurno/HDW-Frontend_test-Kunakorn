import { Component, OnDestroy, ElementRef, Input, HostListener } from '@angular/core';
import { ModalService } from '../../services/ui/modal.service';
import { KeyName } from '../../constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy {
  @Input() type: string;
  @Input() data: Object;
  @Input() callback: Function;

  // close current modal after press ESC
  @HostListener('document:keyup', ['$event']) handleKeyPress(e: KeyboardEvent) {
    if (e.key === KeyName.ESC) {
      this.modalService.closeModal();
    }
  }

  closeModalAfterClickOutside = (e) => {
    if (e.target.id === 'modal') {
      this.modalService.closeModal();
    }
  }

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.el.nativeElement.addEventListener('click', this.closeModalAfterClickOutside);
  }

  ngOnDestroy() {
    this.el.nativeElement.removeEventListener('click', this.closeModalAfterClickOutside);
  }
}
