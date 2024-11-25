/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Layout} from './src/styles/Layout';
import RootRoutes from './src/common/routes/user/RootRoutes';
import {NavigationProvider} from './src/common/Common/NavigationSource';
import {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {NavigationProviderNew} from './src/common/Common/NewNavigationSource';
import {NavigationProviderLogin} from './src/common/Common/LoginNavigationSource';

function App(): JSX.Element {
  useEffect(() => {
    const init = async () => {
      await new Promise(resolve => setTimeout(resolve, 3500));
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <GestureHandlerRootView style={[Layout.flex1]}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <NavigationProviderLogin>
            <NavigationProviderNew>
              <NavigationProvider>
                <RootRoutes />
              </NavigationProvider>
            </NavigationProviderNew>
          </NavigationProviderLogin>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});

export default App;
