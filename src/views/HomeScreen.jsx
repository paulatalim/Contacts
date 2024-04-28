import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd';
import Animated from 'react-native-reanimated';

import identy from '../data/identyList';

export default props => {
    const getIdenty = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    props.navigation.push('VizualizarIdentidade', {identy: item});
                }}>
                <View style={style.identyContainer}>
                    <Animated.Image
                        style={style.identyImage}
                        source={{uri: item.photo}}
                        sharedTransitionTag="tag"
                    />
                    <View style={style.identyText}>
                        <Text style={style.identyName}>{item.name}</Text>
                        <Text style={style.identyCaract}>{item.caracteristica}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <View style={style.header}>
                <Text style={style.headerText}>Identidades</Text>
            </View>
            <FlatList
                data={identy}
                renderItem={getIdenty}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity
                style={style.floatActionButton}
                onPress={() => {
                    props.navigation.navigate('CriarIdentidade');
                }}
            >
                <FontAwesomeIcon icon={faAdd} size={30} color="#FFF" />
            </TouchableOpacity>
        </>
    );
};

const style = StyleSheet.create({
    header: {
        backgroundColor: '#ffc700',
        paddingVertical: 20,
        paddingHorizontal: 25,
    },
    headerText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        color: '#000',
    },
    identyContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        gap: 20,
    },
    identyText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    identyImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    identyName: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Montserrat-Bold',
    },
    identyCaract: {
        fontSize: 15,
        color: '#4D4D4D',
        fontFamily: 'Roboto-Bold',
        fontWeight: '700',
    },
    floatActionButton: {
        position: 'absolute',
        backgroundColor: '#ffc700',
        width: 70,
        height: 70,
        borderRadius: 20,
        bottom: 50,
        right: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
