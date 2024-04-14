import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';

import Campo from '../../components/identyEditInfo';

export default props => {
    const identy = props.route.params;

    return (
        <View style={style.container}>
            <View style={style.containerImg}>
                <ImageBackground source={{uri: identy.photo}} resizeMode="cover" style={style.img}>
                    <View style={style.imgFiltro}>
                        <FontAwesomeIcon icon={faCamera} color="#FFF" size={40}/>
                    </View>
                </ImageBackground>
            </View>
            <Campo name="Nome" data={identy.name} />
            <Campo name="Pronome" data={identy.pronome} />
            <Campo name="Gênero" data={identy.genero} />
            <Campo name="Idade" data={identy.idade} />
            <Campo name="Característica" data={identy.caracteristica} />
            <Campo name="Descrição" data={identy.descricao} />
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
