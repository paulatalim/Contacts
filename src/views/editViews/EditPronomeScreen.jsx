import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

export default props => {
    const data = [
        {key: 0, value: 'Ele/dele'},
        {key: 1, value: 'Ela/dela'},
        {key: 2, value: 'Elu/delu'},
    ];

    const [pronome, setPronome] = useState('');

    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity
                    style={style.btnCancel}
                    onPress={() => {props.navigation.goBack();}}
                >
                    <FontAwesomeIcon icon={faChevronLeft} size={20} color="#696969"/>
                </TouchableOpacity>

                <Text style={style.title}>editar pronome</Text>

                <TouchableOpacity
                    style={style.btnSave}
                    onPress={() => {props.navigation.goBack();}}
                >
                    <FontAwesomeIcon icon={faCheck} size={20} color="#696969"/>
                </TouchableOpacity>
            </View>

            <View style={style.multiContainer}>
                <MultipleSelectList
                    setSelected={setPronome}
                    data={data}
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
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
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
    multiContainer: {
        marginHorizontal: 20,
    },
    multiBoxStyles: {
        borderColor: '#FFF',
        backgroundColor: '#ffc700',
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
});
