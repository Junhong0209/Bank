import Toast from "./Toast"

export const SuccsessToast = (title: string) => {
  Toast.fire({
    icon: 'success',
    title: `${title}`
  });
};

export const ErrorToast = (title: string) => {
  Toast.fire({
    icon: 'error',
    title: `${title}`
  });
};