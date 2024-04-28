import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Platform,
    Dimensions,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';

const SingIn = props => {
    return (
        <ScrollView>
            <ImageBackground
                source={require('../../assets/img/sunflower.png')}
                resizeMode="cover"
                style={[
                    {height: Dimensions.get('window').height},
                    style.img,
                ]}
            >
                <View style={[{height: 0.7 * Dimensions.get('window').height}, style.container]}>
                    <Text style={style.title}>Login</Text>
                    <View style={style.containerInput}>
                        <TextInput
                            // inlineImageLeft={<FontAwesomeIcon icon={faUser}/>}
                            placeholder="Email"
                            placeholderTextColor={'#FFF'}
                            keyboardType="email-address"
                            cursorColor="#FFF"
                            style={style.input}
                            />
                        <TextInput
                            placeholder="Senha"
                            placeholderTextColor={'#FFF'}
                            secureTextEntry
                            cursorColor="#FFF"
                            style={style.input}
                            />
                    </View>
                    <TouchableOpacity
                        style={style.btnEntrar}
                        onPress={() => {
                            props.navigation.navigate('Home');
                        }}
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
                            onPress={() => {
                                props.navigation.navigate('Home');
                            }}
                            >
                            <Image style={style.googleImg} source={require('../../assets/img/google.png')} />
                            <Text style={style.googleText}>Entrar com o Google</Text>
                            <View />
                        </TouchableOpacity>

                        {Platform.OS === 'ios' ?
                            <TouchableOpacity
                                style={style.btnApple}
                                onPress={() => {
                                    props.navigation.navigate('Home');
                                }}
                                >
                                <FontAwesomeIcon icon={faApple} color="#FFF" size={26}/>
                                <Text style={style.appleContent}>Entrar com Apple</Text>
                                <View />
                            </TouchableOpacity>
                            : <></>
                        }
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default SingIn;

const style = StyleSheet.create({
    scroll: {
        flex: 1,
    },
    img: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#AA93097F',
        borderRadius: 40,
        width: '85%',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
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
        backgroundColor: '#FFFFFF99',
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 25,
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        color: '#FFF',
    },
    inputPlaceholder: {},
    btnEntrar: {
        backgroundColor: '#ffc700',
        opacity: 0.9,
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
        gap: 20,
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
});
