import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Background} from '../../styles/Background';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import WhiteWhiskyIcon from '../../../assets/images/whiteWhiskyIcon.png';
import {BaseStyle} from '../../styles/Base';
import {Margins} from '../../styles/Margins';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';

const SuggestionCard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(UserScreens.ProductDetail.routeName)}
      style={[
        Background.white,
        BaseStyle.flexRow,
        BaseStyle.alignCenter,
        Margins.mtLg,
        Margins.mbMd,
        styles.suggestCard,
      ]}>
      <View style={[Margins.mlLg, styles.width]}>
        <Text style={styles.mainTxt}>White Whiskey - 2002</Text>
        <Text style={styles.subtxt}>
          Curabitur id neque lobortis, enam vestibulum augue quis.
        </Text>
        <View style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtMd]}>
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
      </View>
      <Image source={WhiteWhiskyIcon} style={styles.pic} resizeMode="contain" />
    </Pressable>
  );
};

export default SuggestionCard;

const styles = StyleSheet.create({
  mainTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  suggestCard: {
    height: 133,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  width: {width: '60%'},
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
    fontSize: fontSizes.xlg,
    fontFamily: FontFamily.SF_MEDIUM,
    marginLeft: 5,
  },
  priceSubTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.xsm,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  pic: {width: 146, height: 146, marginBottom: 11},
});
