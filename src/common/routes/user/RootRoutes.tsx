import React, {useEffect, useState} from 'react';
import RootNavigator from './user.stack';
import AuthStackNavigator from '../auth/auth.stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppRoutes from './user.stack';
import { useNavigationSource } from '../../Common/NavigationSource';

const RootRoutes = () => {
  const {navigationSource}: any = useNavigationSource();
  const [LoggedIn, setLoggedIn]: any = useState(false);

  const LoginCheck = async () => {
    try {
      const data = await AsyncStorage.getItem('KeepLoggedIn');
      console.log('data for login access', data);
      setLoggedIn(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  // const loginState = useSelector((state: RootState) => state?.loginState?.user);
  // console.log('loginState', loginState);
  useEffect(() => {
    if (navigationSource === 'LOGOFF') {
      LoginCheck();
    } else {
      const timeoutId = setTimeout(() => {
        LoginCheck();
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [AsyncStorage.getItem('KeepLoggedIn'), navigationSource]);

  return (
    <>{navigationSource === 'Login' ? <AppRoutes /> : <AuthStackNavigator />}</>
  );
};

export default RootRoutes;
