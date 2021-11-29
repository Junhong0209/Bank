import Toast from "./Toast"

export const SuccsessToast = (text: string) => {
  Toast.fire({
    icon: 'success',
    text: `${text}`
  });
};

export const ErrorToast = (text: string) => {
  Toast.fire({
    icon: 'error',
    text: `${text}`
  });
};