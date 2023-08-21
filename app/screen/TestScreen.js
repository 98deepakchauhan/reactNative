import {View, Text, StyleSheet} from "react-native";
import React from "react";
import Card from "../components/Card";

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <Card
        title="Red Jacket for Sale!"
        subTitle="₹100"
        image={require("../assets/jacket.jpg")}
      />
      <Card
        title="This is card 2"
        subTitle="₹1000"
        image={require("../assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 50,
    padding: 20,
    backgroundColor: "grey",
  },
});
