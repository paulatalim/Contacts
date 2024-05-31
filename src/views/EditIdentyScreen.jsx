import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';

import Campo from '../components/identyEditInfo';

class EditIdentyScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.containerImg}>
                    {this.props.actualIdenty.photo !== '' ?
                        <ImageBackground source={{uri: this.props.actualIdenty.photo}} resizeMode="cover" style={style.img} imageStyle={style.imgSty}>
                            <View style={style.imgFiltro}>
                                <FontAwesomeIcon icon={faCamera} color="#FFF" size={40}/>
                            </View>
                        </ImageBackground>
                        : <View style={style.identyNoImage}>
                            <FontAwesomeIcon icon={faUser} color="#fff" size={60}/>
                        </View>
                    }
                </View>
                <Campo name="Nome" data={this.props.actualIdenty.name} route="EditarNome" />
                <Campo name="Pronome" data={this.props.actualIdenty.pronome} route="EditarPronome" />
                <Campo name="Gênero" data={this.props.actualIdenty.genero} route="EditarGenero" />
                <Campo name="Idade" data={this.props.actualIdenty.idade} route="EditarIdade" />
                <Campo name="Característica" data={this.props.actualIdenty.caracteristica} route="EditarCaracteristica" />
                <Campo name="Descrição" data={this.props.actualIdenty.descricao} route="EditarDescricao" />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    containerImg: {
        paddingVertical: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 150,
        height: 150,
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
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: 150,
        height: 150,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = ({actualIdenty}) => {
    return {
        actualIdenty: actualIdenty.identy,
    };
};

export default connect(mapStateToProps)(EditIdentyScreen);
