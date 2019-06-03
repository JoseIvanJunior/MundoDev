import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Header extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Icon
                        name="menu"
                        color="#ccc"
                        size={30}
                    />
                    <Text style={styles.texto}>MEU PERFIL</Text>
                    <Icon
                        name="settings"
                        color="#ccc"
                        size={30}
                    />
                </View>
                <View style={styles.linha}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    texto: {
        color: '#FEFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 28
    },
    header: {
        backgroundColor: '#262F38',
        color: '#FEFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 25,
        paddingBottom: 20,
        marginHorizontal: 20
    },
    linha: {
        marginHorizontal: 20,
        marginVertical: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#FEFFFF'
    }
});
