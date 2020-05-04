import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import ProductsReducer from "./store/reducers/products";
import CartReducer from "./store/reducers/cart";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
