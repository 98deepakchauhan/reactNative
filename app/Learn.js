import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';

export default function Learn() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Learn</Text>
      <Image
        source={{
          width: 200,
          height: 300,

          uri: 'https://picsum.photos/200/300',
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
