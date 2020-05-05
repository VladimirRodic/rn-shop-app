//import libraries
import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/UI/headerButton";
import ProductItem from "../../components/shop/ProductItem";

// create a component
const ProductsOverviewScreen = ({ navigation }) => {
  // navigation cart button
  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="cart"
          iconName="md-cart"
          onPress={() => navigation.navigate("Cart Screen")}
        />
      </HeaderButtons>
    ),
  });

  const products = useSelector((state) => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          product={itemData.item}
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          itemId={itemData.item.id}
          onViewDetails={() => {
            navigation.navigate("Product Detail", {
              itemId: itemData.item.id,
            });
          }}
          //
        />
      )}
    />
  );
};

//make this component available to the app
export default ProductsOverviewScreen;
