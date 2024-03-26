import React from 'react';
// import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from './views/home';
import editCamp from './views/identyManage/identyEditCamp';
import editIndenty from './views/identyManage/identyEdit';
import newIdenty from './views/identyManage/identyNew';
import identy from './views/identyManage/identyInfo';

const Stack = createNativeStackNavigator();

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
