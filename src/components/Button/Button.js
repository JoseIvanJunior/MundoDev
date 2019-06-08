import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const Button = ({ children }) => (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
)

export default Button;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 15,
        width: 55,
        paddingLeft: 0,
        paddingRight: 0,
        marginRight: 5,
        backgroundColor: '#323C47',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FEFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FEFFFF',
        fontSize: 11
    }
})