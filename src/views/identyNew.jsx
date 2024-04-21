import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

import TagInput from '../components/tagInput';

export default props  => {
    const pronomes = [
        {key: 0, value: 'Ele/dele'},
        {key: 1, value: 'Ela/dela'},
        {key: 2, value: 'Elu/delu'},
    ];

    const [name, setName] = useState();
    const [idade, setIdade] = useState();
    const [gender, setGender] = useState();
    const [pronome, setPronome] = useState('');
    const [descricao, setDescricao] = useState();

    return (
        <ScrollView style={style.container}>

            {/* Header */}
            <View style={style.header}>
                <Text style={style.headerTitle}>Criar nova identidade</Text>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.goBack();
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} size={27} color="#696969"/>
                </TouchableOpacity>
            </View>

            {/* Nome */}
            <TextInput
                style={style.input}
                placeholder="Nome"
                placeholderTextColor={'#787855'}
                onChangeText={setName}
                value={name}
            />

            {/* Idade */}
            <TextInput
                style={style.input}
                placeholder="Idade"
                placeholderTextColor={'#787855'}
                onEndEditing={setIdade}
                value={idade}
                keyboardType="numeric"
            />

            {/* Genero */}
            <TextInput
                style={style.input}
                placeholder="Gênero"
                placeholderTextColor={'#787855'}
                onChangeText={setGender}
                value={gender}
                autoComplete="gender"
            />

            {/* Pronomes */}
            <View style={style.selectView}>
                { pronome.toString() === '' ? <Text style={style.selectTitle}>Pronomes</Text> : null }
                <MultipleSelectList
                    setSelected={setPronome}
                    data={pronomes}
                    save="value"
                    onSelect={() => {}}
                    search={false}
                    label="Pronomes"
                    arrowicon={<FontAwesomeIcon icon={faAngleDown} size={20}/>}
                    closeicon={<FontAwesomeIcon icon={faAngleUp} size={20}/>}
                    boxStyles={style.multiBoxStyles}
                    labelStyles={style.multiLabel}
                    badgeStyles={style.multiBadgeStyles}
                    badgeTextStyles={style.multiBadgeStylesText}
                    dropdownStyles={style.multiDropdown}
                    dropdownTextStyles={style.multiDropdownText}
                    checkBoxStyles={style.multiCheck}
                    placeholder="Selecionar pronome"
                />
            </View>

            {/* Caracteristicas */}
            <View style={style.selectView}>
                <Text style={style.selectTitle}>Caracteristicas Principais</Text>
                <TagInput />
            </View>

            {/* Descricao */}
            <View>
                <Text style={style.selectTitle}>Descrição</Text>
                <TextInput
                    style={style.areaText}
                    placeholder="Descrição da identidade ..."
                    textAlign="left"
                    placeholderTextColor={'#787855'}
                    value={descricao}
                    onChangeText={setDescricao}
                    multiline={true}
                    numberOfLines={1}
                    maxLength={200}
                />
            </View>

            {/* Botao Salvar */}
            <TouchableOpacity style={style.button}
                onPress={() => {}}
            >
                <Text style={style.buttonText}>Criar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingBottom: 50,
        paddingHorizontal: 25,
        flex: 1,
    },
    selectView: {
        marginBottom: 40,
    },
    header: {
        marginBottom: 20,
        paddingVertical: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '800',
        fontSize: 26,
    },
    input: {
        backgroundColor: '#ffffc0',
        borderRadius: 15,
        padding: 15,
        marginBottom: 40,
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 18,
    },
    selectTitle: {
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 20,
    },
    multiBoxStyles: {
        borderColor: '#FFF',
        backgroundColor: '#ffffd5',
        borderRadius: 20,
    },
    multiLabel: {
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 20,
    },
    multiBadgeStyles: {
        backgroundColor: '#ffff00',
        paddingVertical: 10,
    },
    multiBadgeStylesText: {
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 17,
    },
    multiDropdown: {
        borderColor: '#FFF',
        backgroundColor: '#ffffb0',
        borderRadius: 20,
    },
    multiDropdownText: {
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 17,
    },
    multiCheck: {
        fontWeight: '600',
        fontSize: 17,
    },
    areaText: {
        backgroundColor: '#ffffc0',
        borderRadius: 15,
        padding: 20,
        marginBottom: 60,
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 18,
    },
    button: {
        backgroundColor: '#ffff00',
        borderRadius: 50,
        marginBottom: 100,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontWeight: '900',
        fontSize: 20,
        color: '#000',
    },
});
