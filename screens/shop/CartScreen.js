//import libraries
import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import * as cartActions from "../../store/actions/cart";

// create a component
const CartScreen = () => {
  let transformedCartItems = [];

  let cartItems;
  useSelector((state) => (cartItems = state.cart.items));
  // transforming dictionary of objects to an array
  for (const key in cartItems) {
    transformedCartItems.push({
      id: key,
      quantity: cartItems[key].quantity,
      productTitle: cartItems[key].productTitle,
      productPrice: cartItems[key].productPrice,
      sum: cartItems[key].sum,
    });
  }

  let totalAmount;
  useSelector((state) => (totalAmount = state.cart.totalAmount));

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.totalOrder}>
        <Text style={styles.totalOrderHeader}>
          TOTAL: {totalAmount.toFixed(2)}
        </Text>
        <Button title="Order now" onPress={() => {}} />
      </View>
      <View style={styles.detailsList}>
        <FlatList
          data={transformedCartItems}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <View style={styles.singleRow}>
                <Text style={styles.productTotal}>
                  {item.productTitle} Sum: ${item.sum.toFixed(2)}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(cartActions.removeFromCart(item.id));
                  }}
                >
                  <Ionicons name="md-trash" size={23} color="red" />
                </TouchableOpacity>
              </View>
              <Text>
                ${item.productPrice} Qty:{item.quantity}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  totalOrder: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  totalOrderHeader: {
    fontSize: 24,
  },
  detailsList: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    padding: 20,
  },
  cartItem: {
    marginVertical: 10,
  },
  singleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productTotal: {
    fontSize: 20,
  },
});

//make this component available to the app
export default CartScreen;
