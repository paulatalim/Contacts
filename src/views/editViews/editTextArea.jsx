import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default props => {
    const [gender, setGender] = useState();

    return (
        <>
            <View style={style.header}>
                <TouchableOpacity
                    style={style.btnCancel}
                    onPress={() => {}}
                >
                    <FontAwesomeIcon icon={faXmark} />
                    <Text style={style.btnCancelContent}>cancelar</Text>
                </TouchableOpacity>

                <Text style={style.title}>editar gênero</Text>

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
                placeholder="Descrição"
                placeholderTextColor={'#333'}
                onChangeText={setGender}
                value={gender}
                multiline={true}
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
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    btnCancelContent: {
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 16,
        textTransform: 'capitalize',
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
