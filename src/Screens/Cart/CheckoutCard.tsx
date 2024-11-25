import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ColorLabels, theme} from '../../common/theme';
import BottleIcon from '../../../assets/images/jdIcon.png';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';

const CheckoutCard = () => {
  return (
    <View style={[Paddings.paddingHorizontalMedium, Margins.mtXl]}>
      <View
        style={[
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
        ]}>
        <View
          style={[
            {
              backgroundColor: theme.colors[ColorLabels.SECONDARY],
              width: 86,
              height: 86,
              borderRadius: 10,
            },
            BaseStyle.alignCenter,
          ]}>
          <Image
            source={BottleIcon}
            style={{width: 38, height: 104, marginTop: -23}}
          />
        </View>
        <View>
          <Text style={styles.mainTxt}>Red Whiskey</Text>
          <Text style={styles.subtxt}>Porttitor rutrum vel sit.</Text>
        </View>
        <Text style={styles.pricetxt}>
          $210.00 <Text style={styles.priceSubTxt}>SGD</Text>
        </Text>
      </View>
      
    </View>
  );
};

export default CheckoutCard;

const styles = StyleSheet.create({
  mainTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  subtxt: {
    color: theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
    fontSize: fontSizes.sm,
    fontFamily: FontFamily.SF_REGULAR,
    lineHeight: 24,
    letterSpacing: 1,
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
