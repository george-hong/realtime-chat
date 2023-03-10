export enum ToastType {
  success = 'success',
  error = 'error',
  info = 'info'
}

export interface IToastOptions {
  type?: ToastType;
}
