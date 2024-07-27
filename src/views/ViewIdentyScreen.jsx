import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import { deleteIdenty } from '../store/actions/identys';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import BottomSheet from '@nonam4/react-native-bottom-sheet';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

class ViewIdenty extends Component {
    delete = () => {
        this.props.onDeleteIdenty({ id: this.props.id, identy: this.props.actualIdenty });
        this.props.navigation.goBack();
    };

    render() {
        return (
            <ScrollView>
                <View style={style.principal}>
                    <View style={style.header}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            >
                            <FontAwesomeIcon icon={faChevronLeft} size={20} color="rgba(0, 0, 0, 0.5)"/>
                        </TouchableOpacity>
                        <View style={style.headerContent}>
                            <Text style={style.name}>{this.props.actualIdenty.name}</Text>
                            <Text style={style.pronome}>{this.props.actualIdenty.pronome}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.manageIdenty.open()}
                            >
                            <FontAwesomeIcon icon={faEllipsisV} size={20} color="rgba(0, 0, 0, 0.5)"/>
                        </TouchableOpacity>
                    </View>
                    {this.props.actualIdenty.photo !== '' ?
                        <Image style={style.img} source={{uri: this.props.actualIdenty.photo}} sharedTransionTag="tag" />

                        : <View style={style.imgUser}>
                            <FontAwesomeIcon icon={faUser} color="#fff" size={150}/>
                        </View>
                    }
                    <Text style={style.carac}>{this.props.actualIdenty.caracteristica}</Text>
                </View>

                { this.props.actualIdenty.idade !== -1 ?
                    <View style={style.info}>
                        <Text style={style.title}>idade</Text>
                        <Text style={style.idade}>{this.props.actualIdenty.idade} anos</Text>
                    </View>
                    : <></>
                }

                {this.props.genero ?
                    <View style={style.info}>
                        <Text style={style.title}>gênero</Text>
                        <Text style={style.genero}>{this.props.actualIdenty.genero}</Text>
                    </View>
                    : <></>
                }

                {this.props.descricao === '' ?
                    <View style={style.descricaoContainer}>
                        <Text style={style.title}>descrição</Text>
                        <Text style={style.descricao}>{this.props.actualIdenty.descricao}</Text>
                    </View>
                    : <></>
                }

                <BottomSheet
                    ref={ref => {
                        this.manageIdenty = ref;
                    }}
                    height={180}
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('IndentidadeEdit')} style={style.bottomSheetBtn}>
                            <FontAwesomeIcon icon={faPen} size={18} color="rgba(0, 0, 0, 0.6)"/>
                            <Text style={style.bottomSheetText}>Editar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.delete()} style={style.bottomSheetBtn}>
                            <FontAwesomeIcon icon={faTrash} size={18} color="rgba(0, 0, 0, 0.6)"/>
                            <Text style={style.bottomSheetText}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    principal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        marginTop: 50,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    headerContent: {
        alignItems: 'center',
    },
    name: {
        fontFamily:'Montserrat-ExtraBold',
        fontSize: 25,
        color: '#000',
    },
    pronome: {
        fontFamily:'Montserrat-Medium',
        fontSize: 22,
        color: '#4D4D4D',
    },
    img: {
        width: 300,
        height: 300,
        borderRadius: 250,
        marginTop: 30,
        marginBottom: 30,
    },
    imgUser: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 250,
        width: 300,
        height: 300,
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carac: {
        marginBottom: 60,
        fontFamily:'Montserrat-Medium',
        fontWeight: '500',
        fontSize: 25,
        color: '#000',
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
    },
    title: {
        fontFamily:'Roboto-Bold',
        fontWeight: '700',
        fontSize: 20,
        textTransform: 'capitalize',
        color: '#000',
    },
    idade: {
        fontFamily:'Roboto',
        fontWeight: '700',
        fontSize: 20,
        color: 'rgba(0, 0, 0, 0.6)',
    },
    genero: {
        fontFamily:'Roboto',
        fontWeight: '700',
        fontSize: 20,
        textTransform: 'capitalize',
        color: 'rgba(0, 0, 0, 0.6)',
    },
    descricaoContainer: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 20,
        marginBottom: 50,
        gap: 15,
    },
    descricao: {
        fontFamily:'Roboto',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 28,
        textTransform: 'capitalize',
        color: 'rgba(0, 0, 0, 0.6)',
    },
    bottomSheet: {
        paddingHorizontal: 40,
        alignItems: 'flex-start',
        paddingVertical: 20,
        gap: 40,
    },
    bottomSheetBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
    },
    bottomSheetText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '700',
    },
});

const mapStateToProps = ({ user, actualIdenty}) => {
    return {
        id: user.id,
        actualIdenty: actualIdenty.identy,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteIdenty: identy => dispatch(deleteIdenty(identy)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewIdenty);
