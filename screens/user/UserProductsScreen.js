//import libraries
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AddEditProduct from "./EditProductScreen";

// create a component
const UserProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>UserProductsScreen</Text>
      <Button
        title="Add/Edit Product"
        onPress={() => navigation.navigate("AddEditProduct")}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default UserProductsScreen;
