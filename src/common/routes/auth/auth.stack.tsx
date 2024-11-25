import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AUTH_ROUTES} from './auth.routes';

const AuthStack = createStackNavigator();

const mapAuthRoute = ({path, component, options}: any, key: number) => (
  <AuthStack.Screen
    name={path}
    component={component}
    options={options}
    key={key}
  />
);

const AuthStackNavigator = () => {

  return (
    <AuthStack.Navigator initialRouteName={AUTH_ROUTES.initialRoute}>
      {AUTH_ROUTES.routes.map(mapAuthRoute)}
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
