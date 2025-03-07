import { Injectable } from '@angular/core';
import { ConfirmAlertComponent } from './confirm-alert.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmAlertService {
  private confirmAlertComponent!: ConfirmAlertComponent;

  registerComponent(component: ConfirmAlertComponent) {
    this.confirmAlertComponent = component;
  }

  confirm(): Promise<boolean> {
    return new Promise((resolve) => {
      this.confirmAlertComponent.openConfirmModal(resolve);
    });
  }
}
