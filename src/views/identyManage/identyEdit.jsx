import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';

import Campo from '../../componentes/identyEditInfo';
import identy from '../../data/identyList';

export default props => {
    return (
        <SafeAreaView style={style.container}>
            <View style={style.containerImg}>
                <ImageBackground source={{uri: identy[0].photo}} resizeMode="cover" style={style.img}>
                    <View style={style.imgFiltro}>
                        <FontAwesomeIcon icon={faCamera} color="#FFF" size={40}/>
                    </View>
                </ImageBackground>
            </View>
            <Campo name="Nome" data={identy[0].name} />
            <Campo name="Pronome" data={identy[0].pronome} />
            <Campo name="Gênero" data={identy[0].genero} />
            <Campo name="Idade" data={identy[0].idade} />
            <Campo name="Característica" data={identy[0].caracteristica} />
            <Campo name="Descrição" data={identy[0].descricao} />
        </SafeAreaView>
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
        borderRadius: 100,
    },
    imgFiltro: {
        backgroundColor: '#0000004D',
        width: 150,
        height: 150,
        borderRadius: 100,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
