import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BaseStyle} from '../../../styles/Base';
import {Background} from '../../../styles/Background';
import {ColorLabels, theme} from '../../../common/theme';
import {Paddings} from '../../../styles/Padding';
import {Margins} from '../../../styles/Margins';
import {useNavigation} from '@react-navigation/native';
import FeaIcon from 'react-native-vector-icons/Feather';
import CustomerIcon from '../../../../assets/images/customerIcon.png';
import {FontFamily} from '../../../types/Fonts';
import {UserScreens} from '../../../common/routes/user/user.screens';
import userIcon from '../../../../assets/images/user.png';
import {fontSizes} from '../../../styles/fonts';
import ShotImg from '../../../../assets/images/BigShots.png';
import {Position} from '../../../styles/Position';
import RedLabelIcon from '../../../../assets/images/redLabelIcon.png';

const CustomerDetailsView = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.loginBackground]}>
      <StatusBar
        backgroundColor={theme.colors[ColorLabels.LOGIN_BACKGROUND]}
        barStyle="dark-content"
      />
      <View
        style={[
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
          Paddings.paddingHorizontalMedium,
          Margins.mtXMd,
        ]}>
        <FeaIcon
          name="menu"
          color={theme.colors[ColorLabels.BLACK]}
          size={23}
          onPress={() => navigation.getParent('LeftDrawer').openDrawer()}
        />
        <Text style={styles.txt}>CUSTOMER DETAILS</Text>
        <Image
          source={CustomerIcon}
          resizeMode="contain"
          style={{width: 20, height: 20}}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={[Margins.mtMLg]}>
        <View style={[Paddings.paddingHorizontalMedium, BaseStyle.alignCenter]}>
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.submitReports.routeName)
            }
            style={[
              Background.white,
              Paddings.paddingMd,
              styles.main,
              Margins.mtMd,
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
                  Complete Order History
                </Text>
              </View>
              <Image
                source={userIcon}
                style={styles.userPic}
                resizeMode="contain"
              />
            </View>
          </Pressable>
          <View style={styles.line} />
          <View style={[Position.relative, {width: '100%'}]}>
            <Text style={[styles.datetxt, Position.absolute]}>
              Date: 15 june 2024
            </Text>
            <Pressable
              onPress={() =>
                navigation.navigate(UserScreens.submitReports.routeName)
              }
              style={[Background.white, Paddings.paddingMd, styles.main]}>
              <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                <View style={[styles.width]}>
                  <Text style={[styles.subMaintxt, Margins.mtSm]}>
                    White Whiskey - 1 Shot Ordered
                  </Text>
                  <Text style={[styles.subtxt, Margins.mtSm, Margins.mbMd]}>
                    Order no: WHISK0001
                  </Text>
                </View>
                <Image source={ShotImg} resizeMode="contain" />
              </View>
            </Pressable>
          </View>
          <View style={styles.line} />
          <View style={[Position.relative, {width: '100%'}]}>
            <Text style={[styles.datetxt, Position.absolute]}>
              Date: 30 june 2024
            </Text>
            <Pressable
              onPress={() =>
                navigation.navigate(UserScreens.submitReports.routeName)
              }
              style={[Background.white, Paddings.paddingMd, styles.main]}>
              <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                <View style={[styles.width]}>
                  <Text style={[styles.subMaintxt, Margins.mtSm]}>
                    Red label Whiskey- 1 Shot Ordereded
                  </Text>
                  <Text style={[styles.subtxt, Margins.mtSm, Margins.mbMd]}>
                    Order no: WHISK0001
                  </Text>
                </View>
                <Image source={RedLabelIcon} resizeMode="contain" />
              </View>
            </Pressable>
          </View>
          <View style={styles.line} />
          <View style={[Position.relative, {width: '100%'}]}>
            <Text style={[styles.datetxt, Position.absolute]}>
              Date: 15 Nov 2024
            </Text>
            <Pressable
              onPress={() =>
                navigation.navigate(UserScreens.submitReports.routeName)
              }
              style={[Background.white, Paddings.paddingMd, styles.main]}>
              <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                <View style={[styles.width]}>
                  <Text style={[styles.subMaintxt, Margins.mtSm]}>
                    Wh Whiskey - 1 Shot Ordered
                  </Text>
                  <Text style={[styles.subtxt, Margins.mtSm, Margins.mbMd]}>
                    Order no: WHISK0001
                  </Text>
                </View>
                <View style={[Position.relative]}>
                  <Image source={ShotImg} resizeMode="contain" />
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomerDetailsView;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 14,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
  },
  width: {width: '90%'},
  userPic: {width: 21, height: 19},
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
    width: '100%',
  },
  subMaintxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_MEDIUM,
    lineHeight: 16,
    letterSpacing: 1,
    marginBottom: 8,
  },
  datetxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.xxsm,
    fontFamily: FontFamily.SF_MEDIUM,
    lineHeight: 11,
    letterSpacing: 1,
    top: -20,
    left: 4,
  },
  line: {
    borderRightColor: theme.colors[ColorLabels.BLACK],
    borderRightWidth: 1,
    height: 64,
  },
});
