//import libraries
import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

// create a component
const ProductDetailScreen = ({ route }) => {
  const itemId = route.params.itemId;
  const product = useSelector((state) =>
    state.products.availableProducts.find((item) => item.id === itemId)
  );

  return (
    <ScrollView style={styles.container}>
      <Text>
        {product.title}, Id: {itemId}
      </Text>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default ProductDetailScreen;
