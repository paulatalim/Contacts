import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from '../views/home';
import editIndenty from '../views/identyEdit';
import newIdenty from '../views/identyNew';
import identy from '../views/identyInfo';
import editName from '../views/editViews/editName';
import editTag from '../views/editViews/editTag';
import editTextArea from '../views/editViews/editTextArea';
import editSelesct from '../views/editViews/editSelect';
import editIdade from '../views/editViews/editIdade';
import editGenero from '../views/editViews/editGenero';

const Stack = createNativeStackNavigator();

export default props => {
    return (
        <Stack.Navigator
            initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={home}
                options={() => {
                    return {
                        title: 'Identidades',
                        headerStyle: {
                            backgroundColor: '#ffc700',
                        },
                        headerTitleStyle: {
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 22,
                        },
                        headerTitleAlign: 'center',
                    };
                }}
            />
            <Stack.Screen
                name="IndentidadeInfo"
                component={identy}
                options={{ headerShown: false}}
            />
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
            <Stack.Screen
                name="IdentidadeCriar"
                component={newIdenty}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="EditarNome"
                component={editName}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="EditarIdade"
                component={editIdade}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="EditarGenero"
                component={editGenero}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="EditarTagInput"
                component={editTag}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="EditarMultiSelect"
                component={editSelesct}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="EditarAreaTextInput"
                component={editTextArea}
                options={{ headerShown: false}} 
            />
        </Stack.Navigator>
    );
};
