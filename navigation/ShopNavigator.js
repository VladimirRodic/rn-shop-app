import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";

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
        <ProductsStackNavigator.Screen
          name="Product Detail"
          component={ProductDetailScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
        <ProductsStackNavigator.Screen
          name="Cart Screen"
          component={CartScreen}
          options={{ title: "Cart" }}
        />
      </ProductsStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default ProductsNavigator;
