const removeAccountNumber = (value: string | number) => {
  if (typeof value === 'string') {
    return value.replaceAll('-', '');
  } else {
    return value.toString().replaceAll('-', '');
  }
};

export default removeAccountNumber;