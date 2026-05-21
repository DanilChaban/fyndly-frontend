import { ToastType } from '@ui/fl-toast/types/toast-type';

export interface ToastItem {
  type: ToastType;
  message: string;
  createdAt: number;
}
