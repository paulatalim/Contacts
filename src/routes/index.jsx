import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';

import Home from '../views/home/Home';
import editIndenty from '../views/edit-identy/EditIdenty';
import newIdenty from '../views/new-identy/NewIdenty';
import identy from '../views/view-identy/ViewIdenty';
// import editName from '../views/edit-name/EditName';
import SingIn from '../views/sing-in/SingIn';
import SingUp from '../views/sing-up/SingUp';
import MoreInfo from '../views/more-option/MoreOption';

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
                    <Stack.Screen name="/contact" component={identy} />
                    <Stack.Screen name="/contact/edit" component={editIndenty}/>
                    <Stack.Screen name="contact/new" component={newIdenty} />
                    {/* <Stack.Screen name="EditarNome" component={editName} /> */}
                    <Stack.Screen name="/more" component={MoreInfo} />
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

