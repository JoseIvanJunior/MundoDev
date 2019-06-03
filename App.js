import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native'
import Card from './src/components/Card/Card'
import Header from './src/components/Header/Header'
import Description from './src/components/Description/Description'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262F38',
  },
  // card: {
  //   marginHorizontal: 20,
  //   marginVertical: 10,
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   backgroundColor: '#323C47',
  //   borderRadius: 7
  // },
  // circle: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: 100,
  //   height: 100,
  //   borderRadius: 125,
  //   backgroundColor: '#262F38',
  //   marginHorizontal: 15
  // }
});
