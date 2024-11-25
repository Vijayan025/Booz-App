import ForgotPassword from '../../../Screens/AuthScreens/ForgotPassword';
import Login from '../../../Screens/AuthScreens/Login';
import Signup from '../../../Screens/AuthScreens/Signup';
import {AuthScreens} from './auth.screens';

const AUTH_ROUTES = {
  module: 'auth',
  initialRoute: 'login',
  routes: [
    {
      name: AuthScreens.login.displayName,
      path: AuthScreens.login.routeName,
      component: Login,
      drawerMenu: false,
      options: {headerShown: false},
    },
    {
      name: AuthScreens.signup.displayName,
      path: AuthScreens.signup.routeName,
      component: Signup,
      drawerMenu: false,
      options: {headerShown: false},
    },
    {
      name: AuthScreens.forgotPassword.displayName,
      path: AuthScreens.forgotPassword.routeName,
      component: ForgotPassword,
      drawerMenu: false,
      options: {headerShown: false},
    },
  ],
};

export {AUTH_ROUTES};
