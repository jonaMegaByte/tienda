const useGetTotal = (cart) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return cart.reduce(reducer);
};

export default useGetTotal;
