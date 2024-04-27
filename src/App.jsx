import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './routes';

const App = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<StatusBar
				backgroundColor="#ffc700"
			/>
			<NavigationContainer>
				<Stack />
			</NavigationContainer>
		</SafeAreaView>
	);
};

export default App;
