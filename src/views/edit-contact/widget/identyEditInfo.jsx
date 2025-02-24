import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { useNavigation } from '@react-navigation/native';

export default ({name, data, route} ) => {
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <Text style={style.name}>{name}</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate(route)}
                style={style.containerData}>
                {data == null || data.toString().length < 10
                    ? <Text style={style.data}>{data}</Text>
                    : <Text style={style.data}>{data.toString().substr(0, 10) + ' ...'}</Text>
                }
                <FontAwesomeIcon icon={faChevronRight} size={20} color="rgba(0, 0, 0, 0.5)" />
            </TouchableOpacity >
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
        color: 'rgba(0, 0, 0, 0.4)',
    },
});
