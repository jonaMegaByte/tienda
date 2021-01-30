export const AddNewClient = payload => {
  return {
    type: 'ADD_NEW_CLIENT',
    payload: payload,
  };
};

export const AddToCart = payload => {
  return {
    type: 'ADD_TO_CART',
    payload: payload,
  };
};

export const RemoveFromCart = payload => ({
    type: 'REMOVE_FROM_CART',
    payload
})