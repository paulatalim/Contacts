import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import { editIdenty } from '../../store/actions/identys';
import { changeActualIdenty } from '../../store/actions/viewIdenty';

class EditPronomeScreen extends Component {
    state = {
        pronome: this.props.actualIdenty.pronome !== '' ? this.props.actualIdenty.pronome.split(', ') : [],
        open: false,
    };

    data = [
        {label: 'Ele/dele', value: 'Ele/dele'},
        {label: 'Ela/dela', value: 'Ela/dela'},
        {label: 'Elu/delu', value: 'Elu/delu'},
    ];

    setValue(callback) {
        this.setState(state => ({
          pronome: callback(state.pronome),
        }));
    }

    formatPronome = () => {
        let str = this.state.pronome[0];

        for (let i = 1; i < this.state.pronome.length; i++) {
            str += ', ' + this.state.pronome[i];
        }

        return str;
    };

    editPronome = async () => {
        const item = {
            id: this.props.actualIdenty.id,
            name: this.props.actualIdenty.name,
            pronome: this.formatPronome(),
            genero: this.props.actualIdenty.genero,
            idade: this.props.actualIdenty.idade,
            caracteristica: this.props.actualIdenty.caracteristica,
            descricao: this.props.actualIdenty.descricao,
            photo: this.props.actualIdenty.photo,
        };
        this.props.onEdit(item);
        this.props.navigation.goBack();
    };

    render() {
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity
                        style={style.btnCancel}
                        onPress={() => this.props.navigation.goBack()}
                        >
                        <FontAwesomeIcon icon={faChevronLeft} size={20} color="#696969"/>
                    </TouchableOpacity>

                    <Text style={style.title}>editar pronome</Text>

                    <TouchableOpacity
                        style={style.btnSave}
                        onPress={this.editPronome}
                        >
                        <FontAwesomeIcon icon={faCheck} size={20} color="#696969"/>
                    </TouchableOpacity>
                </View>

                <View style={style.multiContainer}>
                    <DropDownPicker
                            open={this.state.open}
                            value={this.state.pronome}
                            items={this.data}
                            setOpen={open => this.setState({open})}
                            setValue={value => this.setValue(value)}
                            multiple
                            listMode="SCROLLVIEW"
                            mode="BADGE"
                            placeholder="Selecionar pronome"
                            arrowIconStyle={style.dropDownIcon}
                            style={style.dropDown}
                            dropDownContainerStyle={style.dropDownContainerStyle}
                            labelStyle={style.dropDownLabelStyle}
                            containerStyle={style.dropDownContainer}
                            listItemLabelStyle={style.dropDownItemLabelStyle}
                            badgeColors="#ffff00"
                            badgeDotColors="#FFF"
                            badgeTextStyle={style.dropDownBadgeTextStyle}
                        />
                </View>
            </View>
        );
    }
}

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
    dropDown: {
        borderColor: 'rgb(0,0,0,0.2)',
        backgroundColor: '#fffff0',
    },
    dropDownContainerStyle: {
        borderRadius: 20,
        borderColor: 'rgb(0,0,0,0.2)',
        backgroundColor: '#fffff0',
        elevation: 5,
    },
    dropDownLabelStyle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
    },
    dropDownItemLabelStyle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
    },
    dropDownBadgeTextStyle: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
    },
    dropDownIcon: {
        tintColor: '#00000090',
        width: 26,
    },
});

const mapStateToProps = ({ user, actualIdenty }) => {
    return {
        id: user.id,
        actualIdenty: actualIdenty.identy,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEdit: identy => {
            dispatch(editIdenty({ id: this.props.id, identy: identy }));
            dispatch(changeActualIdenty(identy));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPronomeScreen);

