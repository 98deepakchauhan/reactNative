import {View, Text, StyleSheet, TextInput} from "react-native";
import React, {useState} from "react";

import Card from "../components/Card";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";

const categories = [
  {label: "furniture", value: 1},
  {label: "Television", value: 2},
  {label: "Sofa", value: 3},
];

export default function TestScreen() {
  const [category, setCategory] = useState();
  return (
    <View style={styles.container}>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories}
        icon={"apps"}
        placeholder={"Categories"}
      />
      <AppTextInput icon={"email"} placeholder={"Type Something"} />
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
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
    paddingLeft: 10,
  },
});
