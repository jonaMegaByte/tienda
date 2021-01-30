const reducer = (state, actions) => {
  switch (actions.type) {
    case 'ADD_BUYER':
      return {
        ...state,
        buyer: [...state.buyer, actions.payload],
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, actions.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: [...actions.payload],
      };
    case 'CLEAN_CART':
      return {
        ...state,
        cart: []
      }
    case 'ADD_SHOPPING':
      return {
        ...state,
        shopping: [...state.shopping, actions.payload]
      }
    default:
      return state;
  }
};

export default reducer;
