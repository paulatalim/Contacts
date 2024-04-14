import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from '../views/home';
import editCamp from '../views/identyEditCamp';
import editIndenty from '../views/identyEdit';
import newIdenty from '../views/identyNew';
import identy from '../views/identyInfo';

const Stack = createNativeStackNavigator();

export default props => {
    return (
        <Stack.Navigator
            initialRouteName="IdentidadeCriar">
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
                options={() => {
                    return {
                        headerShown: false,
                    };
                }}
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
                options={() => {
                    return {
                        headerShown: false,
                    };
                }}
            />
            <Stack.Screen
                name="IdentidadeCampo"
                component={editCamp}
            />
        </Stack.Navigator>
    );
};
