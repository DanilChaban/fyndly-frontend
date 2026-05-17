import { ToastType } from '@ui/fl-toast/types/toast-type';

export const TOAST_TITLE: Record<ToastType, string> = {
  success: 'global.toast.title.success',
  error: 'global.toast.title.error',
  warning: 'global.toast.title.warning',
  info: 'global.toast.title.info',
};

export const TOAST_ICON: Record<ToastType, string> = {
  success: 'success-toast',
  error: 'error-toast',
  warning: 'warning-toast',
  info: 'info-toast',
};
