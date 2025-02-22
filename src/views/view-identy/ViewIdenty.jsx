import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image }
from 'react-native';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import BottomSheet from '@nonam4/react-native-bottom-sheet';
import { deleteIdenty } from '../store/actions/identys';
import Style from './style/ViewIdentyStyle';
import { connect } from 'react-redux';

class ViewIdenty extends Component {
    delete = () => {
        this.props.onDeleteIdenty({ id: this.props.id, identy: this.props.actualIdenty });
        this.props.navigation.goBack();
    };

    render() {
        return (
            <ScrollView>
                <View style={Style.principal}>
                    <View style={Style.header}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            >
                            <FontAwesomeIcon icon={faChevronLeft} size={20} color="rgba(0, 0, 0, 0.5)"/>
                        </TouchableOpacity>
                        <View style={Style.headerContent}>
                            <Text style={Style.name}>{this.props.actualIdenty.name}</Text>
                            <Text style={Style.pronome}>{this.props.actualIdenty.pronome}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.manageIdenty.open()}
                            >
                            <FontAwesomeIcon icon={faEllipsisV} size={20} color="rgba(0, 0, 0, 0.5)"/>
                        </TouchableOpacity>
                    </View>
                    {this.props.actualIdenty.photo !== '' ?
                        <Image style={Style.img} source={{uri: this.props.actualIdenty.photo}} sharedTransionTag="tag" />

                        : <View style={Style.imgUser}>
                            <FontAwesomeIcon icon={faUser} color="#fff" size={150}/>
                        </View>
                    }
                    <Text style={Style.carac}>{this.props.actualIdenty.caracteristica}</Text>
                </View>

                { this.props.actualIdenty.idade !== -1 ?
                    <View style={Style.info}>
                        <Text style={Style.title}>idade</Text>
                        <Text style={Style.idade}>{this.props.actualIdenty.idade} anos</Text>
                    </View>
                    : <></>
                }

                { this.props.actualIdenty.genero !== '' ?
                    <View style={Style.info}>
                        <Text style={Style.title}>gênero</Text>
                        <Text style={Style.genero}>{this.props.actualIdenty.genero}</Text>
                    </View>
                    : <></>
                }

                { this.props.actualIdenty.descricao !== '' ?
                    <View style={Style.descricaoContainer}>
                        <Text style={Style.title}>descrição</Text>
                        <Text style={Style.descricao}>{this.props.actualIdenty.descricao}</Text>
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
                    <View style={Style.bottomSheet}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('IndentidadeEdit')} style={Style.bottomSheetBtn}>
                            <FontAwesomeIcon icon={faPen} size={18} color="rgba(0, 0, 0, 0.6)"/>
                            <Text style={Style.bottomSheetText}>Editar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.delete()} style={Style.bottomSheetBtn}>
                            <FontAwesomeIcon icon={faTrash} size={18} color="rgba(0, 0, 0, 0.6)"/>
                            <Text style={Style.bottomSheetText}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            </ScrollView>
        );
    }
}

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
