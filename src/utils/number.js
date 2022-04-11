export const currency = (number) => {
  return new Intl.NumberFormat("vn").format(number);
};
