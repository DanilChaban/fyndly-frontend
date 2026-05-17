import { ToastType } from '@ui/fl-toast/types/toast-type';

export const TOAST_DEFAULT_DURATION = 20000;

export const TOAST_TITLE: Record<string, string> = {
  success: 'Success',
  error: 'Something went wrong',
  warning: 'Warning',
  info: 'Information',
};

export const TOAST_ICON: Record<ToastType, string> = {
  success: 'success-toast',
  error: 'error-toast',
  warning: 'warning-toast',
  info: 'info-toast',
};
