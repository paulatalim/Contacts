import React, { Component } from 'react';
import {
    TouchableOpacity,
    StatusBar,
    Text,
    View,
} from 'react-native';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { logout } from '../../domain/actions/user';
import { style } from './style/more-option-style';
import { Avatar } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux';

class MoreOptions extends Component {
    state = {
        open: false,
        value: 'portuguese',
        items: [
            {label: 'English', value: 'english'},
            {label: 'Português', value: 'portuguese'},
        ],
    };

    setValue(callback) {
        this.setState(state => ({
          value: callback(state.value),
        }));
    }

    logout = () => {
        auth().signOut();
        this.props.onLogout();
    };

    render() {
        return (
            <View style={style.body}>
                <StatusBar backgroundColor={'#000'} />
                <View style={style.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <FontAwesomeIcon icon={faXmark} size={25} color="rgba(255, 255, 255, 0.8)" />
                    </TouchableOpacity>
                </View>
                <View style={style.perfil}>
                    <Avatar
                        rounded
                        size="large"
                        source={{
                            uri: 'https://picsum.photos/200'}}
                    />
                    <Text style={style.name}>{ this.props.name }</Text>
                    <Text style={style.email}>email@gmail.com</Text>
                    { this.props.email.lenght < 30 ?
                        <Text style={style.email}>{ this.props.email }</Text>
                        : <></>
                    }
                </View>
                {/* <View style={style.setting}>
                    <Text style={style.settingTitle}>Configurações</Text>
                    <View style={style.settingContainer}>
                        <Text style={style.idioma}>Idioma</Text>
                        <DropDownPicker
                            open={this.state.open}
                            value={this.state.value}
                            items={this.state.items}
                            setOpen={open => this.setState({open})}
                            setValue={value => this.setValue(value)}
                            arrowIconStyle={style.dropDownIcon}
                            style={style.dropDown}
                            dropDownContainerStyle={style.dropDownContainerStyle}
                            labelStyle={style.dropDownLabelStyle}
                            containerStyle={style.dropDownContainer}
                            listItemLabelStyle={style.dropDownItemLabelStyle}
                        />
                    </View>
                </View> */}
                <TouchableOpacity
                    style={style.logout}
                    onPress={this.logout}
                >
                    <FontAwesomeIcon icon={faRightFromBracket} size={20} color="#7300EC" />
                    <Text style={style.logoutButton}>Sair da Conta</Text>
                </TouchableOpacity>
            </View>
        );
   }
}

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreOptions);
