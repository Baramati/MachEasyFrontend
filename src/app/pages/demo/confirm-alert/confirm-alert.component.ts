import { Component, ViewChild, ElementRef } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-confirm-alert',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.css']
})
export class ConfirmAlertComponent {
  @ViewChild('confirmModal', { static: false }) confirmModal!: ElementRef;
  private confirmCallback!: (result: boolean) => void;

  openConfirmModal(callback: (result: boolean) => void) {
    this.confirmCallback = callback;
    const modalElement = this.confirmModal.nativeElement;
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  }

  confirmAction() {
    this.confirmCallback(true);
    this.closeModal();
  }

  cancelAction() {
    this.confirmCallback(false);
    this.closeModal();
  }

  closeModal() {
    const modalElement = this.confirmModal.nativeElement;
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance?.hide();
  }
}
