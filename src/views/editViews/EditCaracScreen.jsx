import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { connect } from 'react-redux';
import { editIdenty } from '../../store/actions/identys';
import { changeActualIdenty } from '../../store/actions/viewIdenty';
import TagInput from '../../components/tagInput';

class EditCarac extends Component {
    state = {
        caracteristica: this.props.actualIdenty.caracteristica,
    };

    updateCarac = (caracteristica) => {
        this.setState({caracteristica: caracteristica});
    };

    editCaracteristica = async () => {
        const item = {
            id: this.props.actualIdenty.id,
            name: this.props.actualIdenty.name,
            pronome: this.props.actualIdenty.pronome,
            genero: this.props.actualIdenty.genero,
            idade: this.props.actualIdenty.idade,
            caracteristica: this.state.caracteristica,
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
                    <>
                        <TouchableOpacity
                            style={style.btnCancel}
                            onPress={() => this.props.navigation.goBack()}
                            >
                            <FontAwesomeIcon icon={faChevronLeft} size={20} color="#696969" />
                        </TouchableOpacity>

                        <Text style={style.title}>editar característica</Text>
                    </>
                    <TouchableOpacity
                        style={style.btnSave}
                        onPress={this.editCaracteristica}
                        >
                        <FontAwesomeIcon icon={faCheck} size={20} color="#696969"/>
                    </TouchableOpacity>
                </View>

                <View style={style.input}>
                    <TagInput init={this.props.actualIdenty.caracteristica} save={this.updateCarac}/>
                </View>
            </ View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    btnCancel: {
        marginRight: 10,
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
        paddingHorizontal: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(EditCarac);
