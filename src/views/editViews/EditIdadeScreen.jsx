import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default props => {
    const [idade, setIdade] = useState(props.route.params.idade.toString());

    return (
        <>
            <View style={style.header}>
                <TouchableOpacity
                    style={style.btnCancel}
                    onPress={() => {props.navigation.goBack();}}
                >
                    <FontAwesomeIcon icon={faChevronLeft}  size={20} color="#696969"/>
                </TouchableOpacity>

                <Text style={style.title}>editar idade</Text>

                <TouchableOpacity
                    style={style.btnSave}
                    onPress={() => {props.navigation.goBack();}}
                >
                    <FontAwesomeIcon icon={faCheck}  size={20} color="#696969"/>
                </TouchableOpacity>
            </View>

            <TextInput
                style={style.input}
                placeholder="Idade"
                placeholderTextColor={'#333'}
                onChangeText={setIdade}
                value={idade}
                clearTextOnFocus={true}
                keyboardType="numeric"
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
