//generates a random order number
export const OrderNumGenerator = () => {
  return Math.floor(Math.random() * (999999 - 11111) + 11111);
};
