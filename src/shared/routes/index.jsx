import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';

import Home from '../../presentation/home/home';
import EditContact from '../../presentation/edit-contact/edit-contact';
import NewContact from '../../presentation/new-contact/new-contact';
import Contact from '../../presentation/contact/contact';
import SingIn from '../../presentation/sing-in/sing-in';
import SingUp from '../../presentation/sing-up/sing-up';
import MoreOption from '../../presentation/more-option/more-option';

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
                    <Stack.Screen name="/contact/new" component={NewContact} />
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

