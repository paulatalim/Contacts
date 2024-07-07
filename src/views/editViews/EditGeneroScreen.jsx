import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { editIdenty } from '../../store/actions/identys';
import { changeActualIdenty } from '../../store/actions/viewIdenty';

class EditGenero extends Component {
    state = {
        gender: this.props.actualIdenty.genero,
    };

    editGenero = async () => {
        const item = {
            id: this.props.actualIdenty.id,
            name: this.props.actualIdenty.name,
            pronome: this.props.actualIdenty.pronome,
            genero: this.state.gender,
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
            <>
                <View style={style.header}>
                    <TouchableOpacity
                        style={style.btnCancel}
                        onPress={() => this.props.navigation.goBack()}
                        >
                        <FontAwesomeIcon icon={faChevronLeft} size={20} color="#696969"/>
                    </TouchableOpacity>

                    <Text style={style.title}>editar gênero</Text>

                    <TouchableOpacity
                        style={style.btnSave}
                        onPress={this.editGenero}
                        >
                        <FontAwesomeIcon icon={faCheck} size={20} color="#696969"/>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={style.input}
                    placeholder="Gênero"
                    placeholderTextColor={'#333'}
                    onChangeText={gender => this.setState({gender})}
                    value={this.state.gender}
                    clearTextOnFocus={true}
                    autoComplete="gender"
                    />
            </>
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(EditGenero);
