import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SingIn} from '../pages/sing-in';

const Auth = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Auth.Navigator screenOptions={{headerShown: false}}>
            <Auth.Screen name='SingIn' component={SingIn}/>
        </Auth.Navigator>
    );
};

export default AuthRoutes;
