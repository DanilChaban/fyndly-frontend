import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastType } from '@ui/fl-toast/types/toast-type';
import { FlToastComponent } from '@ui/fl-toast/component/fl-toast/fl-toast.component';

@Injectable({
  providedIn: 'root',
})
export class FlToastService {
  private readonly snackBar = inject(MatSnackBar);

  success(message: string): void {
    this.open(message, 'success');
  }

  error(message: string): void {
    this.open(message, 'error');
  }

  warning(message: string): void {
    this.open(message, 'warning');
  }

  info(message: string): void {
    this.open(message, 'info');
  }

  private open(message: string, type: ToastType): void {
    this.snackBar.openFromComponent(FlToastComponent, {
      data: {
        message,
        type,
        createdAt: Date.now(),
      },
      duration: 12000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['fl-toast-panel'],
    });
  }
}
