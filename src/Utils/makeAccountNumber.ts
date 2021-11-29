const makeAccountNumber = (value: string | number) => {
  if (typeof value === 'string') {
    return value
      .replace(/[^0-9]/g, '')
      .replace(/(\d{3})(\d{2})(\d{7})/g, '$1-$2-$3')
      .replace('--', '-');
  } else {
    return value
      .toString()
      .replace(/[^0-9]/g, '')
      .replace(/(\d{3})(\d{2})(\d{7})/g, '$1-$2-$3')
      .replace('--', '-');
  }
};

export default makeAccountNumber;