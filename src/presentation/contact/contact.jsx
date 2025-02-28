import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    StatusBar,
}
from 'react-native';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { deleteContact } from '../../domain/actions/contacts';
import BottomSheet from '@nonam4/react-native-bottom-sheet';
import { style } from './style/contact-style';
import { connect } from 'react-redux';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
    delete = () => {
        this.props.onDeleteContact({ id: this.props.id, contact: this.props.contact });
        this.props.navigation.goBack();
    };

    render() {
        return (
            <ScrollView style={style.screen}>
                <StatusBar backgroundColor={'#000'} />
                <View style={style.principal}>
                    <View style={style.header}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            >
                            <FontAwesomeIcon icon={faChevronLeft} size={20} color="#FFF"/>
                        </TouchableOpacity>
                        <View style={style.manageContact}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('/contact/edit')}
                            >
                                <FontAwesomeIcon icon={faPen} size={18} color="#FFF"/>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => this.delete()}
                            >
                                <FontAwesomeIcon icon={faTrash} size={18} color="#FFF"/>
                            </TouchableOpacity>
                        </View>
                        {/* <TouchableOpacity
                            onPress={() => this.manageContact.open()}
                            >
                            <FontAwesomeIcon icon={faEllipsisV} size={20} color="#FFF"/>
                        </TouchableOpacity> */}
                    </View>
                    {this.props.contact.photo !== '' ?
                        <Image style={style.img} source={{uri: this.props.contact.photo}} sharedTransionTag="tag" />

                        : <View style={style.imgUser}>
                            <FontAwesomeIcon icon={faUser} color="#fff" size={50}/>
                        </View>
                    }
                    <Text style={style.name}>{this.props.contact.name}</Text>
                </View>

                <View style={style.dataContainer}>
                    <FontAwesomeIcon icon={faPhone} color="#fff"  size={18}/>
                    <Text style={style.dataText}>(00) 00000-0000</Text>
                    <View/>
                </View>

                <View style={style.dataContainer}>
                    <FontAwesomeIcon icon={faEnvelope} color="#fff"  size={18}/>
                    <Text style={style.dataText}>email@gmail.com</Text>
                    <View/>
                </View>

                {/* <BottomSheet
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
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                        container: {
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            backgroundColor: '#7300EC',
                        },
                    }}
                >
                    <View style={style.bottomSheet}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('/contact/edit')} style={style.bottomSheetBtn}>
                            <FontAwesomeIcon icon={faPen} size={18} color="rgba(255, 255, 255, 0.8)"/>
                            <Text style={style.bottomSheetText}>Editar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.delete()} style={style.bottomSheetBtn}>
                            <FontAwesomeIcon icon={faTrash} size={18} color="rgba(255, 255, 255, 0.8)"/>
                            <Text style={style.bottomSheetText}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet> */}
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
