import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd';
import { connect } from 'react-redux';

import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { faUser } from '@fortawesome/free-regular-svg-icons';

class Home extends Component {
    render() {
        const getIdenty = ({item}) => {
            return (
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('VizualizarIdentidade', {id: item.id});
                    }}>
                    <View style={style.identyContainer}>
                        {item.photo !== '' ?
                            <Image
                                style={style.identyImage}
                                source={{uri: item.photo}}
                                sharedTransitionTag="tag"
                            />
                            : <View style={style.identyNoImage}>
                                <FontAwesomeIcon icon={faUser} color="#fff" size={25}/>
                            </View>
                        }
                        <View style={style.identyText}>
                            <Text style={style.identyName}>{item.name}</Text>
                            <Text style={style.identyCaract}>{item.caracteristica}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        };

        return (
            <>
                <View style={style.header}>
                    <Text style={style.headerText}>Identidades</Text>
                    <TouchableOpacity
                        style={style.moreOption}
                        onPress={() => this.props.navigation.navigate('MoreInfo')}
                    >
                        <FontAwesomeIcon icon={faEllipsisVertical} color="#000" size={23} style={style.moreOption}/>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.props.identy}
                    renderItem={getIdenty}
                    keyExtractor={item => item.id}
                    />
                <TouchableOpacity
                    style={style.floatActionButton}
                    onPress={() => {
                        this.props.navigation.navigate('CriarIdentidade');
                    }}
                    >
                    <FontAwesomeIcon icon={faAdd} size={30} color="#FFF" />
                </TouchableOpacity>
            </>
        );
    }
}

const style = StyleSheet.create({
    header: {
        backgroundColor: '#ffc700',
        paddingVertical: 20,
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        color: '#000',
    },
    moreOption: {},
    moreOptionIcon:{},
    identyContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        gap: 20,
    },
    identyText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    identyImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    identyNoImage: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    identyName: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Montserrat-Bold',
    },
    identyCaract: {
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'Roboto-Bold',
        fontWeight: '700',
    },
    floatActionButton: {
        position: 'absolute',
        backgroundColor: '#ffc700',
        width: 70,
        height: 70,
        borderRadius: 20,
        bottom: 50,
        right: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = ({ identy }) => {
    return {
        identy: identy.identys,
    };
};

export default connect(mapStateToProps)(Home);
