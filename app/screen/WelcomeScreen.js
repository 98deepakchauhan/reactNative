import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.bgImage}>
        <View style={styles.main}>
          <View style={styles.logoSection}>
            <Image
              style={styles.logo}
              source={require('../assets/logo-red.png')}
            />
            <Text style={styles.logoText}>Sell What You Don't Need</Text>
          </View>
          <View style={styles.btnSection}>
            <View style={styles.red}></View>
            <View style={styles.blue}></View>
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
    resizeMode: 'cover',
  },

  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logoSection: {
    alignItems: 'center',
    marginTop: '15%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    textAlign: 'center',
  },

  btnSection: {
    width: '100%',
  },
  red: {
    width: '100%',
    height: 70,
    backgroundColor: 'tomato',
  },
  blue: {
    width: '100%',
    height: 70,
    backgroundColor: 'skyblue',
  },
});
