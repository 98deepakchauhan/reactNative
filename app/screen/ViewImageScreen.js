import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../assets/chair.jpg')}>
        <View></View>
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
    resizeMode: 'contain',
    width: '100%',
    height: '80%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
