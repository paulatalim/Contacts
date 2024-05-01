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
import SingIn from '../views/SingIn';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const SwitchAuthStack = createNativeStackNavigator();

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
                : <SwitchAuthStack.Screen name="Auth" component={Auth} />
            }
        </SwitchAuthStack.Navigator>;
    };

    return (
        <Stack.Navigator
            initialRouteName="Auth">
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
            <Stack.Screen name="Auth" component={AuthOrHome} />
        </Stack.Navigator>
    );
};
