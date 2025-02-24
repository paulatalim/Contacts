import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';

import Home from '../views/home/home';
import EditContact from '../views/edit-contact/edit-contact';
import NewContact from '../views/new-contact/new-contact';
import Contact from '../views/contact/contact';
import SingIn from '../views/sing-in/sing-in';
import SingUp from '../views/sing-up/sing-up';
import MoreOption from '../views/more-option/more-option';

const Stack = createNativeStackNavigator();

const Routes = props => {
    const isSignedIn = props.email ? true : false;

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={isSignedIn ? 'Home' : 'SingIn'}>
            {isSignedIn ? (
                <>
                    <Stack.Screen name="/" component={Home} />
                    <Stack.Screen name="/contact" component={Contact} />
                    <Stack.Screen name="/contact/edit" component={EditContact}/>
                    <Stack.Screen name="contact/new" component={NewContact} />
                    <Stack.Screen name="/more" component={MoreOption} />
                </>
            ) : (
                <>
                    <Stack.Screen name="/singin" component={SingIn} />
                    <Stack.Screen name="/singup" component={SingUp} />
                </>
            )}
        </Stack.Navigator>
    );
};

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
    };
};

export default connect(mapStateToProps)(Routes);

