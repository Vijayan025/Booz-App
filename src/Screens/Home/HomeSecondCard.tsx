import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ColorLabels, theme} from '../../common/theme';
import WhiskyIcon from '../../../assets/images/whiskeyIcon.png';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {BaseStyle} from '../../styles/Base';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {Margins} from '../../styles/Margins';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';

const HomeSecondCard = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.main, Margins.mlLg]}>
      <View
        style={[
          BaseStyle.alignCenter,
          BaseStyle.justifyCenter,
          styles.submain,
        ]}>
        <Image source={WhiskyIcon} resizeMode="contain" />
      </View>
      <Pressable
        onPress={() => navigation.navigate(UserScreens.ProductDetail.routeName)}
        style={[styles.mainCard, BaseStyle.alignCenter, BaseStyle.justifyEnd]}>
        <View
          style={[
            BaseStyle.flexColumn,
            BaseStyle.justifyEvenly,
            BaseStyle.alignCenter,
            styles.height,
          ]}>
          <Text style={styles.mainTxt}>Homemade Red Whiskey</Text>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <FontIcon
              name="star"
              color={theme.colors[ColorLabels.STAR_SELECT_COLOR]}
              size={15}
              style={styles.star}
            />
            <FontIcon
              name="star"
              color={theme.colors[ColorLabels.STAR_SELECT_COLOR]}
              size={15}
              style={styles.star}
            />
            <FontIcon
              name="star"
              color={theme.colors[ColorLabels.STAR_SELECT_COLOR]}
              size={15}
              style={styles.star}
            />
            <FontIcon
              name="star"
              color={theme.colors[ColorLabels.STAR_SELECT_COLOR]}
              size={15}
              style={styles.star}
            />
            <FontIcon
              name="star"
              color={theme.colors[ColorLabels.START_UNSELECT_COLOR]}
              size={15}
              style={styles.star}
            />
          </View>
          <Text style={styles.pricetxt}>
            $115.55 <Text style={styles.priceSubTxt}>SGD</Text>
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default HomeSecondCard;

const styles = StyleSheet.create({
  main: {
    height: 391,
    marginTop: 30,
    width: 236,
  },
  submain: {marginBottom: -180, zIndex: 1},
  height: {height: '40%'},
  mainCard: {
    backgroundColor: theme.colors[ColorLabels.SECONDARY],
    width: 236,
    height: 300,
    borderRadius: 10,
  },
  mainTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_MEDIUM,
    textAlign: 'center',
  },
  star: {width: 20},
  pricetxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.xlg,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  priceSubTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.xsm,
    fontFamily: FontFamily.SF_MEDIUM,
  },
});
