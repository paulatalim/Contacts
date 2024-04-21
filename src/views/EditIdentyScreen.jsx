import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';

import Campo from '../components/identyEditInfo';

export default props => {
    const identy = props.route.params;

    function nav(page) {
        props.navigation.navigate(page)
    }

    return (
        <View style={style.container}>
            <View style={style.containerImg}>
                <ImageBackground source={{uri: identy.photo}} resizeMode="cover" style={style.img}>
                    <View style={style.imgFiltro}>
                        <FontAwesomeIcon icon={faCamera} color="#FFF" size={40}/>
                    </View>
                </ImageBackground>
            </View>
            <Campo name="Nome" data={identy.name} nav={nav} route='EditarNome' />
            <Campo name="Pronome" data={identy.pronome} nav={nav} route="EditarMultiSelect" />
            <Campo name="Gênero" data={identy.genero} nav={nav} route="EditarGenero" />
            <Campo name="Idade" data={identy.idade} nav={nav} route="EditarIdade" />
            <Campo name="Característica" data={identy.caracteristica} nav={nav} route="EditarTagInput" />
            <Campo name="Descrição" data={identy.descricao} nav={nav} route="EditarAreaTextInput" />
        </View>
    );
};

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
        backgroundColor: '#A00',
        width: 150,
        height: 150,
        borderRadius: 75,
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
