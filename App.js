import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import Card from './src/components/Card/Card'
import Header from './src/components/Header/Header'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262F38'
  }
})
