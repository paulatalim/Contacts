import React, { Fragment } from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

import identy from '../data/identyList';

export default props => {
    function getIdenty({item}) {
        return (
            <View style={style.identyContainer}>
                <Image
                    style={style.identyImage}
                    source={{uri: item.photo}}
                />
                <View style={style.identyText}>
                    <Text style={style.identyName}>{item.name}</Text>
                    <Text style={style.identyCaract}>{item.caracteristica}</Text>
                </View>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                keyExtractor={id => identy.id}
                data={identy}
                renderItem={getIdenty}
            />
        </View>
    );
};

const style = StyleSheet.create({
    identyContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        gap: 10,
    },
    identyText: {
        display: 'flex',
        flexDirection: 'column',
    },
    identyImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    identyName: {
        fontSize: 20,
        color: '#000',
        fontWeight: '500',
        fontFamily: "Montserrat-Bold",
    },
    identyCaract: {
        fontSize: 15,
    },
});
