import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: "red",
  },
  headerTintColor: "white",
};

const ProductsStackNavigator = createStackNavigator();

const ProductsNavigator = () => {
  return (
    <NavigationContainer>
      <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
        <ProductsStackNavigator.Screen
          name="All Products"
          component={ProductsOverviewScreen}
        />
      </ProductsStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default ProductsNavigator;
