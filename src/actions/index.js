export const AddBuyer = (payload) => ({
  type: 'ADD_BUYER',
  payload,
});

export const AddToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});

export const CleanCart = () => ({
  type: 'CLEAN_CART'
})

export const RemoveFromCart = (payload) => ({
  type: 'REMOVE_FROM_CART',
  payload,
});

export const AddShopping = payload => ({
  type: 'ADD_SHOPPING',
  payload
});