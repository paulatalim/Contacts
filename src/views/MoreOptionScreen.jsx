import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View, StatusBar  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import DropDownPicker from 'react-native-dropdown-picker';

class MoreOptions extends Component {
    state = {
        open: false,
        value: 'portuguese',
        items: [
            {label: 'English', value: 'english'},
            {label: 'Português', value: 'portuguese'},
        ],
    };

    setOpen(open) {
        this.setState({open});
    }

    setValue(callback) {
        this.setState(state => ({
          value: callback(state.value),
        }));
      }

    setItems(callback) {
        this.setState(state => ({
            items: callback(state.items),
        }));
    }

   render() {
        return (
            <View style={style.body}>
                <StatusBar backgroundColor={'#ffffc0'} />
                <View style={style.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <FontAwesomeIcon icon={faXmark} size={25} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={style.perfil}>
                    <Image style={style.img} source={{uri: 'https://picsum.photos/100.jpg'}} resizeMode="cover" borderRadius={50} />
                    <Text style={style.name}>Nome</Text>
                    <Text style={style.email}>email@gmail.com</Text>
                </View>
                <View style={style.setting}>
                    <Text style={style.settingTitle}>Configurações</Text>
                    <View style={style.settingContainer}>
                        <Text style={style.idioma}>Idioma</Text>
                        <DropDownPicker
                            open={this.state.open}
                            value={this.state.value}
                            items={this.state.items}
                            setOpen={open => this.setOpen(open)}
                            setValue={value => this.setValue(value)}
                            setItems={items => this.setItems(items)}
                            arrowIconStyle={{tintColor: '#00000090', width: 26}}
                            style={style.dropDown}
                            dropDownContainerStyle={style.dropDownContainerStyle}
                            labelStyle={style.dropDownLabelStyle}
                            containerStyle={style.dropDownContainer}
                            listItemLabelStyle={style.dropDownItemLabelStyle}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={style.logout}
                    onPress={() => this.props.navigation.navigate('SingIn')}
                >
                    <FontAwesomeIcon icon={faRightFromBracket} size={20} color="#A00" />
                    <Text style={style.logoutButton}>Sair da Conta</Text>
                </TouchableOpacity>
            </View>
        );
   }
}

const style = StyleSheet.create({
    body: {
        backgroundColor: '#ffffc0',
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        marginVertical: 20,
    },
    perfil: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 15,
        paddingVertical: 40,
        gap: 10,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        color: '#000',
        fontSize: 20,
        fontWeight: '600',
    },
    email: {
        color: '#434343',
        fontSize: 18,
        fontWeight: '400',
    },
    setting: {
        marginTop: 50,
    },
    settingTitle: {
        color: '#000',
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 30,
    },
    settingContainer: {
        backgroundColor: '#FFF',
        paddingVertical: 20,
        paddingHorizontal: 20,
        elevation: 15,
        borderRadius: 15,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // gap: 100,
    },
    idioma: {
        color: '#000',
        fontWeight: '400',
        fontSize: 20,
    },
    dropDown: {
        // width: '50%',
        borderColor: 'transparent',
    },
    dropDownContainer: {
        width: '50%',
    },
    dropDownContainerStyle: {
        // width: '50%',
        borderRadius: 20,
        borderColor: '#00000000',
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
    logout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        backgroundColor: '0A0',
        marginTop: 100,
    },
    logoutButton: {
        color:'#A00',
        fontSize: 18,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
});

export default MoreOptions;
