import {View, Text, FlatList, StyleSheet} from "react-native";
import React from "react";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    title: "Red Jacket for Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in Good Condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={"₹" + item.price}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
