import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BaseStyle} from '../../styles/Base';
import {ColorLabels, theme} from '../../common/theme';
import {Background} from '../../styles/Background';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import QrIcon from '../../../assets/images/qrIcon.png';
import {FontFamily} from '../../types/Fonts';
import CheckoutCard from './CheckoutCard';
import {fontSizes} from '../../styles/fonts';
import PaymentCard from './PaymentCard';
import {UserScreens} from '../../common/routes/user/user.screens';
import TabIcon from '../../../assets/images/tabBarIcon.png';

const Cart = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.primary]}>
      <StatusBar
        backgroundColor={theme.colors[ColorLabels.PRIMARY]}
        barStyle="light-content"
      />
      <View
        style={[
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
          Paddings.paddingHorizontalMedium,
          Margins.mtXMd,
        ]}>
        <AntIcon
          name="arrowleft"
          color={theme.colors[ColorLabels.WHITE]}
          size={23}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.txt}>Bottles Checkout</Text>
        <Pressable
          onPress={() =>
            navigation.navigate(UserScreens.ShotsBottles.routeName)
          }>
          <Image
            source={QrIcon}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
        </Pressable>
      </View>
      <View
        style={[
          BaseStyle.flexContainer,
          {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          Margins.mtLg,
          Background.loginBackground,
        ]}>
        <View style={[BaseStyle.alignCenter, Margins.mtXMd]}>
          <Image source={TabIcon} resizeMode="contain" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <View style={[Paddings.paddingHorizontalMedium, Margins.mtXl]}>
            <Text style={styles.titleTxt}>PAYMENT METHOD</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[Margins.mbLg]}>
            <PaymentCard />
            <PaymentCard />
            <PaymentCard />
            <View style={[Margins.mrLg]} />
          </ScrollView>
          <View style={{marginBottom: 100}} />
        </ScrollView>
        <View style={[BaseStyle.flexContainer, BaseStyle.justifyEnd]}>
          <View
            style={[
              Background.white,
              styles.totalCard,
              {
                elevation: 20,
              },
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BaseStyle.justifySpaceBetween,
              Paddings.paddingHorizontalMedium,
            ]}>
            <View>
              <Text style={styles.txt1}>SUBTOTAL</Text>
              <Text style={styles.pricetxt}>
                $4490.75 <Text style={styles.priceSubTxt}>SGD</Text>
              </Text>
            </View>
            <Pressable
              onPress={() =>
                navigation.navigate(UserScreens.TransactionComplete.routeName)
              }
              style={[
                Background.primary,
                {width: '60%', borderRadius: 50},
                Paddings.paddingMd,
                BaseStyle.alignCenter,
              ]}>
              <Text style={styles.btntxt}>CONFIRM</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: 16,
    fontFamily: FontFamily.SF_SEMIBOLD,
  },
  txt1: {
    color: theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
    fontSize: 14,
    fontFamily: FontFamily.SF_SEMIBOLD,
    lineHeight: 16,
    letterSpacing: 1,
    marginBottom: 3,
  },
  btntxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: 16,
    fontFamily: FontFamily.SF_SEMIBOLD,
  },
  titleTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.smd,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
    lineHeight: 19,
  },
  totalCard: {
    backgroundColor: theme.colors[ColorLabels.WHITE],
    height: 91,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -7},
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  pricetxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.lg,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  priceSubTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.xsm,
    fontFamily: FontFamily.SF_MEDIUM,
  },
});
