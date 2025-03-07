import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastContainer: HTMLElement | null = null;

  constructor() {
    this.createToastContainer();
  }

  private createToastContainer() {
    this.toastContainer = document.createElement('div');
    this.toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(this.toastContainer);
  }

  show(header: string, message: string, status: 'Success' | 'Error' | 'Fail' | 'Warning', delay: number = 3000) {
    if (!this.toastContainer) return;

    const { icon, headerColor } = this.getToastStyles(status);

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast show border-0 shadow';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');

    // Create toast header
    const toastHeader = document.createElement('div');
    toastHeader.className = `toast-header ${headerColor} text-white`;

    const img = document.createElement('img');
    img.src = icon;
    img.className = 'rounded me-2';
    img.style.width = '20px';

    const strong = document.createElement('strong');
    strong.className = 'me-auto';
    strong.textContent = header;

    const small = document.createElement('small');
    small.textContent = 'Just now';

    const closeButton = document.createElement('button');
    closeButton.className = 'btn-close btn-close-white';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.onclick = () => this.toastContainer?.removeChild(toast);

    toastHeader.appendChild(img);
    toastHeader.appendChild(strong);
    toastHeader.appendChild(small);
    toastHeader.appendChild(closeButton);

    // Create toast body
    const toastBody = document.createElement('div');
    toastBody.className = 'toast-body';
    toastBody.textContent = message;

    // Append header and body to toast
    toast.appendChild(toastHeader);
    toast.appendChild(toastBody);

    // Append toast to container
    this.toastContainer.appendChild(toast);

    // Auto-remove after delay
    setTimeout(() => {
      if (this.toastContainer?.contains(toast)) {
        this.toastContainer.removeChild(toast);
      }
    }, delay);
  }

  private getToastStyles(status: string) {
    switch (status) {
      case 'Success':
        return { icon: 'https://cdn-icons-png.flaticon.com/512/845/845646.png', headerColor: 'bg-success' };
      case 'Error':
        return { icon: 'https://cdn-icons-png.flaticon.com/512/190/190406.png', headerColor: 'bg-danger' };
      case 'Fail':
        return { icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png', headerColor: 'bg-dark' };
      case 'Warning':
        return { icon: 'https://cdn-icons-png.flaticon.com/512/8213/8213126.png', headerColor: 'bg-warning text-dark' };
      default:
        return { icon: '', headerColor: 'bg-secondary' };
    }
  }
}
