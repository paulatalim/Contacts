import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Platform,
    Dimensions,
    StatusBar,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import BoxGlass from '../../components/BoxGlass';
import { connect } from 'react-redux';
import { fetchUser, singup } from '../../store/actions/user';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

class SingIn extends Component {
    state = {
        name: 'Aleatorio',
        email: 'jane.doe@example.com',
        password: 'SuperSecretPassword!',
    };

    iosLogin = () => {
        this.props.onLogin({...this.state});
    };

    login = () => {
        auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.onLogin({
                    id: 0,
                    name: this.state.name,
                    email: this.state.email,
                    identy: null,
                });
                console.log('user singed in');
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

    googleLogin = async () => {
        try {
            // Verifica se o dispositivo tem suporte para Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

            // Obtém o ID token do usuário
            const { idToken } = await GoogleSignin.signIn();

            // Cria uma credencial do Google com o token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Faz o login no Firebase com a credencial
            await auth().signInWithCredential(googleCredential);

            console.log('Login com Google realizado com sucesso!');

            this.setState({...this.state, email: idToken});

            fetch('https://randomuser.me/api/')
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({...this.state, name: result.results[0].name.first});
                    }
                );

            this.props.onGoogleLoginIn({
                id: 0,
                name: this.state.name,
                email: this.state.email,
                identy: null,
            });
        } catch (error) {
            console.error('Erro ao fazer login com Google: ', error.message);
        }
    };

    render() {
        return (
            <ScrollView style={style.scroll}>
                <View style={style.img}>

                    <StatusBar
                        translucent={true}
                        backgroundColor={'transparent'}
                    />
                    <BoxGlass
                        width={0.85 * Dimensions.get('window').width}
                        height={0.8 * Dimensions.get('window').height}
                    />
                    <View style={[{height: 0.8 * Dimensions.get('window').height}, style.container]}>
                        <Text style={style.title}>Login</Text>
                        <View style={style.containerInput}>
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor={'#FFF'}
                                keyboardType="email-address"
                                onChangeText={email => this.setState({email})}
                                cursorColor="#FFF"
                                style={style.input}
                            />
                            <TextInput
                                onChangeText={password => this.setState({password})}
                                placeholder="Senha"
                                placeholderTextColor={'#FFF'}
                                secureTextEntry
                                cursorColor="#FFF"
                                style={style.input}
                            />
                        </View>

                        <TouchableOpacity
                            style={style.btnEntrar}
                            onPress={this.login}
                            >
                            <Text style={style.btnEntrarText}>Entrar</Text>
                        </TouchableOpacity>

                        <View style={style.containerLine}>
                            <View style={style.line} />
                            <Text style={style.lineText}>ou</Text>
                            <View style={style.line} />
                        </View>

                        <View style={style.containerBtn}>
                            <TouchableOpacity
                                style={style.btnGoogle}
                                onPress={this.googleLogin}
                                >
                                <Image style={style.googleImg} source={require('../../../assets/img/google.png')} />
                                <Text style={style.googleText}>Entrar com o Google</Text>
                                <View />
                            </TouchableOpacity>

                            {Platform.OS === 'ios' ?
                                <TouchableOpacity
                                    style={style.btnApple}
                                    onPress={this.iosLogin}
                                >
                                    <FontAwesomeIcon icon={faApple} color="#FFF" size={26}/>
                                    <Text style={style.appleContent}>Entrar com Apple</Text>
                                    <View />
                                </TouchableOpacity>
                                : <></>
                            }

                            <TouchableOpacity
                                style={style.btnCriarConta}
                                onPress={() => {
                                    this.props.navigation.navigate('SingUp');
                                }}
                                >
                                <Text style={style.btnCriarContaText}>Criar conta</Text>
                            </TouchableOpacity>
                        </View>
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
    img: {
        flex: 1,
        height: Dimensions.get('window').height + StatusBar.currentHeight,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: 0.85 * Dimensions.get('window').width,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 25,
    },
    title: {
        color: '#FFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 28,
    },
    containerInput: {
        width: '100%',
        gap: 20,
    },
    input: {
        backgroundColor: '#FFFFFF66',
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 25,
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        color: '#FFF',
    },
    btnEntrar: {
        backgroundColor: '#ffc700E5',
        borderRadius: 50,
        width: '100%',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    btnEntrarText: {
        color: '#FFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    },
    containerLine: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    line: {
        backgroundColor: '#FFF',
        width: '40%',
        height: 1,
        borderRadius: 50,
    },
    lineText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 18,
    },
    containerBtn: {
        gap: 15,
    },
    btnGoogle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 25,
        elevation: 10,
    },
    googleImg: {
        width: 23,
    },
    googleText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 18,
    },
    btnApple: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 50,
        backgroundColor: '#000',
        elevation: 10,
    },
    appleContent: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 18,
    },
    btnCriarConta: {
        backgroundColor: '#ffc700E5',
        borderRadius: 50,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    btnCriarContaText: {
        color: '#FFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    },
});

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(fetchUser(user)),
        onGoogleLoginIn: user => dispatch(singup(user)),
    };
};

export default connect(null, mapDispatchToProps)(SingIn);
