import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ProductItem = (props) => {
  const handleOnViewDetails = props.onViewDetails;
  const navigateToDetailsScreen = () => {
    props.navigation.navigate("Product Detail", {
      itemId: props.itemId,
      title: props.title,
    });
  };
  return (
    <TouchableOpacity onPress={navigateToDetailsScreen}>
      <View style={styles.container}>
        {/* You must set image width and height for remote images in order to be able to see it */}
        <Image style={styles.image} source={{ uri: props.image }} />
        <Text style={styles.title}>
          {props.title} Id:{props.itemId}
        </Text>
        <Text>${props.price}</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="View Details"
            // here I wanted to call
            onPress={handleOnViewDetails}
            //onPress={navigateToDetailsScreen}
          />
          <Button title="To Cart" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
    marginVertical: 5,
  },
  image: {
    width: "100%",
    height: "60%",
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
});

export default ProductItem;
