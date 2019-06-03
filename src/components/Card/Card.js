import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <View>
                <View style={styles.card}>
                    <View style={styles.circle}>
                        <Image
                            source={require('../../../assets/img/running.png')}
                        />
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.texto}>CORRIDA</Text>
                        <Image
                        //source={require('')}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.circle}>
                        <Image
                            source={require('../../../assets/img/cycling.png')}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.circle}>
                        <Image
                            source={require('../../../assets/img/gym.png')}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.circle}>
                        <Image
                            source={require('../../../assets/img/yoga.png')}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 20,
        marginVertical: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#323C47',
        borderRadius: 7
    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 125,
        marginHorizontal: 15,
        backgroundColor: '#262F38'
    },
    description: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#FEFFFF',
        fontSize: 25
    }
});
