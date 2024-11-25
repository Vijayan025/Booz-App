import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import QrIcon from '../../../../assets/images/QrScanIcon.png';
import {BaseStyle} from '../../../styles/Base';
import {Background} from '../../../styles/Background';
import {ColorLabels, theme} from '../../../common/theme';
import {Paddings} from '../../../styles/Padding';
import {Margins} from '../../../styles/Margins';
import {UserScreens} from '../../../common/routes/user/user.screens';
import {fontSizes} from '../../../styles/fonts';
import {FontFamily} from '../../../types/Fonts';

const RetailScanScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.primary]}>
      <StatusBar
        backgroundColor={theme.colors[ColorLabels.PRIMARY]}
        barStyle="light-content"
      />
      <View style={[Paddings.paddingHorizontalMedium, Margins.mtMd]}>
        <AntIcon
          name="arrowleft"
          color={theme.colors[ColorLabels.WHITE]}
          size={23}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate(UserScreens.scanForm.routeName)}
        style={[
          BaseStyle.flexContainer,
          BaseStyle.alignCenter,
          BaseStyle.justifyEvenly,
        ]}>
        <View style={[BaseStyle.alignCenter]}>
          <Text style={styles.mainTxt}>SCAN QR CODE</Text>
          <Image source={QrIcon} resizeMode="contain" style={styles.checkImg} />
        </View>
        <View style={[Paddings.paddingHorizontalMedium]}>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BaseStyle.justifySpaceBetween,
              styles.btnWidth,
            ]}>
            <Pressable
              onPress={() =>
                navigation.navigate('Main', {screen: 'RetailHome'})
              }
              style={[
                Background.white,
                BaseStyle.alignCenter,
                Paddings.paddingMd,
                styles.btn,
              ]}>
              <Text style={styles.btnTxt}>SHOTS ORDERED</Text>
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('Main', {screen: 'RetailHome'})
              }
              style={[
                Background.white,
                styles.btn,
                BaseStyle.alignCenter,
                Paddings.paddingMd,
              ]}>
              <Text style={styles.btnTxt}>BOTTLES ORDERED</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default RetailScanScreen;

const styles = StyleSheet.create({
  mainTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.xlg,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
  },
  subTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: 36,
    fontFamily: FontFamily.SF_SEMIBOLD,
  },
  subTxt1: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: 16,
    fontFamily: FontFamily.SF_MEDIUM,
    lineHeight: 19,
    letterSpacing: 1,
  },
  btnTxt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 12,
    fontFamily: FontFamily.SF_SEMIBOLD,
    letterSpacing: 1,
  },
  checkImg: {width: 348, height: 348, marginTop: 50},
  btn: {borderRadius: 50, width: '46%'},
  btnWidth: {width: '100%'},
});
