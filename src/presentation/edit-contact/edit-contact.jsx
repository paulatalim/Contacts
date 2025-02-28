import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
    PermissionsAndroid,
    Platform,
    TextInput,
} from 'react-native';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { changeActualContact } from '../../domain/actions/view-contact';
import { faImage, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import BottomSheet from '@nonam4/react-native-bottom-sheet';
import { editContact } from '../../domain/actions/contacts';
import { style } from './style/edit-contact-style';
import { connect } from 'react-redux';

class EditContact extends Component {
    state = {
        name: this.props.actualContact.name,
        image: this.props.actualContact.photo,
        number: this.props.actualContact.number,
        email: this.props.actualContact.email,
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
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'External Storage Write Permission',
                message: 'App needs write permission',
              },
            );

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
            maxHeight: 300,
            maxWidth: 300,
        });

        if (!result.didCancel) {
            this.setState({image: result.assets[0].uri});
        }
    };

    pickImageLibrary = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            maxHeight: 300,
            maxWidth: 300,
        });

        if (!result.didCancel) {
            this.setState({image: result.assets[0].uri});
        }
    };

    save = async () => {
        const item = {
            id: this.props.id,
            contact: {
                ...this.props.actualContact,
                name: this.state.name === '' ? this.props.actualContact.name : this.state.name,
                photo: this.state.image,
                number:this.state.number,
                email: this.state.email,
            },
        };
        this.props.onEdit(item);
        this.props.navigation.goBack();
    };

    render() {
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity
                        style={style.btnVoltar}
                        onPress={() => {this.props.navigation.goBack();}}
                        >
                        <FontAwesomeIcon icon={faChevronLeft} size={20} color="rgba(255, 255, 255, 0.6)" />
                    </TouchableOpacity>
                    <View />
                </View>
                <View style={style.containerImg}>
                    <TouchableOpacity onPress={() => this.takePhoto.open()} >
                        {this.state.image !== '' ?
                                <ImageBackground source={{uri: this.state.image}} resizeMode="cover" style={style.img} imageStyle={style.imgSty}>
                                    <View style={style.imgFiltro}>
                                        <FontAwesomeIcon icon={faCamera} color="#FFF" size={40}/>
                                    </View>
                                </ImageBackground>
                            : <View style={style.ContactNoImage}>
                                <FontAwesomeIcon icon={faUser} color="#fff" size={60}/>
                            </View>
                        }
                    </TouchableOpacity>
                </View>
                <Text style={style.labelInput}>Nome</Text>
                <TextInput
                    style={style.input}
                    placeholder="Nome"
                    placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                    cursorColor={'#7300EC'}
                    keyboardType="name-phone-pad"
                    onChangeText={name => this.setState({name})}
                    value={this.state.name}
                />

                <Text style={style.labelInput}>Telefone</Text>
                <TextInput
                    style={style.input}
                    placeholder="(00) 00000-0000"
                    placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                    cursorColor={'#7300EC'}
                    keyboardType="numeric"
                    onChangeText={number => this.setState({number})}
                    value={this.state.number}
                />

                <Text style={style.labelInput}>Email</Text>
                <TextInput
                    style={style.input}
                    placeholder="email@gmail.com"
                    placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                    cursorColor={'#7300EC'}
                    keyboardType="email-address"
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                />

                <TouchableOpacity
                    onPress={() => this.save()}
                >
                    <View style={style.btnSave}>
                        <Text style={style.btnSaveText}>Salvar</Text>
                    </View>
                </TouchableOpacity>

                <BottomSheet
                    ref={ref => {
                        this.takePhoto = ref;
                    }}
                    height={130}
                    closeOnDragDown
                    customStyles={{
                        wrapper: {
                            backgroundColor: 'transparent',
                        },
                        draggableIcon: {
                            backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        },
                        container: {
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            backgroundColor: '#8200F5',
                        },
                    }}
                >
                    <View style={style.bottomSheet}>
                        <TouchableOpacity onPress={this.pickImage} style={style.bottomSheetBtn}>
                            <FontAwesomeIcon icon={faCamera} size={25} color="#FFF"/>
                            <Text style={style.bottomSheetText}>Tirar foto</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.pickImageLibrary} style={style.bottomSheetBtn}>
                            <FontAwesomeIcon icon={faImage} size={25} color="#FFF"/>
                            <Text style={style.bottomSheetText}>Selecionar foto</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            </View>
        );
    }
}

const mapStateToProps = ({ user, actualContact }) => {
    return {
        id: user.id,
        actualContact: actualContact.contact,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEdit: contact => {
            dispatch(editContact(contact));
            dispatch(changeActualContact(contact.contact));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
