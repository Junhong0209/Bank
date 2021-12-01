import Swal from "sweetalert2";

export const errorSwal = (text: string) => {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: text
  });
};

export const succsessSwal = (text: string) => {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: text
  });
};