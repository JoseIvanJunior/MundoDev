import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import logo from '../../../assets/img/ic_bike.png'

import Bubble from '../Bubble/Bubble'
import Button from '../Button/Button'

import dataJson from '../../../data/data.json'

export default class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataExercices: []
        }
    }
    componentDidMount() {
        this.setState({
            dataExercices: dataJson.exercices
        })
    }
    render() {
        return (
            <View>
                <Bubble />
                <FlatList
                    data={this.state.dataExercices}
                    renderItem={({ item }) => {
                        const time = item.time / 60;
                        return (
                            <View style={styles.card}>
                                <View style={styles.circle}>
                                    <Image
                                    //source={item.image}
                                    />
                                </View>
                                <View style={styles.description}>
                                    <Text style={styles.titulo}>{item.name}</Text>
                                    <View style={styles.information}>
                                        <View style={styles.box}>
                                            <Image
                                                source={logo}
                                            />
                                            <Text style={styles.texto}>{item.calories}Kcal</Text>
                                        </View>
                                        <View style={styles.box}>
                                            <Image
                                                source={require('../../../assets/img/ic_time.png')}
                                            />
                                            {item.time % '60' == 0 ?
                                                <Text style={styles.texto}>{time} h</Text>
                                                : <Text style={styles.texto}>{item.time} m</Text>}
                                        </View>
                                        <View style={styles.box}>
                                            <Image
                                                source={require('../../../assets/img/ic_balance.png')}
                                            />
                                            <Text style={styles.texto}>{item.weight} Kg</Text>
                                        </View>

                                    </View>
                                    <View style={styles.buttonContainer}>
                                        {item.when == 'today' ?
                                            <Text style={[styles.textButton, { backgroundColor: '#FD3C29', opacity: 1.0, borderColor: '#FD3C29' }]}>HOJE</Text>
                                            : <Text style={styles.textButton}>HOJE</Text>}

                                        {item.when == 'yesterday' ?
                                            <Text style={[styles.textButton, { backgroundColor: '#19B996', opacity: 1.0, borderColor: '#19B996' }]}>ONTEM</Text>
                                            : <Text style={styles.textButton}>ONTEM</Text>}
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                    KeyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
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
        borderRadius: 50,
        marginLeft: 15,
        marginRight: 40,
        backgroundColor: '#262F38'
    },
    description: {
        justifyContent: 'center'
    },
    information: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        //marginLeft: 10
    },
    titulo: {
        color: '#FEFFFF',
        fontSize: 25,
        fontFamily: 'Montserrat-SemiBold',
    },
    texto: {
        marginLeft: 5,
        marginRight: 10,
        fontSize: 11,
        fontFamily: 'Montserrat-Medium',
        color: '#FEFFFF'
    },
    box: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    textButton: {
        fontSize: 11,
        fontFamily: 'Montserrat-Medium',
        color: '#FEFFFF',
        opacity: 0.6,
        borderWidth: 1,
        paddingTop: 3,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 200,
        marginRight: 20,
        borderColor: '#FEFFFF',
        alignSelf: 'center',
        justifyContent: 'center'
    }
});