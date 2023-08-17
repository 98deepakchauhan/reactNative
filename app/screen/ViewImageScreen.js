import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../assets/chair.jpg')}>
        <View>
          <View style={styles.redBtn}></View>
          <View style={styles.blueBtn}></View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    // height: '80%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },

  btnSection: {
    flex: 1,
    flexDirection: 'row',
  },

  redBtn: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
  },
  blueBtn: {
    backgroundColor: 'skyblue',
    width: 50,
    height: 50,
  },
});
