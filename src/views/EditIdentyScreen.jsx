import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';

import Campo from '../components/identyEditInfo';

class EditIdentyScreen extends Component {
    state = {
        identy: this.props.actualIdenty,
    };

    render() {
        const id = this.props.route.params.id;

        function nav(page) {
            // this.props.navigation.navigate(page, identy);
        }

        return (
            <View style={style.container}>
                <View style={style.containerImg}>
                    {this.state.identy[id].photo !== '' ?
                        <ImageBackground source={{uri: this.state.identy[id].photo}} resizeMode="cover" style={style.img} imageStyle={style.imgSty}>
                            <View style={style.imgFiltro}>
                                <FontAwesomeIcon icon={faCamera} color="#FFF" size={40}/>
                            </View>
                        </ImageBackground>
                        : <View style={style.identyNoImage}>
                            <FontAwesomeIcon icon={faUser} color="#fff" size={60}/>
                        </View>
                    }
                </View>
                <Campo name="Nome" data={this.state.identy[id].name} nav={nav} route="EditarNome" />
                <Campo name="Pronome" data={this.state.identy[id].pronome} nav={nav} route="EditarPronome" />
                <Campo name="Gênero" data={this.state.identy[id].genero} nav={nav} route="EditarGenero" />
                <Campo name="Idade" data={this.state.identy[id].idade} nav={nav} route="EditarIdade" />
                <Campo name="Característica" data={this.state.identy[id].caracteristica} nav={nav} route="EditarCaracteristica" />
                <Campo name="Descrição" data={this.state.identy[id].descricao} nav={nav} route="EditarDescricao" />
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

const mapStateToProps = ({identy}) => {
    return {
        actualIdenty: identy.identys,
    };
};

export default connect(mapStateToProps)(EditIdentyScreen);
