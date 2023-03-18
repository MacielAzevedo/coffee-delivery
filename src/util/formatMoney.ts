export const formatMoney = (value: number) => {
  return value.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
};
