import React from 'react';
import { Provider } from 'react-redux';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import storeConfig from './src/store/storeConfig';
import axios from 'axios';

axios.defaults.baseURL = 'https://identy-cd856-default-rtdb.firebaseio.com/';
const store = storeConfig();

GoogleSignin.configure({
    webClientId: '897362002662-kihdbmlmur6gsj5s3mi7m9o808j0m5s4.apps.googleusercontent.com',
    offlineAccess: true,
});

const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
