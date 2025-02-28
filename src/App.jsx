import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Stack from './shared/routes';

const App = () => {
    SystemNavigationBar.setBarMode('dark', 'both');

    return (
        <View style={style.view}>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
        </View>
    );
};

const style = StyleSheet.create({
    view: {
        flex: 1,
    },
});

export default App;
