import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import jdIcon from '../../../assets/images/jdIcon.png';
import {fontSizes} from '../../styles/fonts';
import {Layout} from '../../styles/Layout';
import {Background} from '../../styles/Background';
import {Margins} from '../../styles/Margins';
import {BaseStyle} from '../../styles/Base';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';

const HomeCard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(UserScreens.HomeSecond.routeName)}
      style={[
        Background.primary,
        Margins.mtXXl,
        BaseStyle.flexRow,
        BaseStyle.alignCenter,
        BaseStyle.justifySpaceBetween,
        Margins.mlLg,
        styles.main,
      ]}>
      <Image source={jdIcon} style={styles.img} />
      <View
        style={[
          Layout.flex1,
          BaseStyle.flexColumn,
          BaseStyle.justifySpaceBetween,
          {height: 175},
        ]}>
        <View>
          <Text style={styles.mainTxt}>Red</Text>
          <Text style={styles.subtxt}>
            Curabitur id neque enam lobortis, vestibulum.
          </Text>
        </View>
        <Text style={styles.pricetxt}>
          $35.90 <Text style={styles.priceSubTxt}>SGD</Text>
        </Text>
      </View>
    </Pressable>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  main: {width: 310, height: 200, borderRadius: 10},
  img: {width: 110, height: 237, marginBottom: 45},
  mainTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.smd,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  subtxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_REGULAR,
    lineHeight: 26,
    letterSpacing: 0.78,
  },
  pricetxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.xlg,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  priceSubTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.xsm,
    fontFamily: FontFamily.SF_MEDIUM,
  },
});
