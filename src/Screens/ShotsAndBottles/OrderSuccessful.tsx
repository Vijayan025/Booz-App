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
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {ColorLabels, theme} from '../../common/theme';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import CheckIcon from '../../../assets/images/Checkmark.png';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import qrWhiteIcon from '../../../assets/images/qrBig.png';
import {UserScreens} from '../../common/routes/user/user.screens';

const OrderSuccessful = () => {
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
      <View
        style={[
          BaseStyle.flexContainer,
          BaseStyle.alignCenter,
          BaseStyle.justifyEvenly,
        ]}>
        <Image
          source={CheckIcon}
          resizeMode="contain"
          style={styles.checkImg}
        />
        <Text style={styles.mainTxt}>ORDERED SUCCESSFULLY</Text>
        <Image source={qrWhiteIcon} resizeMode="contain" style={styles.qrImg} />
        <View style={[BaseStyle.alignCenter]}>
          <Text style={styles.subTxt}>$15.55 SGD</Text>
          <Text style={styles.subTxt1}>White Whiskey - 1 Shot Ordered</Text>
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
                navigation.navigate(UserScreens.ShotsBottles.routeName)
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
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccessful;

const styles = StyleSheet.create({
  mainTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.xlg,
    fontFamily: FontFamily.SF_MEDIUM,
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
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
  },
  checkImg: {width: 77, height: 77},
  qrImg: {width: 247, height: 247},
  btn: {borderRadius: 50, width: '46%'},
  btnWidth: {width: '100%'},
});
