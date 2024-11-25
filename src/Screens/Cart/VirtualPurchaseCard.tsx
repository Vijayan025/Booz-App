import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ColorLabels, theme} from '../../common/theme';
import BottleIcon from '../../../assets/images/jdIcon.png';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Background} from '../../styles/Background';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';

const VirtualPurchaseCard = ({route}: any) => {
  const navigation = useNavigation();
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
        <View style={styles.width}>
          <Text style={styles.mainTxt}>Red Whiskey</Text>
          <Text style={styles.subtxt}>Porttitor rutrum vel sit.</Text>
        </View>
        <Pressable
          onPress={() => {
            if (route === 'VIEW') {
              navigation.navigate(UserScreens.placeShotsOrder.routeName);
            } else {
              navigation.navigate(UserScreens.virtualShotsTracker.routeName);
            }
          }}
          style={[
            Background.primary,
            {width: '30%', borderRadius: 50},
            Paddings.paddingMd,
            BaseStyle.alignCenter,
          ]}>
          <Text style={styles.btntxt}>VIEW SHOTS</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default VirtualPurchaseCard;

const styles = StyleSheet.create({
  mainTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  width: {width: '45%', marginLeft: 10},
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
  btntxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: 12,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
    lineHeight: 14,
  },
});
