import React from 'react';
import {Platform} from 'react-native';
import {useTheme} from 'styled-components';
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Dashboard} from '../pages/dashboard';
import {Register} from '../pages/register';
import {Resume} from '../pages/resume';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
    const theme = useTheme();
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: theme.colors.secondary,
                inactiveTintColor: theme.colors.text.default,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: Platform.OS === 'ios' ? RFValue(20) : 0,
                    height: RFValue(88),
                }
            }}
        >
            <Tab.Screen
                name='Dashboard'
                component={Dashboard}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <Feather
                            name='list'
                            size={size}
                            color={color}
                        />))
                }}
            />
            <Tab.Screen
                name='Cadastrar'
                component={Register}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <Feather
                            name='dollar-sign'
                            size={size}
                            color={color}
                        />))
                }}
            />
            <Tab.Screen
                name='Resumo'
                component={Resume}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <Feather
                            name='pie-chart'
                            size={size}
                            color={color}
                        />))
                }}
            />
        </Tab.Navigator>
    );
};

export default AppRoutes;
