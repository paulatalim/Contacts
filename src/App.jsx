import React from 'react';
// import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import home from './views/home';
import editCamp from './views/manageIdenty/editCamp';
import editIndenty from './views/manageIdenty/editIndenty';
import newIdenty from './views/manageIdenty/newIdenty';
import identy from './views/identy';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={home}
				/>
				<Stack.Screen
					name="IndentidadeInfo"
					component={identy}
				/>
				<Stack.Screen
					name="IndentidadeEdit"
					component={editIndenty}
				/>
				<Stack.Screen
					name="IdentidadeCriar"
					component={newIdenty}
				/>
				<Stack.Screen
					name="IdentidadeCampo"
					component={editCamp}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
