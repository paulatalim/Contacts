import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    ScrollView,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { connect } from 'react-redux';
import { singup } from '../../store/actions/user';
import BoxGlass from '../../components/BoxGlass';

class SingUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    register = () => {
        this.props.onSingUp({
            id: 0,
            name: this.state.name,
            email: this.state.email,
            identy: null,
         });
    };

    render() {
      return (
        <ScrollView style={style.scroll}>
            <View style={style.container}>
                <BoxGlass
                        width={0.85 * Dimensions.get('window').width}
                        height={0.7 * Dimensions.get('window').height}
                        />
                <View style={style.content}>
                    <View style={style.header}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('SingIn')}
                            style={style.btnIcon}
                            >
                            <FontAwesomeIcon icon={faChevronLeft} color="#FFF" size={25} style={style.icon} />
                        </TouchableOpacity>
                        <Text style={style.title}>Criar Conta</Text>
                        <View />
                    </View>
                    <TextInput
                        placeholder="Nome"
                        onChangeText={name => this.setState({name})}
                        style={style.input}
                        placeholderTextColor={'#FFF'}
                        cursorColor={'#FFF'}
                        />
                    <TextInput
                        placeholder="Email"
                        onChangeText={email => this.setState({email})}
                        keyboardType="email-address"
                        style={style.input}
                        placeholderTextColor={'#FFF'}
                        cursorColor={'#FFF'}
                        />
                    <TextInput
                        placeholder="Senha"
                        onChangeText={password => this.setState({password})}
                        secureTextEntry
                        style={style.input}
                        placeholderTextColor={'#FFF'}
                        cursorColor={'#FFF'}
                        />
                    <TouchableOpacity
                        onPress={this.register}
                        style={style.btn}>
                        <Text style={style.btnTitle}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
      );
   }
}

const style = StyleSheet.create({
    scroll: {
        flex: 1,
    },
    container: {
        height: Dimensions.get('window').height + StatusBar.currentHeight,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: 0.85 * Dimensions.get('window').width,
        height: 0.7 * Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 25,
        paddingHorizontal: 25,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    btnIcon: {},
    icon: {},
    title: {
        color: '#FFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 28,
    },
    input: {
        width: '100%',
        backgroundColor: '#FFFFFF66',
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 25,
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        color: '#FFF',

    },
    btn: {
        backgroundColor: '#ffc700E5',
        borderRadius: 50,
        width: '100%',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    btnTitle: {
        color: '#FFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    },
});

const mapDispatchToProps = dispatch => {
    return {
        onSingUp: user => dispatch(singup(user)),
    };
};

export default connect(null, mapDispatchToProps)(SingUp);
