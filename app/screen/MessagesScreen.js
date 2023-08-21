import {StyleSheet, FlatList} from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen() {
  return (
    <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({item}) => (
        <ListItem
          style={styles.listItem}
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log("Item Tapped", item)}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
  },
});