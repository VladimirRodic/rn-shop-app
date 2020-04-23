//import libraries
import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

// create a component
const ProductDetailScreen = ({ route }) => {
  const itemId = route.params.itemId;
  const product = useSelector((state) =>
    state.products.availableProducts.find((item) => item.id === itemId)
  );

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text>Seller ID: {product.ownerId}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Button title="To cart" onPress={() => {}} />
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginVertical: 4,
  },
  price: {
    fontSize: 22,
  },
  description: {
    textAlign: "center",
    fontSize: 18,
    margin: 10,
  },
});

//make this component available to the app
export default ProductDetailScreen;
