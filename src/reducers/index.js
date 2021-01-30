const reducer = (state, actions) => {
  switch (actions.type) {
    case 'ADD_NEW_CLIENT':
      return {
        ...state,
        users: [...state.users, actions.payload],
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, actions.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: [...actions.payload]
      }
    default:
      return state;
  }
};

export default reducer;
