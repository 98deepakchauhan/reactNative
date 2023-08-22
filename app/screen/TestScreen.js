import {View, Text, StyleSheet} from "react-native";
import React from "react";

import Card from "../components/Card";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";

export default function TestScreen() {
  return (
    <ListItem
      title={"hi there"}
      subTitle={"something else"}
      ImageComponent={<Icon name={"laptop"} />}
    />
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
