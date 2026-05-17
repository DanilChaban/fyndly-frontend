import { ChangeDetectionStrategy, Component, computed, inject, OnDestroy, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { RelativeTimePipe } from '@shared/pipes/relative-time.pipe';
import { ToastItem } from '@ui/fl-toast/types/toast-item';
import { TOAST_ICON, TOAST_TITLE } from '@ui/fl-toast/constants/constants';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'fl-toast',
  imports: [MatIcon, FlButtonComponent, RelativeTimePipe],
  templateUrl: './fl-toast.component.html',
  styleUrl: './fl-toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlToastComponent implements OnDestroy {
  private snackBarRef = inject(MatSnackBarRef<FlToastComponent>);
  data = inject<ToastItem>(MAT_SNACK_BAR_DATA);

  title = computed(() => TOAST_TITLE[this.data.type]);

  icon = computed(() => TOAST_ICON[this.data.type]);

  now = signal(Date.now());

  private elapsedTimer = setInterval(() => this.now.set(Date.now()), 1000);

  close(): void {
    this.snackBarRef.dismiss();
  }

  ngOnDestroy(): void {
    clearInterval(this.elapsedTimer);
  }
}
