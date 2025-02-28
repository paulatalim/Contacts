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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { deleteContact } from '../../domain/actions/contacts';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
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
                    </View>
                    {this.props.contact.photo !== '' ?
                        <Image style={style.img} source={{uri: this.props.contact.photo}} sharedTransionTag="tag" />

                        : <View style={style.imgUser}>
                            <FontAwesomeIcon icon={faUser} color="#fff" size={50}/>
                        </View>
                    }
                    <Text style={style.name}>{this.props.contact.name}</Text>
                </View>

                {this.props.contact.number !== ''
                    ? <View style={style.dataContainer}>
                        <FontAwesomeIcon icon={faPhone} color="#fff"  size={18}/>
                        <Text style={style.dataText}>{this.props.contact.number}</Text>
                        <View/>
                    </View>
                    : <View/>
                }

                { this.props.contact.email !== ''
                    ? <View style={style.dataContainer}>
                        <FontAwesomeIcon icon={faEnvelope} color="#fff"  size={18}/>
                        <Text style={style.dataText}>{this.props.contact.email}</Text>
                        <View/>
                    </View>
                    : <View/>
                }
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
