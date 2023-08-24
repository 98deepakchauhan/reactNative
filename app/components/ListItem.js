import {View, Text, Image, StyleSheet, TouchableHighlight} from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
  gestureHandlerRootHOC,
} from "react-native-gesture-handler";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

export default function ListItem({
  image,
  title,
  subTitle,
  style,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.mediumGrey} onPress={onPress}>
          <View style={[styles.container, style]}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.textContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    paddingLeft: 10,
    justifyContent: "center",
  },
  title: {
    color: colors.black,
  },
  subTitle: {
    fontSize: 16,
  },
});
