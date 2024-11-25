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
import {BaseStyle} from '../../styles/Base';
import {ColorLabels, theme} from '../../common/theme';
import {Background} from '../../styles/Background';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import {useNavigation} from '@react-navigation/native';
import QrIcon from '../../../assets/images/qrIcon.png';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {UserScreens} from '../../common/routes/user/user.screens';
import FeaIcon from 'react-native-vector-icons/Feather';
import Img1 from '../../../assets/images/trackerImg1.png';
import Img2 from '../../../assets/images/trackerImg2.png';
import Img3 from '../../../assets/images/trackerImg.png';
import {useNewNavigationSource} from '../../common/Common/NewNavigationSource';

const VirtualShotsTracker = () => {
  const navigation = useNavigation();
  const {setNewNavigationSource}: any = useNewNavigationSource();

  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.black]}>
      <StatusBar
        backgroundColor={theme.colors[ColorLabels.BLACK]}
        barStyle="light-content"
      />
      <View
        style={[
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
          Paddings.paddingHorizontalMedium,
          Margins.mtSm,
          {height: '3%'},
        ]}>
        <FeaIcon
          name="menu"
          color={theme.colors[ColorLabels.WHITE]}
          size={23}
          onPress={() => navigation.getParent('LeftDrawer').openDrawer()}
        />
        <Text style={styles.txt}>Virtual Shots Tracker</Text>
        <Pressable
          onPress={() =>
            navigation.navigate(UserScreens.ShotsBottles.routeName)
          }>
          <Image
            source={QrIcon}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
        </Pressable>
      </View>
      <View
        style={[
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
          Paddings.paddingHorizontalMedium,
          {height: '10%'},
        ]}>
        <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
          <Image source={Img1} resizeMode="contain" style={[styles.img1]} />
          <Text style={styles.titleTxt}>
            AVAILABLE : <Text style={styles.titleTxt1}>9</Text>
          </Text>
        </View>
        <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
          <Image source={Img2} resizeMode="contain" style={[styles.img2]} />
          <Text style={styles.titleTxt}>
            CONSUMED : <Text style={styles.titleTxt1}>16</Text>
          </Text>
        </View>
      </View>
      <View style={{height: '77%'}}>
        <Image source={Img3} style={[styles.mainImg]} />
      </View>
      <View
        style={[
          Background.black,
          styles.totalCard,
          {
            elevation: 20,
          },
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
          Paddings.paddingHorizontalMedium,
        ]}>
        <Pressable
          onPress={() => navigation.navigate(UserScreens.billDetails.routeName)}
          style={[
            Background.white,
            {width: '46%', borderRadius: 50},
            Paddings.paddingLg,
            BaseStyle.alignCenter,
          ]}>
          <Text style={styles.btntxt}>BILL DETAILS</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Main', {screen: 'NearBy'});
            setNewNavigationSource('MAP');
          }}
          style={[
            Background.white,
            {width: '46%', borderRadius: 50},
            Paddings.paddingLg,
            BaseStyle.alignCenter,
          ]}>
          <Text style={styles.btntxt}>SEARCH FOR BAR</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default VirtualShotsTracker;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: 19,
    fontFamily: FontFamily.SF_MEDIUM,
    lineHeight: 22,
    letterSpacing: 1,
  },
  txt1: {
    color: theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
    fontSize: 14,
    fontFamily: FontFamily.SF_SEMIBOLD,
    lineHeight: 16,
    letterSpacing: 1,
    marginBottom: 3,
  },
  btntxt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 12,
    fontFamily: FontFamily.SF_SEMIBOLD,
    letterSpacing: 1,
    lineHeight: 14,
  },
  titleTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_REGULAR,
    letterSpacing: 1,
    lineHeight: 19,
    marginLeft: 4,
  },
  titleTxt1: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_SEMIBOLD,
    letterSpacing: 1,
    lineHeight: 19,
  },
  totalCard: {
    height: '10%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -7},
    shadowOpacity: 0.25,
    shadowRadius: 8,
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
  img1: {
    width: 50,
    height: 59,
  },
  img2: {
    width: 49,
    height: 59,
  },
  mainImg: {
    width: '100%',
    height: '100%',
  },
});