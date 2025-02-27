import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
    PermissionsAndroid,
    Platform,
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
        image: this.props.actualContact.photo,
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
            this.save();
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
            this.save();
        }
    };

    save = async () => {
        const item = {
            id: this.props.id,
            Contact: {
                ...this.props.actualContact,
                photo: this.state.image,
            },
        };
        this.props.onEdit(item);
    };

    render() {
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity
                        style={style.btnVoltar}
                        onPress={() => {this.props.navigation.goBack();}}
                        >
                        <FontAwesomeIcon icon={faChevronLeft} size={20} color="rgba(0, 0, 0, 0.6)" />
                    </TouchableOpacity>

                    <Text style={style.title}>editar identidade</Text>

                    <View />
                </View>
                <View style={style.containerImg}>
                    <TouchableOpacity onPress={() => this.takePhoto.open()} >
                        {this.props.actualContact.photo !== '' ?
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
                {/* <Campo name="Nome" data={this.props.actualContact.name} route="EditarNome" /> */}
                {/* <Campo name="Pronome" data={this.props.actualContact.pronome} route="EditarPronome" />
                <Campo name="Gênero" data={this.props.actualContact.genero} route="EditarGenero" />
                <Campo name="Idade" data={this.props.actualContact.idade !== -1 ? this.props.actualContact.idade : ''} route="EditarIdade" />
                <Campo name="Característica" data={this.props.actualContact.caracteristica} route="EditarCaracteristica" />
                <Campo name="Descrição" data={this.props.actualContact.descricao} route="EditarDescricao" /> */}
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
