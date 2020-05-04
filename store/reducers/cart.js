import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/CartItem";
const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      let updatedOrNewCartItem;
      // if product was previously added
      if (state.items[addedProduct.id]) {
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          addedProduct.price,
          addedProduct.title,
          (state.items[addedProduct.id].sum += addedProduct.price)
        );
      } else {
        // if product is added for the first time
        updatedOrNewCartItem = new CartItem(
          1,
          addedProduct.price,
          addedProduct.title,
          addedProduct.price
        );
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + addedProduct.price,
      };
    case REMOVE_FROM_CART:
      const productId = action.pid;
      let updatedCartItems = { ...state.items };
      const itemToBeRemoved = updatedCartItems[productId];

      // if product is not in state
      if (!(productId in state.items)) {
        return state;
      }
      // if quantity is 1 remove entire product
      if (state.items[productId].quantity === 1) {
        delete updatedCartItems[productId];
      } else {
        // if quantity is more than 1 decrease quantity
        let updatedCartItem = new CartItem(
          itemToBeRemoved.quantity - 1,
          itemToBeRemoved.productPrice,
          itemToBeRemoved.productTitle,
          itemToBeRemoved.sum - itemToBeRemoved.productPrice
        );
        updatedCartItems[productId] = updatedCartItem;
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - itemToBeRemoved.productPrice,
      };
  }
  return state;
};
