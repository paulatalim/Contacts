import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import TagInput from '../../components/tagInput';
// import identy from '../../data/identyList';

export default props => {
    return (
        <>
            <View style={style.header}>
                <>
                    <TouchableOpacity
                        style={style.btnCancel}
                        onPress={() => {props.navigation.goBack();}}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} size={20} color="#696969" />
                    </TouchableOpacity>

                    <Text style={style.title}>editar característica</Text>
                </>
                <TouchableOpacity
                    style={style.btnSave}
                    onPress={() => {
                        props.navigation.goBack();
                    }}
                >
                    <FontAwesomeIcon icon={faCheck} size={20} color="#696969"/>
                </TouchableOpacity>
            </View>

            <View style={style.input}>
                <TagInput />
            </View>
        </>
    );
};

const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    btnCancel: {
        marginRight: 10,
    },
    title: {
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '800',
        fontSize: 22,
        textTransform: 'capitalize',
    },
    btnSave: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    input: {
        paddingHorizontal: 20,
    },
});
