import { IToastOptions } from './toast.interface';

const typeMapping = {
  success: 'success',
  error: 'error',
  info: 'none',
}

const toast = (message: string, options: IToastOptions = {}) => {
  uni.showToast({
    title: message,
    icon: typeMapping[options.type || 'info'],
    duration: 3000,
  });
};

export default toast;