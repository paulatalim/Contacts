import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';

// import identy from '../../data/identyList';

export default props => {
    const identy = props.route.params;

    return (
        <ScrollView>
            <View style={style.principal}>
                <Text style={style.name}>{identy.name}</Text>
                <Text style={style.pronome}>{identy.pronome}</Text>
                <Image style={style.img} source={{uri: identy.photo}}/>
                <Text style={style.carac}>{identy.caracteristica}</Text>
            </View>

            <View style={style.info}>
                <Text style={style.title}>idade</Text>
                <Text style={style.idade}>{identy.idade} anos</Text>
            </View>

            <View style={style.info}>
                <Text style={style.title}>gênero</Text>
                <Text style={style.genero}>{identy.genero}</Text>
            </View>

            <View style={style.descricaoContainer}>
                <Text style={style.title}>descrição</Text>
                <Text style={style.descricao}>{identy.descricao}</Text>
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
        marginTop: 50,
    },
    name: {
        fontFamily:'Montserrat-ExtraBold',
        fontSize: 25,
        color: '#000',
    },
    pronome: {
        fontFamily:'Montserrat-Medium',
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
        fontWeight: '500',
        fontSize: 25,
        color: '#000',
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
    },
    title: {
        fontFamily:'Roboto-Bold',
        fontWeight: '700',
        fontSize: 22,
        textTransform: 'capitalize',
        color: '#000',
    },
    idade: {
        fontFamily:'Roboto',
        fontWeight: '700',
        fontSize: 22,
        color: '#434343',
    },
    genero: {
        fontFamily:'Roboto',
        fontWeight: '700',
        fontSize: 22,
        textTransform: 'capitalize',
        color: '#434343',
    },
    descricaoContainer: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 20,
        marginBottom: 50,
        gap: 15,
    },
    descricao: {
        fontFamily:'Roboto',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 28,
        textTransform: 'capitalize',
        color: '#434343',
    },
});
