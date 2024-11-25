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
import {useNavigation, useRoute} from '@react-navigation/native';
import QrIcon from '../../../assets/images/qrIcon.png';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {UserScreens} from '../../common/routes/user/user.screens';
import VirtualPurchaseCard from './VirtualPurchaseCard';
import {useNewNavigationSource} from '../../common/Common/NewNavigationSource';
import TabIcon from '../../../assets/images/tabBarIcon.png';

const VirtualPurchased = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const type = route?.params?.type;
  console.log('type', type);
  const {setNewNavigationSource}: any = useNewNavigationSource();
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
        <Text style={styles.txt}>Virtual Purchased Bottles</Text>
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
          <View style={[Paddings.paddingHorizontalMedium, Margins.mtXl]}>
            {type === 'VIEW' ? (
              <Text style={styles.titleTxt}>
                TOTAL CONSUMED SHOTS : <Text style={styles.titleTxt1}>250</Text>
              </Text>
            ) : (
              <Text style={styles.titleTxt}>
                BALANCE AVAILABLE SHOTS :{' '}
                <Text style={styles.titleTxt1}>90</Text>
              </Text>
            )}
          </View>
          <VirtualPurchaseCard route={type} />
          <VirtualPurchaseCard route={type} />
          <VirtualPurchaseCard route={type} />
          <VirtualPurchaseCard route={type} />
          {type === 'VIEW' ? (
            <></>
          ) : (
            <View
              style={[
                Paddings.paddingHorizontalMedium,
                Margins.mtXl,
                Margins.mbXl,
              ]}>
              <Text style={styles.titleTxt}>
                TOTAL CONSUMED SHOTS : <Text style={styles.titleTxt1}>250</Text>
              </Text>
            </View>
          )}
          <View style={{marginBottom: 100}} />
        </ScrollView>
        <View style={[BaseStyle.flexContainer, BaseStyle.justifyEnd]}>
          {type === 'VIEW' ? (
            <View
              style={[
                Background.white,
                styles.totalCard,
                {
                  elevation: 20,
                },
                BaseStyle.alignCenter,
                BaseStyle.justifyCenter,
                Paddings.paddingHorizontalMedium,
              ]}>
              <Text style={styles.btmTxt}>
                BALANCE AVAILABLE SHOTS : <Text style={styles.btmTxt1}>47</Text>
              </Text>
            </View>
          ) : (
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
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.billDetails.routeName)
                }
                style={[
                  Background.primary,
                  {width: '46%', borderRadius: 50},
                  Paddings.paddingLg,
                  BaseStyle.alignCenter,
                ]}>
                <Text style={styles.btntxt}>BILL DETAILS</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('Main', {screen: 'NearBy'});
                  setNewNavigationSource('MAP');
                }}
                style={[
                  Background.primary,
                  {width: '46%', borderRadius: 50},
                  Paddings.paddingLg,
                  BaseStyle.alignCenter,
                ]}>
                <Text style={styles.btntxt}>SEARCH FOR BAR</Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VirtualPurchased;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: 16,
    fontFamily: FontFamily.SF_SEMIBOLD,
  },
  btmTxt: {
    color: theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
    fontSize: 14,
    fontFamily: FontFamily.SF_SEMIBOLD,
    letterSpacing: 1,
  },
  btmTxt1: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 20,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
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
    fontSize: 12,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
    lineHeight: 14,
  },
  titleTxt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: fontSizes.smd,
    fontFamily: FontFamily.SF_REGULAR,
    letterSpacing: 1,
    lineHeight: 19,
    textAlign: 'center',
  },
  titleTxt1: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: fontSizes.smd,
    fontFamily: FontFamily.SF_SEMIBOLD,
    letterSpacing: 1,
    lineHeight: 19,
    textAlign: 'center',
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
