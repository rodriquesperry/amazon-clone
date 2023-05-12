export const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // logic for adding item to cart
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
      
    case 'REMOVE_FROM_CART':
      // logic for removing item from cart
      let newCart = [...state.cart];

      const index = state.cart.findIndex(
        (cartItem) => cartItem.id == action.id
      );

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in cart.`
        );
      }

      return { ...state, cart: newCart };
    default:
      return state;
  }
};

export default reducer;
