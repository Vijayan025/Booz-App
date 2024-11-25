import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Background} from '../../styles/Background';
import {Margins} from '../../styles/Margins';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Paddings} from '../../styles/Padding';
import CardBoxIcon from '../../../assets/images/cardBox.png';
import {BaseStyle} from '../../styles/Base';

const PaymentCard = () => {
  return (
    <View
      style={[
        Background.primary,
        {width: 259, height: 153, borderRadius: 10},
        Margins.mtXMd,
        Paddings.paddingMlg,
        BaseStyle.justifySpaceBetween,
        Margins.mlLg,
      ]}>
      <View
        style={[
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
        ]}>
        <Text style={styles.maintxt}>Credit Card</Text>
        <Image
          source={CardBoxIcon}
          resizeMode="contain"
          style={{width: 60, height: 32}}
        />
      </View>
      <View
        style={[
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
        ]}>
        <Text style={styles.subTxt}>******2703</Text>
        <Text style={styles.subTxt}>01/25</Text>
      </View>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  maintxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_MEDIUM,
    lineHeight: 16,
    letterSpacing: 1,
  },
  subTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_REGULAR,
    lineHeight: 16,
    letterSpacing: 1,
  },
});
