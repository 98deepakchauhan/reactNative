import {StyleSheet, FlatList} from "react-native";
import React, {useState} from "react";
import {Swipeable} from "react-native-gesture-handler/Swipeable";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefrashing] = useState(false);
  const handleDelete = message => {
    const newMessages = messages.filter(m => m.id !== message.id);
    setMessages(newMessages);
  };

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
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refreshing}
      onRefresh={() => setMessages(initialMessages)}
    />
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
  },
});
