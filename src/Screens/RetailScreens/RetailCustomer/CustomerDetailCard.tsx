import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import userIcon from '../../../../assets/images/user.png';
import {UserScreens} from '../../../common/routes/user/user.screens';
import {Background} from '../../../styles/Background';
import {BaseStyle} from '../../../styles/Base';
import {Margins} from '../../../styles/Margins';
import {Paddings} from '../../../styles/Padding';
import {ColorLabels, theme} from '../../../common/theme';
import {fontSizes} from '../../../styles/fonts';
import {FontFamily} from '../../../types/Fonts';

const CustomerDetailCard = () => {
  const navigation = useNavigation();
  return (
    <View style={[Paddings.paddingHorizontalMedium]}>
      <Pressable
        onPress={() =>
          navigation.navigate(UserScreens.customerDetailsView.routeName)
        }
        style={[
          Background.white,
          Margins.mtLg,
          Margins.mbMd,
          Paddings.paddingMd,
          styles.main,
        ]}>
        <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
          <View style={[styles.width]}>
            <Text style={[styles.subtxt, Margins.mtSm]}>
              Customer No : +60 17-240 3480
            </Text>
            <Text style={[styles.subtxt, Margins.mtSm]}>
              Recent Order No: WHISK0001
            </Text>
            <Text style={[styles.mainTxt, Margins.mtXMd]}>
              View Complete Order History
            </Text>
          </View>
          <Image
            source={userIcon}
            style={styles.userPic}
            resizeMode="contain"
          />
        </View>
      </Pressable>
    </View>
  );
};

export default CustomerDetailCard;

const styles = StyleSheet.create({
  mainTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.xxsm,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
    textDecorationLine: 'underline',
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
  userPic: {width: 21, height: 19},
});
