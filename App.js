import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { View, Text } from "react-native";

import ProductsReducer from "./store/reducers/products";
import ShopNavigator from "./navigation/ShopNavigator";
import ProductsOverviewScreen from "./screens/shop/ProductsOverviewScreen";

const rootReducer = combineReducers({
  products: ProductsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
