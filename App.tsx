import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import {StatusBar} from "react-native";
import {ThemeProvider} from 'styled-components';
import {
    useFonts,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_300Light_Italic
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import {DefaultTheme} from './src/theme';
import {AuthProvider, useAuth} from "./src/hooks/auth";

import Routes from './src/routes';

export default function App() {

    const [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_300Light_Italic
    });

    const { userStorageLoading } = useAuth();

    if (!fontsLoaded || userStorageLoading) {
        return <AppLoading/>
    }

    return (
        <ThemeProvider theme={DefaultTheme}>
            <StatusBar barStyle="light-content"/>
            <AuthProvider>
                <Routes/>
            </AuthProvider>
        </ThemeProvider>
    );
}

