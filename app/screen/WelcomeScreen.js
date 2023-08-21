import {View, Text, ImageBackground, StyleSheet, Image} from "react-native";
import React from "react";

import colors from "../config/colors";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={5}
        source={require("../assets/background.jpg")}
        style={styles.bgImage}>
        <View style={styles.main}>
          <View style={styles.logoSection}>
            <Image
              style={styles.logo}
              source={require("../assets/logo-red.png")}
            />
            <Text style={styles.logoText}>Sell What You Don't Need</Text>
          </View>
          {/* <Icon name="trash-can" color="red" size={30} /> */}

          <View style={styles.btnSection}>
            <AppButton title={"Login"} />
            <AppButton title={"register"} color="secondary" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },

  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  logoSection: {
    alignItems: "center",
    marginTop: "15%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },

  btnSection: {
    width: "95%",
  },
});
