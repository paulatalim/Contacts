import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { editIdenty } from '../../store/actions/identys';
import { changeActualIdenty } from '../../store/actions/viewIdenty';

class EditDescrip extends Component {
    state = {
        descrip: this.props.actualIdenty.descricao,
    };

    editDescrip = async () => {
        const item = {
            id: this.props.actualIdenty.id,
            name: this.props.actualIdenty.name,
            pronome: this.props.actualIdenty.pronome,
            genero: this.props.actualIdenty.genero,
            idade: this.props.actualIdenty.idade,
            caracteristica: this.props.actualIdenty.caracteristica,
            descricao: this.state.descrip,
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
                        onPress={() => {this.props.navigation.goBack();}}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} size={20} color="#696969"/>
                    </TouchableOpacity>

                    <Text style={style.title}>editar descrição</Text>

                    <TouchableOpacity
                        style={style.btnSave}
                        onPress={this.editDescrip}
                        >
                        <FontAwesomeIcon icon={faCheck} size={20} color="#696969"b/>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={style.input}
                    placeholder="Descrição"
                    placeholderTextColor={'#333'}
                    onChangeText={descrip => this.setState({descrip})}
                    value={this.state.descrip}
                    clearTextOnFocus={true}
                    multiline={true}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditDescrip);
