import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './routes';

const App = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<NavigationContainer>
				<Stack />
			</NavigationContainer>
		</SafeAreaView>
	);
};

export default App;
