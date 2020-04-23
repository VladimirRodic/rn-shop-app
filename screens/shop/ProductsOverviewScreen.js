//import libraries
import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";

// create a component
const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          itemId={itemData.item.id}
          navigation={navigation}
          /*
          // I wanted to define function here and call it inside of
          // the  ProductItem component
          //
          // I was not able to navigate by calling this function
          // inside of ProductItem.js with
          // onPress={()=>onViewDetails}
          onViewDetails={() =>
            navigation.navigate("Product Detail", {
              itemId: props.itemId,
              title: props.title,
            })
          }
          */
        />
      )}
    />
  );
};

//make this component available to the app
export default ProductsOverviewScreen;
