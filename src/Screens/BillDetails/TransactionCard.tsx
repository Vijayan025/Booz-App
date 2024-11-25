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

const TransactionCard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
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
        <Text style={styles.pricetxt}>
          $115.55 <Text style={styles.priceSubTxt}>SGD</Text>
        </Text>
      </View>
      <Image source={WhiteWhiskyIcon} style={styles.pic} resizeMode="contain" />
    </Pressable>
  );
};

export default TransactionCard;

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
  width: {width: '70%'},
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
  pic: {width: 59, height: 142, marginBottom: 11},
});
