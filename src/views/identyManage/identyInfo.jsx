import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';

import identy from '../../data/identyList';

export default props => {
    return (
        <ScrollView>
            <View style={style.principal}>
                <Text style={style.name}>{identy[0].name}</Text>
                <Text style={style.pronome}>{identy[0].pronome}</Text>
                <Image style={style.img} source={{uri: identy[0].photo}}/>
                <Text style={style.carac}>{identy[0].caracteristica}</Text>
            </View>

            <View style={style.info}>
                <Text style={style.title}>idade</Text>
                <Text style={style.idade}>{identy[0].idade}</Text>
            </View>

            <View style={style.info}>
                <Text style={style.title}>gênero</Text>
                <Text style={style.genero}>{identy[0].genero}</Text>
            </View>

            <View style={style.descricaoContainer}>
                <Text style={style.title}>descrição</Text>
                <Text style={style.descricao}>{identy[0].descricao}</Text>
            </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    principal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
    },
    name: {
        fontFamily:'Montserrat-ExtraBold',
        fontSize: 25,
        color: '#000',
    },
    pronome: {
        fontFamily:'Montserrat-Regular',
        fontSize: 22,
        color: '#4D4D4D',
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 50,
        marginTop: 30,
        marginBottom: 30,
    },
    carac: {
        marginBottom: 60,
        fontFamily:'Montserrat-Medium',
        fontSize: 25,
        color: '#000',
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 40,
    },
    title: {
        fontFamily:'Montserrat-Bold',
        fontSize: 20,
        textTransform: 'capitalize',
        color: '#000',
    },
    idade: {
        fontFamily:'Montserrat-Regular',
        fontSize: 20,
        color: '#000',
    },
    genero: {
        fontFamily:'Montserrat-Regular',
        fontSize: 20,
        textTransform: 'capitalize',
        color: '#000',
    },
    descricaoContainer: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 20,
        marginBottom: 50,
        gap: 15,
    },
    descricao: {
        fontFamily:'Montserrat-Regular',
        fontSize: 20,
        textTransform: 'capitalize',
        color: '#000',
    },
});
