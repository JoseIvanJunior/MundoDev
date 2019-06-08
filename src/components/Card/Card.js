import React, { Component } from 'react'
import { View } from 'react-native'

import Description from '../Description/Description'

export default class Card extends Component {
    render() {
        return (
            <View>
                <Description />
            </View>
        );
    }
}