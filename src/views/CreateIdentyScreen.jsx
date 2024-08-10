import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, PermissionsAndroid, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { connect } from 'react-redux';
import { addIdenty } from '../store/actions/identys';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import BottomSheet from '@nonam4/react-native-bottom-sheet';
import TagInput from '../components/tagInput';

class CreateIdentyScreen extends Component {
    state = {
        open: false,
        photo: null,
        name: '',
        idade: -1,
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

    setValue(callback) {
        this.setState(state => ({
          pronome: callback(state.pronome),
        }));
    }

    updateCarac = (caracteristica) => {
        this.setState({caracteristica: caracteristica});
    };

    formatPronome = () => {
        let str = this.state.pronome.length > 0 ? this.state.pronome[0] : '';

        for (let i = 1; i < this.state.pronome.length; i++) {
            str += ', ' + this.state.pronome[i];
        }

        return str;
    };

    addIdenty = async () => {
        this.props.onAddIdenty({
            ...this.props.user,
            identy: {
                id: this.props.identy ? this.props.identy[this.props.identy.length - 1].id + 1 : 0,
                name: this.state.name,
                pronome: this.formatPronome(),
                genero: this.state.gender,
                idade: this.state.idade,
                caracteristica: this.state.caracteristica,
                descricao: this.state.descricao,
                photo: this.state.photo != null ? this.state.photo : '',
            },
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

                {/* Imagem */}
                <View style={style.containerImg}>
                    <TouchableOpacity onPress={() => this.takePhoto_uri.open()} >
                        {this.state.photo !== null ?
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
                        badgeColors="#ffc700"
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
        backgroundColor: '#ffc7004C',
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
        backgroundColor: '#ffc7004C',
        borderRadius: 15,
        padding: 20,
        marginBottom: 60,
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 18,
    },
    button: {
        backgroundColor: '#ffc700',
        borderRadius: 50,
        marginBottom: 100,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontWeight: '900',
        fontSize: 20,
        color: '#FFF',
    },
    containerImg: {
        marginBottom: 40,
        paddingVertical: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    imgSty: {
        borderRadius: 150,
    },
    imgFiltro: {
        backgroundColor: '#0000004D',
        width: 150,
        height: 150,
        borderRadius: 75,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    identyNoImage: {
        backgroundColor: 'rgba(255, 199, 0, 0.6)',
        width: 150,
        height: 150,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomSheet: {
        flexDirection: 'row',
        paddingHorizontal: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    bottomSheetBtn: {
        alignItems: 'center',
        gap: 15,
    },
    bottomSheetText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '700',
    },
});

const mapStateToProps = ({ user }) => {
    return {
        user: user,
        identy: user.identy,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddIdenty: identy => dispatch(addIdenty(identy)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateIdentyScreen);
