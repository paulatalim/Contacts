import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';

export default ({name, data}) => {
    return (
        <View style={style.container}>
            <Text style={style.name}>{name}</Text>
            <View style={style.containerData}>
                {data == null || data.toString().length < 10
                    ? <Text style={style.data}>{data}</Text>
                    : <Text style={style.data}>{data.toString().substr(0, 10) + ' ...'}</Text>
                }
                <FontAwesomeIcon icon={faChevronRight} size={20} color="#696969" />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    containerData: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    name: {
        fontFamily:'Roboto-ExtraBold',
        fontWeight: '900',
        fontSize: 20,
        color: '#000',
    },
    data: {
        fontFamily:'Roboto-Bold',
        fontSize: 20,
        fontWeight: '900',
        color: '#8f8f8f',
    },
});
