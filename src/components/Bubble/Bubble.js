import React, { Component } from 'react'
import { StyleSheet, View, Image, ActivityIndicator, ScrollView, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'

//import Imagens from '../../../assets/img/img'
import dataJson from '../../../data/data.json'

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataFilters: [],
        }
    }
    componentDidMount() {
        this.setState({
            isLoading: false,
            dataFilters: dataJson.filters
        })
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.ActivityIndicator}>
                    <ActivityIndicator size="large" color="#FEFFFF" />
                </View>
            )
        }

        var activity = 0;
        return (
            <View style={styles.card}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <FlatList
                        horizontal
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.dataFilters}
                        renderItem={({ item: { image } }) => {
                            activity++;
                            return (
                                <LinearGradient colors={['#7F38F4', '#F22B48']} style={styles.bubble}>
                                    {activity == '1' || activity == '3' ?
                                        <Icon name="check-circle" size={20} style={styles.checkIcon} /> : null}
                                    <Image
                                    //source={Imagens[image]}
                                    />
                                </LinearGradient>
                            )
                        }}
                        KeyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
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
    bubble: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 65,
        height: 65,
        borderRadius: 35,
        marginLeft: 15,
        marginRight: 5,
        padding: 8,
        backgroundColor: '#BA55D3',
    },
    checkIcon: {
        paddingTop: 0,
        paddingLeft: 1.5,
        paddingRight: 1,
        backgroundColor: '#FEFFFF',
        borderRadius: 20,
        color: "#19B996",
        position: 'absolute',
        right: 0,
        top: 0
    },
    ActivityIndicator: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center'
    }
})
