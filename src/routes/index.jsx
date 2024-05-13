import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../views/HomeScreen';
import editIndenty from '../views/EditIdentyScreen';
import newIdenty from '../views/CreateIdentyScreen';
import identy from '../views/ViewIdentyScreen';
import editName from '../views/editViews/EditNameSreen';
import EditCarac from '../views/editViews/EditCaracScreen';
import EditDescrip from '../views/editViews/EditDescripScreen';
import EditPronome from '../views/editViews/EditPronomeScreen';
import editIdade from '../views/editViews/EditIdadeScreen';
import editGenero from '../views/editViews/EditGeneroScreen';
import SingIn from '../views/Auth/SingIn';
import SingUp from '../views/Auth/SingUp';
import MoreInfo from '../views/MoreOptionScreen';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const SwitchAuthStack = createNativeStackNavigator();

// const SignInContext = React.createContext();

// function useIsSignedIn() {
//   const isSignedIn = React.useContext(SignInContext);
//   return isSignedIn;
// }

// function useIsSignedOut() {
//   const isSignedIn = React.useContext(SignInContext);
//   return !isSignedIn;
// }

// const RookSack = createNativeStackNavigator({
//     groups: {
//         LoggedIn: {
//             if: useIsSignedIn,
//             screen: Home,
//         },
//         SingIn: {
//             if: useIsSignedOut,
//             screen: SingIn,
//         }
//     }
// });

export default props => {
    const Auth = () => {
        <AuthStack.Navigator initialRouteName="SingIn">
            <AuthStack.Screen name="SingIn" component={SingIn}  options={{ headerShown: false}} />
        </AuthStack.Navigator>;
    };

    const AuthOrHome = () => {
        <SwitchAuthStack.Navigator>
            {true
                ? <SwitchAuthStack.Screen name="Home" component={Home} />
                : console.log('oiii')
            }
        </SwitchAuthStack.Navigator>;
    };

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                orientation: 'default',
            }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="VizualizarIdentidade" component={identy} options={{ headerShown: false}} />
            <Stack.Screen
                name="IndentidadeEdit"
                component={editIndenty}
                options={() => {
                    return {
                        title: 'Editar Identidade',
                        headerTitleAlign: 'center',
                    };
                }}
            />
            <Stack.Screen name="CriarIdentidade" component={newIdenty} options={{ headerShown: false}} />
            <Stack.Screen name="EditarNome" component={editName} options={{ headerShown: false}} />
            <Stack.Screen name="EditarIdade" component={editIdade} options={{ headerShown: false}} />
            <Stack.Screen name="EditarGenero" component={editGenero} options={{ headerShown: false}} />
            <Stack.Screen name="EditarCaracteristica" component={EditCarac} options={{ headerShown: false}} />
            <Stack.Screen name="EditarPronome" component={EditPronome} options={{ headerShown: false}} />
            <Stack.Screen name="EditarDescricao" component={EditDescrip} options={{ headerShown: false}} />
            <Stack.Screen name="SingIn" component={SingIn} options={{ headerShown: false}} />
            <Stack.Screen name="SingUp" component={SingUp} options={{ headerShown: false}} />
            <Stack.Screen name="MoreInfo" component={MoreInfo} options={{ headerShown: false}} />

        </Stack.Navigator>
    );
};
