import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Text,
  Button,
  Modal,
  FlatList,
} from "react-native";
import React, {useState} from "react";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";

import AppButton from "./AppButton";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  items,
  selectedItem,
  onSelectItem,
  placeholder,
  ...otherProps
}) {
  const [openModel, setOpenModal] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpenModal(true)}>
        <View style={styles.container}>
          {icon && <MCIcon name={icon} size={20} color={colors.lightGrey} />}
          <AppText style={[defaultStyles.text, styles.textInput]}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          {icon && (
            <MCIcon name="chevron-down" size={20} color={colors.lightGrey} />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={openModel} animationType="slide">
        <View>
          <Button title="Close" onPress={() => setOpenModal(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setOpenModal(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.mediumGrey,
    borderRadius: 20,
    paddingVertical: 13,
    paddingHorizontal: 10,
    width: "100%",
    marginVertical: 10,
  },

  textInput: {
    fontSize: 18,
    width: "100%",
    marginLeft: 10,
    flex: 1,
  },
});
