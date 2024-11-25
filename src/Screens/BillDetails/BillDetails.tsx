import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {ColorLabels, theme} from '../../common/theme';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import FeaIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {FontFamily} from '../../types/Fonts';
import TransactionCard from './TransactionCard';
import QrIcon from '../../../assets/images/qrBlackIcon.png';
import {UserScreens} from '../../common/routes/user/user.screens';
import BillCard from './BillCard';

const BillDetails = () => {
  const navigation = useNavigation();
  const [selectedSection, setSelectedSection] = useState('Transactions');
  const isSelected = (section: string) => selectedSection === section;
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.loginBackground]}>
      <StatusBar
        backgroundColor={theme.colors[ColorLabels.LOGIN_BACKGROUND]}
        barStyle="dark-content"
      />
      <View
        style={[
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
          Paddings.paddingHorizontalMedium,
          Margins.mtXMd,
        ]}>
        <FeaIcon
          name="menu"
          color={theme.colors[ColorLabels.BLACK]}
          size={23}
          onPress={() => navigation.getParent('LeftDrawer').openDrawer()}
        />
        <Pressable
          onPress={() => setSelectedSection('Transactions')}
          style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
          <Text
            style={[
              {
                color: isSelected('Transactions')
                  ? theme.colors[ColorLabels.BOTTOM_TAB_DARK]
                  : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
                fontFamily: FontFamily.SF_MEDIUM,
                fontSize: 14,
              },
              Margins.mlXSm,
              Margins.mtXsm,
            ]}>
            Transactions
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelectedSection('Bills')}
          style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mrLg]}>
          <Text
            style={[
              {
                color: isSelected('Bills')
                  ? theme.colors[ColorLabels.BOTTOM_TAB_DARK]
                  : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
                fontFamily: FontFamily.SF_MEDIUM,
                fontSize: 14,
              },
              Margins.mtSm,
            ]}>
            Bills
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            // setSelectedSection('Wallet');
            navigation.navigate(UserScreens.virtualPurchased.routeName);
          }}
          style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mrLg]}>
          <Text
            style={[
              {
                color: isSelected('Wallet')
                  ? theme.colors[ColorLabels.BOTTOM_TAB_DARK]
                  : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
                fontFamily: FontFamily.SF_MEDIUM,
                fontSize: 14,
              },
              Margins.mtSm,
            ]}>
            Wallet
          </Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate(UserScreens.ShotsBottles.routeName)
          }>
          <Image
            source={QrIcon}
            resizeMode="contain"
            style={{width: 21, height: 21}}
          />
        </Pressable>
      </View>
      {selectedSection === 'Transactions' && (
        <ScrollView
          style={[Paddings.paddingHorizontalMedium]}
          showsVerticalScrollIndicator={false}>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </ScrollView>
      )}
      {selectedSection === 'Bills' && (
        <ScrollView
          style={[Paddings.paddingHorizontalMedium]}
          showsVerticalScrollIndicator={false}>
          <BillCard />
          <BillCard />
          <BillCard />
          <BillCard />
          <BillCard />
          <BillCard />
          <BillCard />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default BillDetails;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 16,
    fontFamily: FontFamily.SF_SEMIBOLD,
  },
  shotImg: {width: 22, height: 25},
  bottleImg: {width: 25, height: 25},
});
