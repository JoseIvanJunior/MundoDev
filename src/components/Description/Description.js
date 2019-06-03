import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default class Description extends Component {
    render() {
        return (
            <View style={styles}>
                <View style={styles}>
                    <Text style={styles.texto}>CORRIDA</Text>
                    <Image
                    //source={require('')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    texto: {
        color: '#FEFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 28
    }
})