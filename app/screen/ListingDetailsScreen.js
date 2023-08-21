import {View, Text, Image, StyleSheet} from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>Red Jacket for Sale</AppText>
        <AppText style={styles.subTitle}>₹100</AppText>
        <View style={styles.listContainer}>
          <ListItem
            title="Mosh Hamedani"
            subTitle="5 Listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: "100%",
  },
  textContainer: {
    margin: 15,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    marginTop: 5,
  },
  listContainer: {
    marginTop: 20,
  },
});
