import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Header extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon name="bars" size={30} color="#FEFFFF" />
                    </TouchableOpacity>
                    <Text style={styles.texto}>MEU PERFIL</Text>
                    <TouchableOpacity>
                        <Icon name="cog" size={30} color="#FEFFFF" />
                    </TouchableOpacity>
                </View>
                <View style={styles.linha}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 30,
        color: '#FEFFFF'
        // justifyContent: 'center',
        // alignItems: 'center', 
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
        borderBottomWidth: 2,
        borderColor: '#323C47'
    }
});
