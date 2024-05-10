import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';

import Campo from '../components/identyEditInfo';

class EditIdentyScreen extends Component {
    render() {
        const identy = this.props.route.params;

        function nav(page) {
            this.props.navigation.navigate(page, identy);
        }

        return (
            <View style={style.container}>
                <View style={style.containerImg}>
                    <ImageBackground source={{uri: identy.photo}} resizeMode="cover" style={style.img} imageStyle={style.imgSty}>
                        <View style={style.imgFiltro}>
                            <FontAwesomeIcon icon={faCamera} color="#FFF" size={40}/>
                        </View>
                    </ImageBackground>
                </View>
                <Campo name="Nome" data={identy.name} nav={nav} route="EditarNome" />
                <Campo name="Pronome" data={identy.pronome} nav={nav} route="EditarPronome" />
                <Campo name="Gênero" data={identy.genero} nav={nav} route="EditarGenero" />
                <Campo name="Idade" data={identy.idade} nav={nav} route="EditarIdade" />
                <Campo name="Característica" data={identy.caracteristica} nav={nav} route="EditarCaracteristica" />
                <Campo name="Descrição" data={identy.descricao} nav={nav} route="EditarDescricao" />
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
});

export default EditIdentyScreen;
