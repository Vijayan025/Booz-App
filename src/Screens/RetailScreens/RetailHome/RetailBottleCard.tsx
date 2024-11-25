import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ShotIcon from '../../../../assets/images/productJDIcon.png';
import {UserScreens} from '../../../common/routes/user/user.screens';
import {Background} from '../../../styles/Background';
import {BaseStyle} from '../../../styles/Base';
import {Margins} from '../../../styles/Margins';
import {Paddings} from '../../../styles/Padding';
import {ColorLabels, theme} from '../../../common/theme';
import {fontSizes} from '../../../styles/fonts';
import {FontFamily} from '../../../types/Fonts';

const RetailBottleCard = () => {
  return (
    <Pressable
      style={[
        Background.white,
        Margins.mtLg,
        Margins.mbMd,
        Paddings.paddingMd,
        styles.main,
      ]}>
      <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
        <View style={[styles.width]}>
          <Text style={styles.mainTxt}>White Whiskey - 1 Shot Ordered</Text>
          <Text style={[styles.subtxt, Margins.mtXMd]}>
            Order no: WHISK0001
          </Text>
          <Text style={[styles.subtxt, Margins.mtSm]}>
            Customer No : +60 17-240 3480
          </Text>
        </View>
        <Image source={ShotIcon} style={styles.qrPic} resizeMode="contain" />
      </View>
    </Pressable>
  );
};

export default RetailBottleCard;

const styles = StyleSheet.create({
  mainTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
  },
  subtxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.xxsm,
    fontFamily: FontFamily.SF_MEDIUM,
    lineHeight: 13,
    letterSpacing: 1,
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
  qrPic: {width: 34, height: 80},
});
