import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ColorLabels, theme} from '../../common/theme';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import FeaIcon from 'react-native-vector-icons/Feather';
import {FontFamily} from '../../types/Fonts';
import QrIcon from '../../../assets/images/qrBlackIcon.png';
import HomeSecondCard from './HomeSecondCard';
import NextIcon from '../../../assets/images/NextIcon.png';
import {fontSizes} from '../../styles/fonts';
import {UserScreens} from '../../common/routes/user/user.screens';

const HomeSecond = () => {
  const navigation = useNavigation();
  const sections = ['Red Whiskey', 'White Whiskey', 'Sparking Whiskey'];
  const [selectedSection, setSelectedSection] = useState('Red Whiskey');
  const isSelected = (section: string) => selectedSection === section;
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
          Margins.mtMd,
        ]}>
        <FeaIcon
          name="menu"
          color={theme.colors[ColorLabels.BLACK]}
          size={23}
          onPress={() => navigation.getParent('LeftDrawer').openDrawer()}
        />
        <Text style={styles.txt}>Home</Text>
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
      <View style={[Paddings.paddingHorizontalMedium]}>
        <Text style={styles.txtMain}>Shrin & Village Whiskey Company</Text>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.justifySpaceBetween,
            Margins.mbMd,
            Margins.mtXMd,
          ]}>
          {sections.map(section => (
            <Pressable
              key={section}
              onPress={() => setSelectedSection(section)}>
              <Text
                style={{
                  color: isSelected(section)
                    ? theme.colors[ColorLabels.BOTTOM_TAB_DARK]
                    : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
                  fontFamily: FontFamily.SF_SEMIBOLD,
                  fontSize: 14,
                }}>
                {section}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HomeSecondCard />
          <HomeSecondCard />
          <HomeSecondCard />
          <View style={[Margins.mrLg]} />
        </ScrollView>
      </View>
      <View style={[Paddings.paddingHorizontalMedium]}>
        <Pressable style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: fontSizes.md,
                fontFamily: FontFamily.SF_MEDIUM,
              },
              Margins.mrMd,
            ]}>
            View Details
          </Text>
          <Image source={NextIcon} resizeMode="contain" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeSecond;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 16,
    fontFamily: FontFamily.SF_SEMIBOLD,
  },
  txtMain: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 22,
    fontFamily: FontFamily.SF_SEMIBOLD,
    lineHeight: 38,
    letterSpacing: 1,
    marginTop: 25,
  },
});
