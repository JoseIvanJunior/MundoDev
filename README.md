MundoDevops - Programador Júnior React-Native

Um desafio que aceitei de uma empresa para uma seletiva no qual vim testar o meu conhecimento adquirido, prezando o apredizado que pode engloba na minha carreira como desenvolvedor.
Desenvolvi o layout fornecido de um aplicativo voltado ao auxílio de atividades físicas, que exibe algumas informações do tipo de esporte do qual foi praticado como calorias, tempo da atividade, peso e qual foi o dia no qual praticou.

Informações sobre o ambiente de desenvolvimento

React Native Environment Info:
    System:
      OS: Linux 4.15 Ubuntu 18.04.2 LTS (Bionic Beaver)
      Shell: 5.4.2 - /usr/bin/zsh
    Binaries:
      Node: 10.16.0 - /usr/bin/node
      Yarn: 1.16.0 - /usr/bin/yarn
      npm: 6.9.0 - /usr/bin/npm
    npmPackages:
      react: 16.8.3 => 16.8.3 
      react-native: 0.59.8 => 0.59.8 

Downloads e Instalação

• A fonte utilizada é MontSerrat, em diferentes variações, e pode ser encontrada gratuitamente para download na internet.
• Os ı́cones de menu e configurações podem ser obtidos a partir de um dos conjuntos de fontes desse pacote: https://github.com/oblador/react-native-vector-icons.

Tenha o CLI do React Native instalado em sua máquina
O node vem com o npm, caso queira pode instalar o yarn que também permite instalar a interface de linha de comando do React Native.

Para instalar esse App no seu Emulador Android ou em seu dispositivo móvel e poder ter acesso a estrutura criada, faça o download ou clone o repositório com o git e terá todos os arquivos do projeto, assim acesse a pasta para executar use este comando:

npm install

E com a execução deste código irá gerar a pasta node_modules no qual baíxará todas as dependencias do arquivo package.json, em seguida execute este outro comando para linkar todos os pacotes do projeto:

react-native link

E assim podemos já inicializar o projeto com o comando abaixo

react-native run-android

Organização do projeto

Foi criada uma estrutura dentro de uma pasta chamada assets onde criei mais duas pastas a img e a fonts.

Criei a pasta src onde tenho uma pasta components que dentro dela contém as seguintes pastas Bubble, Button, Card, Description e Header.

No arquivo principal App.js é utilizado o component Header no qual fica o cabeçalho do aplicativo, utilizo o scrollView para conseguir mover o o component Card no qual fica um outro component o Description que é onde está a maior parte do código.

Principal App.js

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

Componente Header.js

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

Card.js

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

Componente Description.js

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


Componente Bubble.js

import React, { Component } from 'react'
import { StyleSheet, View, Image, ActivityIndicator, ScrollView, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'

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
                        renderItem={({ item }) => {
                            activity++;
                            return (
                                <LinearGradient colors={['#7F38F4', '#F22B48']} style={styles.bubble}>
                                    {activity == '1' || activity == '3' ?
                                        <Icon name="check-circle" size={20} style={styles.checkIcon} /> : null}
                                    <Image
                                    //source={item.image}
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

