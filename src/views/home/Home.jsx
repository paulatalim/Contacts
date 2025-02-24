import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { changeActualContact } from '../../domain/actions/view-contact';
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { fetchUser } from '../../domain/actions/user';
import { style } from './style/home-style';
import { connect } from 'react-redux';

class Home extends Component {
    componentDidMount = () => {
        this.props.onFetchContact({ id: this.props.id });
    };

    render() {
        const getContact = ({item}) => {
            if (item === null) {
                return <></>;
            }
            return (
                <TouchableOpacity
                    onPress={() => {
                        this.props.onSelectContact({...item});
                        this.props.navigation.navigate('/contact', {id: item.id});
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
                        </View>
                    </View>
                </TouchableOpacity>
            );
        };

        return (
            <>
                <View style={style.header}>
                    <Text style={style.headerText}>Contatos</Text>
                    <TouchableOpacity
                        style={style.moreOption}
                        onPress={() => this.props.navigation.navigate('/more')}
                    >
                        <FontAwesomeIcon icon={faEllipsisVertical} color="#000" size={23} style={style.moreOption}/>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.props.contact}
                    renderItem={getContact}
                    keyExtractor={item => item ? item.id : -1}
                    />
                <TouchableOpacity
                    style={style.floatActionButton}
                    onPress={() => {
                        this.props.navigation.navigate('/contact/new');
                    }}
                    >
                    <FontAwesomeIcon icon={faAdd} size={30} color="#FFF" />
                </TouchableOpacity>
            </>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        id: user.id,
        contact: user.contacts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectContact: contact => dispatch(changeActualContact(contact)),
        onFetchContact: user => dispatch(fetchUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
