/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {DefaultTheme, Provider as ProviderPaper} from "react-native-paper";
//para poner colores
/*
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "tomato",
        accent: "yellow",
    },
};
console.log(theme);
*/
function Main() {
    return <ProviderPaper>
        <App />
    </ProviderPaper>
}

AppRegistry.registerComponent(appName, () => Main);
