import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import Stack from './routes';


const App = () => {
    SystemNavigationBar.setBarMode('dark', 'both');
    SystemNavigationBar.setNavigationColor('#ffc700');

    return (
        <SafeAreaView style={style.view}>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    view: {
        flex: 1,
    },
});

export default App;
