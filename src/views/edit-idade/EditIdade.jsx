import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { editIdenty } from '../../store/actions/identys';
import { changeActualIdenty } from '../../store/actions/viewIdenty';

class EditIdade extends Component {
    state = {
        idade: this.props.actualIdenty.idade !== -1 ? this.props.actualIdenty.idade.toString() : '',
    };

    editIdade = async () => {
        const item = {
            id: this.props.id,
            identy: {
                ...this.props.actualIdenty,
                idade: this.state.idade ? parseInt(this.state.idade, 10) : -1,
            },
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
                        <FontAwesomeIcon icon={faChevronLeft}  size={20} color="#696969"/>
                    </TouchableOpacity>

                    <Text style={style.title}>editar idade</Text>

                    <TouchableOpacity
                        style={style.btnSave}
                        onPress={this.editIdade}
                        >
                        <FontAwesomeIcon icon={faCheck}  size={20} color="#696969"/>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={style.input}
                    placeholder="Idade"
                    placeholderTextColor={'#333'}
                    onChangeText={idade => this.setState({idade})}
                    value={this.state.idade}
                    clearTextOnFocus={true}
                    keyboardType="numeric"
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
            dispatch(editIdenty(identy));
            dispatch(changeActualIdenty(identy.identy));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditIdade);
