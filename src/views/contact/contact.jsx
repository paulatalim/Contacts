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
import { deleteContact } from '../../domain/actions/contacts';
import BottomSheet from '@nonam4/react-native-bottom-sheet';
import { style } from './style/contact-style';
import { connect } from 'react-redux';

class Contact extends Component {
    delete = () => {
        this.props.onDeleteContact({ id: this.props.id, contact: this.props.contact });
        this.props.navigation.goBack();
    };

    render() {
        return (
            <ScrollView style={style.screen}>
                <View style={style.principal}>
                    <View style={style.header}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            >
                            <FontAwesomeIcon icon={faChevronLeft} size={20} color="rgba(0, 0, 0, 0.5)"/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.manageContact.open()}
                            >
                            <FontAwesomeIcon icon={faEllipsisV} size={20} color="rgba(0, 0, 0, 0.5)"/>
                        </TouchableOpacity>
                    </View>
                    {this.props.contact.photo !== '' ?
                        <Image style={style.img} source={{uri: this.props.contact.photo}} sharedTransionTag="tag" />

                        : <View style={style.imgUser}>
                            <FontAwesomeIcon icon={faUser} color="#fff" size={50}/>
                        </View>
                    }
                    <Text style={style.name}>{this.props.contact.name}</Text>
                </View>

                <Text>Telefone</Text>
                <Text>Email</Text>

                <BottomSheet
                    ref={ref => {
                        this.manageContact = ref;
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('/contact/edit')} style={style.bottomSheetBtn}>
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

const mapStateToProps = ({ user, actualContact }) => {
    return {
        id: user.id,
        contact: actualContact.contact,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteIdenty: identy => dispatch(deleteContact(identy)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
