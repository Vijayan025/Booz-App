import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Background} from '../../styles/Background';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {BaseStyle} from '../../styles/Base';
import {Margins} from '../../styles/Margins';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';
import QrIcon from '../../../assets/images/qrBlackIcon.png';
import {Paddings} from '../../styles/Padding';

const ShotCard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(UserScreens.OrderScreen.routeName)}
      style={[
        Background.white,
        BaseStyle.flexRow,
        BaseStyle.alignCenter,
        Margins.mtLg,
        Margins.mbMd,
        Paddings.paddingMd,
        styles.main,
      ]}>
      <View style={[styles.width]}>
        <Text style={styles.mainTxt}>White Whiskey - 1 Shot Ordered</Text>
        <Text style={styles.pricetxt}>
          $15.55 <Text style={styles.priceSubTxt}>SGD</Text>
        </Text>
      </View>
      <Image source={QrIcon} style={styles.qrPic} resizeMode="contain" />
    </Pressable>
  );
};

export default ShotCard;

const styles = StyleSheet.create({
  mainTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  subtxt: {
    color: theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_REGULAR,
    lineHeight: 24,
    letterSpacing: 1,
  },
  star: {width: 20},
  pricetxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.lg,
    fontFamily: FontFamily.SF_MEDIUM,
    marginLeft: 5,
  },
  priceSubTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.xsm,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  main: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  width: {width: '90%'},
  qrPic: {width: 21, height: 21},
});
