import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    PermissionsAndroid,
    Platform,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import BottomSheet from '@nonam4/react-native-bottom-sheet';
import { addContact } from '../../domain/actions/contacts';
import { style } from './style/new-contact-style';
import { connect } from 'react-redux';

class NewContact extends Component {
    state = {
        id: -1,
        name: '',
        photo: '',
        number: '',
        email: '',
    };

    requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA, {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (e) {
                console.warn(e);
                return false;
            }
        }

        return true;
    };

    requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    });

                return granted === PermissionsAndroid.RESULTS.GRANTED;
          } catch (e) {
            console.warn(e);
          }
          return false;
        }

        return true;
    };

    pickImage = async () => {
        await this.requestCameraPermission();
        await this.requestExternalWritePermission();

        const result = await launchCamera({
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 300,
            maxWidth: 300,
        });

        if (!result.didCancel) {
            this.setState({ photo: result.assets[0].uri });
        }
    };

    pickImageLibrary = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 300,
            maxWidth: 300,
        });

        if (!result.didCancel) {
            this.setState({ photo: result.assets[0].uri });
        }
    };

    addContact = async () => {
        this.props.onAddContact({
            ...this.props.user,
            contact: {
                id: this.props.contact ? this.props.contact[this.props.contact.length - 1].id + 1 : 0,
                name: this.state.name,
                photo: this.state.photo != null ? this.state.photo : '',
                number: this.props.number,
                email: this.props.email,
            },
        });
    };

    render() {
        return (
            <ScrollView nestedScrollEnabled={this.state.open ? false : true} style={style.container}>
                {/* Header */}
                <View style={style.header}>
                    <Text style={style.headerTitle}>Novo Contato</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}
                        >
                        <FontAwesomeIcon icon={faXmark} size={27} color="#696969"/>
                    </TouchableOpacity>
                </View>

                {/* Imagem */}
                <View style={style.containerImg}>
                    <TouchableOpacity onPress={() => this.takePhoto_uri.open()} >
                        {this.state.photo !== '' ?
                            <ImageBackground source={{ uri: this.state.photo }} resizeMode="cover" style={style.img} imageStyle={style.imgSty}>
                                <View style={style.imgFiltro}>
                                    <FontAwesomeIcon icon={faCamera} color="#FFF" size={40}/>
                                </View>
                            </ImageBackground>
                            : <View style={style.identyNoImage}>
                                <FontAwesomeIcon icon={faCamera} color="#fff" size={40}/>
                            </View>
                        }
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

                {/* Botao Salvar */}
                <TouchableOpacity style={style.button}
                    onPress={() => {
                        this.addContact();
                        this.props.navigation.goBack();
                    }}>
                    <Text style={style.buttonText}>Criar</Text>
                </TouchableOpacity>

                <BottomSheet
                    ref={ref => {
                        this.takePhoto_uri = ref;
                    }}
                    height={130}
                    closeOnDragDown
                    customStyles={{
                        wrapper: {
                            backgroundColor: 'transparent',
                        },
                        draggableIcon: {
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        },
                        container: {
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            backgroundColor: '#ffc700',
                        },
                    }}
                >
                    <View style={style.bottomSheet}>
                        <TouchableOpacity onPress={this.pickImage} style={style.bottomSheetBtn}>
                            <FontAwesomeIcon icon={faCamera} size={25} color="rgba(0, 0, 0, 0.8)"/>
                            <Text style={style.bottomSheetText}>Tirar foto</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.pickImageLibrary} style={style.bottomSheetBtn}>
                            <FontAwesomeIcon icon={faImage} size={25} color="rgba(0, 0, 0, 0.8)"/>
                            <Text style={style.bottomSheetText}>Selecionar foto</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user: user,
        contact: user.contacts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddContact: contact => dispatch(addContact(contact)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewContact);
