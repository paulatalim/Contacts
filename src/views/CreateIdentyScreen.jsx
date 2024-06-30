import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { connect } from 'react-redux';
import { addIdenty } from '../store/actions/identys';
import TagInput from '../components/tagInput';

class CreateIdentyScreen extends Component {
    state = {
        open: false,
        name: '',
        idade: 0,
        gender: '',
        pronome: [],
        caracteristica: '',
        descricao: '',
    };

    pronomes = [
        {label: 'Ele/dele', value: 'Ele/dele'},
        {label: 'Ela/dela', value: 'Ela/dela'},
        {label: 'Elu/delu', value: 'Elu/delu'},
    ];

    setValue(callback) {
        this.setState(state => ({
          pronome: callback(state.pronome),
        }));
    }

    updateCarac = (caracteristica) => {
        this.setState({caracteristica: caracteristica});
    };

    formatPronome = () => {
        let str = this.state.pronome[0];

        for (let i = 1; i < this.state.pronome.length; i++) {
            str += ', ' + this.state.pronome[i];
        }

        return str;
    };

    addIdenty = async () => {
        this.props.onAddIdenty({
            id: this.props.identy.length + 1,
            name: this.state.name,
            pronome: this.formatPronome(),
            genero: this.state.gender,
            idade: this.state.idade,
            caracteristica: this.state.caracteristica,
            descricao: this.state.descricao,
            photo: '',
        });
    };

    render() {
        return (
            <ScrollView nestedScrollEnabled={this.state.open ? false : true} style={style.container}>
                {/* Header */}
                <View style={style.header}>
                    <Text style={style.headerTitle}>Criar nova identidade</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack();
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
                    onChangeText={name => this.setState({name})}
                    value={this.name}
                    />

                {/* Idade */}
                <TextInput
                    style={style.input}
                    placeholder="Idade"
                    placeholderTextColor={'#787855'}
                    onChangeText={idade => this.setState({idade: parseInt(idade, 10)})}
                    value={this.idade}
                    keyboardType="numeric"
                    />

                {/* Genero */}
                <TextInput
                    style={style.input}
                    placeholder="Gênero"
                    placeholderTextColor={'#787855'}
                    onChangeText={gender => this.setState({gender})}
                    value={this.gender}
                    autoComplete="gender"
                    />

                {/* Pronomes */}
                <View style={style.selectView}>
                    <Text style={style.selectTitle}>Pronomes</Text>
                    <DropDownPicker
                        open={this.state.open}
                        value={this.state.pronome}
                        items={this.pronomes}
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

                {/* Caracteristicas */}
                <View style={style.selectView}>
                    <Text style={style.selectTitle}>Características Principais</Text>
                    <TagInput save={this.updateCarac}/>
                </View>

                {/* Descricao */}
                <View>
                    <Text style={style.selectTitle}>Descrição</Text>
                    <TextInput
                        style={style.areaText}
                        placeholder="Descrição da identidade ..."
                        textAlign="left"
                        placeholderTextColor={'#787855'}
                        value={this.descricao}
                        onChangeText={descricao => this.setState({descricao})}
                        multiline={true}
                        numberOfLines={1}
                        maxLength={200}
                        />
                </View>

                {/* Botao Salvar */}
                <TouchableOpacity style={style.button}
                    onPress={() => {
                        this.addIdenty();
                        this.props.navigation.goBack();
                    }}>
                    <Text style={style.buttonText}>Criar</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

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
    selectTitle: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
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

const mapStateToProps = ({ identy }) => {
    return {
        identy: identy.identys,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddIdenty: identy => dispatch(addIdenty(identy)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateIdentyScreen);
// export default CreateIdentyScreen;
