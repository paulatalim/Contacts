import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { singup } from '../../domain/actions/user';
import auth from '@react-native-firebase/auth';
import BoxGlass from '../../shared/components/BoxGlass';
import { connect } from 'react-redux';
import { style } from './style/sing-up-style';

class SingUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    register = () => {
        auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.onSingUp({
                    id: 0,
                    name: this.state.name,
                    email: this.state.email,
                    identy: null,
                 });
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                }

                console.error(error);
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
                            onPress={() => this.props.navigation.navigate('/singin')}
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

const mapDispatchToProps = dispatch => {
    return {
        onSingUp: user => dispatch(singup(user)),
    };
};

export default connect(null, mapDispatchToProps)(SingUp);
