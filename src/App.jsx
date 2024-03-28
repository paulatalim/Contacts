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
					options={() => {
						return {
							title: 'Identidades',
							headerStyle: {
								backgroundColor: '#ffc700',
							},
							headerTitleStyle: {
								fontFamily: 'Poppins-Medium',
								fontSize: 20,
							},
							headerTitleAlign: 'center',
						};
					}}
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

// const screenOptions = {{
// 	headerStyle: {
// 		backgroundColor: '#A00',
// 	},
// }};

export default App;
