import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default props => {
    const [gender, setGender] = useState(props.route.params.genero);

    return (
        <>
            <View style={style.header}>
                <TouchableOpacity
                    style={style.btnCancel}
                    onPress={() => {props.navigation.goBack();}}
                >
                    <FontAwesomeIcon icon={faChevronLeft} size={20} color="#696969"/>
                </TouchableOpacity>

                <Text style={style.title}>editar gênero</Text>

                <TouchableOpacity
                    style={style.btnSave}
                    onPress={() => {props.navigation.goBack();}}
                >
                    <FontAwesomeIcon icon={faCheck} size={20} color="#696969"/>
                </TouchableOpacity>
            </View>

            <TextInput
                style={style.input}
                placeholder="Gênero"
                placeholderTextColor={'#333'}
                onChangeText={setGender}
                value={gender}
                autoComplete="gender"
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
