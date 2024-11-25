import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Background} from '../../styles/Background';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import WhiteWhiskyIcon from '../../../assets/images/jdIcon.png';
import {BaseStyle} from '../../styles/Base';
import {Margins} from '../../styles/Margins';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';
import {Paddings} from '../../styles/Padding';

const BillCard = () => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        Background.white,
        BaseStyle.flexRow,
        BaseStyle.alignCenter,
        Margins.mtLg,
        Margins.mbMd,
        styles.main,
        BaseStyle.justifySpaceBetween,
      ]}>
      <View style={[styles.width]}>
        <Text style={styles.mainTxt}>White Whiskey - 2002</Text>
        <Text style={styles.pricetxt}>$115.55 SGD</Text>
        <Text style={[styles.pricetxt, Margins.mtSm]}>Reference No : </Text>
      </View>
      <Pressable
        style={[
          Background.primary,
          {width: '30%', borderRadius: 50},
          Paddings.paddingMd,
          BaseStyle.alignCenter,
        ]}>
        <Text style={styles.btntxt}>DOWNLOAD</Text>
      </Pressable>
    </View>
  );
};

export default BillCard;

const styles = StyleSheet.create({
  main: {
    height: 81,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    paddingHorizontal: 15,
  },
  width: {width: '60%'},
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
    fontSize: fontSizes.xxsm,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
    lineHeight: 13,
  },
  btntxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: 10,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
    lineHeight: 11,
  },
});
