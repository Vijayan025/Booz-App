import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {ColorLabels, theme} from '../../common/theme';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import {FontFamily} from '../../types/Fonts';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import QrIcon from '../../../assets/images/qrIcon.png';
import JdIcon from '../../../assets/images/productJDIcon.png';
import {fontSizes} from '../../styles/fonts';
import {Position} from '../../styles/Position';
import {BorderStyle} from '../../styles/Border';
import {UserScreens} from '../../common/routes/user/user.screens';

const ProductDetail = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.primary]}>
      <StatusBar
        backgroundColor={theme.colors[ColorLabels.PRIMARY]}
        barStyle="light-content"
      />
      <View
        style={[
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
          Paddings.paddingHorizontalMedium,
          Margins.mtMd,
        ]}>
        <AntIcon
          name="arrowleft"
          color={theme.colors[ColorLabels.WHITE]}
          size={23}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.txt}>Product Detail</Text>
        <Pressable
          onPress={() =>
            navigation.navigate(UserScreens.ShotsBottles.routeName)
          }>
          <Image source={QrIcon} resizeMode="contain" style={styles.qrImg} />
        </Pressable>
      </View>
      <View style={[styles.height, Position.relative]}>
        <View style={[Position.absolute, Margins.mtSLg, styles.title]}>
          <Text style={styles.nameTxt}>Jack Daniels Whiskey - 2004</Text>
        </View>
        <View style={[BaseStyle.flexRow, Position.absolute, styles.subMain]}>
          <View style={[styles.priceView]}>
            <Text style={styles.pricetxt}>
              $250.25 <Text style={styles.priceSubTxt}>SGD</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={[Background.white, BaseStyle.flexContainer, styles.whiteBg]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.justifySpaceBetween,
            BaseStyle.alignEnd,
            styles.whiteBgSub,
          ]}>
          <Image
            source={JdIcon}
            resizeMode="contain"
            style={[Margins.mlLg, styles.img]}
          />
          <View style={[styles.whiteBgWidth]}>
            <View
              style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mbMd]}>
              <View style={[Margins.mrXl]}>
                <Text style={styles.mainTxt}>ALC.</Text>
                <Text style={styles.subTxt}>14.5%</Text>
              </View>
              <View>
                <Text style={styles.mainTxt}>VOL.</Text>
                <Text style={styles.subTxt}>0.65 ml</Text>
              </View>
            </View>
            <View style={[Margins.mbMd]}>
              <Text style={styles.mainTxt}>GRAPE</Text>
              <Text style={styles.subTxt}>Fresh Grapes, 2016</Text>
            </View>
            <View>
              <Text style={styles.mainTxt}>REGION</Text>
              <Text style={styles.subTxt}>California, America</Text>
            </View>
          </View>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={[Paddings.paddingHorizontalMedium, Margins.mtLg]}>
            <Text style={styles.descTitle}>DESCRIPTION</Text>
            <Text style={[styles.descTxt, Margins.mtSm]}>
              Mauris finibus eleifend elit. Ut molestie, lacus eta aliquet
              rhoncus, nulla augue pretium sapien, enam hendrerit quam nisi a
              est.
            </Text>
          </View>
          <View
            style={[
              Paddings.paddingHorizontalMedium,
              Margins.mtMLg,
              Margins.mbLg,
            ]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Main', {screen: 'Cart'})}
              style={[
                BaseStyle.justifyCenter,
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
                Background.primary,
                styles.btn,
              ]}>
              <Text style={styles.regText}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: 16,
    fontFamily: FontFamily.SF_SEMIBOLD,
  },
  subMain: {bottom: 70, right: 20},
  nameTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.xlg,
    fontFamily: FontFamily.SF_MEDIUM,
    lineHeight: 40,
    letterSpacing: 1,
    textAlign: 'right',
  },
  priceView: {
    backgroundColor: theme.colors[ColorLabels.PRODUCT_GREY],
    borderRadius: 50,
    paddingHorizontal: 8,
  },
  title: {right: 20, width: '50%'},
  qrImg: {width: 25, height: 25},
  pricetxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.xlg,
    fontFamily: FontFamily.SF_MEDIUM,
    marginLeft: 5,
  },
  priceSubTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.xsm,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  descTxt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: fontSizes.sm,
    fontFamily: FontFamily.SF_REGULAR,
    lineHeight: 24,
    letterSpacing: 1,
  },
  regText: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.smm,
    fontFamily: FontFamily.SF_MEDIUM,
    textAlign: 'center',
  },
  whiteBg: {borderTopLeftRadius: 40, borderTopRightRadius: 40},
  whiteBgSub: {marginTop: -270},
  img: {width: 161, height: 481},
  whiteBgWidth: {width: '45%'},
  mainTxt: {
    color: theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  subTxt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: fontSizes.smd,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  descTitle: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: fontSizes.smd,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  btn: {borderRadius: 50, elevation: 2},
  height: {height: '35%'},
});
