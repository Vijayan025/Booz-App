import React, {useCallback, useEffect, useState} from 'react';
import {Image, StatusBar, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {UserScreens} from './user.screens';
import {ColorLabels, theme} from '../../theme';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../../Screens/Home/Home';
import {useNavigationSource} from '../../Common/NavigationSource';
import LeftMenuDrawerContent from '../../../Screens/LeftMenu/LeftMenuDrawerContent';
import NearBy from '../../../Screens/NearByScreen/NearBy';
import Cart from '../../../Screens/Cart/Cart';
import Profile from '../../../Screens/Profile/Profile';
import ProfileSvg from '../../Common/Svg/ProfileSvg';
import HomeSvg from '../../Common/Svg/HomeSvg';
import AppsSvg from '../../Common/Svg/AppsSvg';
import CartSvg from '../../Common/Svg/CartSvg';
import ProductDetail from '../../../Screens/ProductDetails/ProductDetail';
import HomeSecond from '../../../Screens/Home/HomeSecond';
import ShotsAndBottles from '../../../Screens/ShotsAndBottles/ShotsAndBottles';
import OrderSuccessful from '../../../Screens/ShotsAndBottles/OrderSuccessful';
import TransactionComplete from '../../../Screens/Cart/TransactionComplete';
import VirtualPurchased from '../../../Screens/Cart/VirtualPurchased';
import VirtualShotsTracker from '../../../Screens/Cart/VirtualShotsTracker';
import BillDetails from '../../../Screens/BillDetails/BillDetails';
import SuggestionView from '../../../Screens/NearByScreen/SuggestionView';
import {useNewNavigationSource} from '../../Common/NewNavigationSource';
import PlaceShotsOrder from '../../../Screens/NearByScreen/PlaceShotsOrder';
import {useLoginNavigationSource} from '../../Common/LoginNavigationSource';
import RetailHome from '../../../Screens/RetailScreens/RetailHome/RetailHome';
import RetailScanScreen from '../../../Screens/RetailScreens/RetailScan/RetailScanScreen';
import RetailCustomerHistory from '../../../Screens/RetailScreens/RetailCustomer/RetailCustomerHistory';
import ScanIcon from '../../../../assets/images/scan.png';
import RetailOrderScreen from '../../../Screens/RetailScreens/RetailHome/RetailOrderScreen';
import CustomerDetails from '../../../Screens/RetailScreens/RetailCustomer/CustomerDetails';
import CustomerDetailsView from '../../../Screens/RetailScreens/RetailCustomer/CustomerDetailsView';
import ProfileOutlineSvg from '../../Common/Svg/ProfileOutlineSvg';
import Topics from '../../../Screens/Topics/Topics';
import Messages from '../../../Screens/Messages/Messages';
import Notifications from '../../../Screens/Notifications/Notifications';
import Bookmarks from '../../../Screens/Bookmarks/Bookmarks';
import ScanFormScreen from '../../../Screens/RetailScreens/RetailScan/ScanFormScreen';
import SubmitReports from '../../../Screens/RetailScreens/RetailCustomer/SubmitReports';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const {setNavigationSource}: any = useNavigationSource();
  const {newNavigationSource, setNewNavigationSource}: any =
    useNewNavigationSource();
  const {loginNavigationSource}: any = useLoginNavigationSource();
  console.log('loginNavigationSource', loginNavigationSource);
  return (
    <>
      {loginNavigationSource === 'RETAIL' ? (
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,

            headerTitleStyle: {
              fontSize: 22,
              color: '#000',
            },
            tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
            tabBarInactiveTintColor: theme.colors[ColorLabels.MEDIUM_GREY],
            tabBarStyle: {
              backgroundColor: theme.colors[ColorLabels.WHITE],
              height: 60,
              borderColor: 'white',
            },
          }}>
          <Tab.Screen
            name="RetailHome"
            component={RetailHome}
            options={{
              tabBarLabel: 'Retail Home',
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
              tabBarInactiveTintColor: theme.colors[ColorLabels.MEDIUM_GREY],
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}>
                  <HomeSvg
                    color={
                      focused
                        ? theme.colors[ColorLabels.PRIMARY]
                        : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT]
                    }
                  />
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="RetailScan"
            component={RetailScanScreen}
            options={{
              tabBarLabel: 'Retail Scan',
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: theme.colors[ColorLabels.BOTTOM_TAB_DARK],
              tabBarInactiveTintColor: theme.colors[ColorLabels.MEDIUM_GREY],
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 12,
                  }}>
                  <Image
                    source={ScanIcon}
                    resizeMode="contain"
                    style={{width: 58, height: 58}}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="RetailCustomerHistory"
            component={RetailCustomerHistory}
            options={{
              tabBarLabel: 'Retail Customer History',
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
              tabBarInactiveTintColor: theme.colors[ColorLabels.MEDIUM_GREY],
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 10,
                  }}>
                  <ProfileSvg
                    color={
                      focused
                        ? theme.colors[ColorLabels.PRIMARY]
                        : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT]
                    }
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,

            headerTitleStyle: {
              fontSize: 22,
              color: '#000',
            },
            tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
            tabBarInactiveTintColor: theme.colors[ColorLabels.MEDIUM_GREY],
            tabBarStyle: {
              backgroundColor: theme.colors[ColorLabels.WHITE],
              height: 50,
              borderColor: 'white',
            },
          }}>
          <Tab.Screen
            name="Dashboard"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
              tabBarInactiveTintColor: theme.colors[ColorLabels.MEDIUM_GREY],
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 4,
                  }}>
                  <HomeSvg
                    color={
                      focused
                        ? theme.colors[ColorLabels.PRIMARY]
                        : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT]
                    }
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="NearBy"
            component={NearBy}
            listeners={{
              tabPress: e => {
                if (newNavigationSource === 'MAP') {
                  setNewNavigationSource('');
                } else {
                  setNewNavigationSource('MAP');
                }
              },
            }}
            options={{
              tabBarLabel: 'NearBy',
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
              tabBarInactiveTintColor: theme.colors[ColorLabels.MEDIUM_GREY],
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 4,
                  }}>
                  <AppsSvg
                    color={
                      focused
                        ? theme.colors[ColorLabels.PRIMARY]
                        : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT]
                    }
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarLabel: 'Cart',
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: theme.colors[ColorLabels.BOTTOM_TAB_DARK],
              tabBarInactiveTintColor: theme.colors[ColorLabels.MEDIUM_GREY],
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 4,
                  }}>
                  <CartSvg
                    color={
                      focused
                        ? theme.colors[ColorLabels.PRIMARY]
                        : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT]
                    }
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
              tabBarInactiveTintColor: theme.colors[ColorLabels.MEDIUM_GREY],
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 4,
                  }}>
                  <ProfileSvg
                    color={
                      focused
                        ? theme.colors[ColorLabels.PRIMARY]
                        : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT]
                    }
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </>
  );
};

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={'Main'}
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Main" component={BottomTabNavigator} />
      <RootStack.Screen name={UserScreens.Home.routeName} component={Home} />
      <RootStack.Screen
        name={UserScreens.HomeSecond.routeName}
        component={HomeSecond}
      />
      <RootStack.Screen
        name={UserScreens.ProductDetail.routeName}
        component={ProductDetail}
      />
      <RootStack.Screen
        name={UserScreens.ShotsBottles.routeName}
        component={ShotsAndBottles}
      />
      <RootStack.Screen
        name={UserScreens.OrderScreen.routeName}
        component={OrderSuccessful}
      />
      <RootStack.Screen
        name={UserScreens.TransactionComplete.routeName}
        component={TransactionComplete}
      />
      <RootStack.Screen
        name={UserScreens.virtualPurchased.routeName}
        component={VirtualPurchased}
      />
      <RootStack.Screen
        name={UserScreens.virtualShotsTracker.routeName}
        component={VirtualShotsTracker}
      />
      <RootStack.Screen
        name={UserScreens.billDetails.routeName}
        component={BillDetails}
      />
      <RootStack.Screen
        name={UserScreens.suggestionView.routeName}
        component={SuggestionView}
      />
      <RootStack.Screen
        name={UserScreens.placeShotsOrder.routeName}
        component={PlaceShotsOrder}
      />
      <RootStack.Screen
        name={UserScreens.retailOrderScreen.routeName}
        component={RetailOrderScreen}
      />
      <RootStack.Screen
        name={UserScreens.customerDetails.routeName}
        component={CustomerDetails}
      />
      <RootStack.Screen
        name={UserScreens.customerDetailsView.routeName}
        component={CustomerDetailsView}
      />
      <RootStack.Screen
        name={UserScreens.topics.routeName}
        component={Topics}
      />
      <RootStack.Screen
        name={UserScreens.messages.routeName}
        component={Messages}
      />
      <RootStack.Screen
        name={UserScreens.notifications.routeName}
        component={Notifications}
      />
      <RootStack.Screen
        name={UserScreens.bookmarks.routeName}
        component={Bookmarks}
      />
      <RootStack.Screen
        name={UserScreens.scanForm.routeName}
        component={ScanFormScreen}
      />
      <RootStack.Screen
        name={UserScreens.submitReports.routeName}
        component={SubmitReports}
      />
    </RootStack.Navigator>
  );
};

const LeftDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();

const LeftDrawerNavigator = () => {
  const renderLeftDrawerContent = useCallback(
    props => <LeftMenuDrawerContent {...props} />,
    [],
  );

  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      drawerContent={renderLeftDrawerContent}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
        },
        drawerPosition: 'left',
        headerShown: false,
        drawerActiveTintColor: '#EDEDED',
      }}>
      <LeftDrawer.Screen name="Home" component={RootNavigator} />
      <LeftDrawer.Screen name="Topics" component={Topics} />
      <LeftDrawer.Screen name="Messages" component={Messages} />
      <LeftDrawer.Screen name="Notifications" component={Notifications} />
      <LeftDrawer.Screen name="Bookmarks" component={Bookmarks} />
      <LeftDrawer.Screen name="Profile" component={Profile} />
    </LeftDrawer.Navigator>
  );
};

const AppRoutes = () => {
  return <LeftDrawerNavigator />;
};
export default AppRoutes;
