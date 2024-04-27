import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import Animated  from 'react-native-reanimated';

// import identy from '../../data/identyList';

export default props => {
    const identy = props.route.params.identy;

    return (
        <ScrollView>
            <View style={style.principal}>
                <View style={style.header}>
                    <TouchableOpacity
                        onPress={() => {props.navigation.goBack();}}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} size={20} color="#696969"/>
                    </TouchableOpacity>
                    <View style={style.headerContent}>
                        <Text style={style.name}>{identy.name}</Text>
                        <Text style={style.pronome}>{identy.pronome}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={ () => {props.navigation.navigate('IndentidadeEdit', identy);}}
                    >
                        <FontAwesomeIcon icon={faPen} size={20} color="#696969"/>
                    </TouchableOpacity>
                </View>
                <Animated.Image style={style.img} source={{uri: identy.photo}} sharedTransionTag="tag" />
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
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    headerContent: {
        alignItems: 'center',
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
        width: 300,
        height: 300,
        borderRadius: 250,
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
        fontSize: 20,
        textTransform: 'capitalize',
        color: '#000',
    },
    idade: {
        fontFamily:'Roboto',
        fontWeight: '700',
        fontSize: 20,
        color: '#434343',
    },
    genero: {
        fontFamily:'Roboto',
        fontWeight: '700',
        fontSize: 20,
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
        fontSize: 18,
        lineHeight: 28,
        textTransform: 'capitalize',
        color: '#434343',
    },
});
