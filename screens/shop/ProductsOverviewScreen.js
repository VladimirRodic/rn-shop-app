//import libraries
import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

// create a component
const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <Text>
          {itemData.item.title}: {itemData.item.price}$
        </Text>
      )}
    />
  );
};

//make this component available to the app
export default ProductsOverviewScreen;
