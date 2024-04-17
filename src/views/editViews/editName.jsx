import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default props => {
    const [name, setName] = useState();

    return (
        <>
            <View style={style.header}>
                <>
                    <TouchableOpacity
                        style={style.btnCancel}
                        onPress={() => {}}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} size={20} color="#696969" />
                    </TouchableOpacity>

                    <Text style={style.title}>editar nome</Text>
                </>
                <TouchableOpacity
                    style={style.btnSave}
                    onPress={() => {}}
                >
                    <Text style={style.btnSaveContent}>salvar</Text>
                    <FontAwesomeIcon icon={faCheck} />
                </TouchableOpacity>
            </View>

            <TextInput
                style={style.input}
                placeholder="Nome"
                placeholderTextColor={'#333'}
                onChangeText={setName}
                value={name}
            />
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
        // flexDirection: 'row',
        // alignItems: 'center',
        // gap: 8,
        marginRight: 10,
    },
    // btnCancelContent: {
    //     color: '#000',
    //     fontFamily: 'Roboto',
    //     fontWeight: '600',
    //     fontSize: 16,
    //     textTransform: 'capitalize',
    // },
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
    btnSaveContent: {
        textTransform: 'capitalize',
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 16,
    },
    input: {
        marginHorizontal: 25,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        marginBottom: 40,
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 18,
    },
});
