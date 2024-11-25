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
import {SafeAreaView} from 'react-native-safe-area-context';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {ColorLabels, theme} from '../../common/theme';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import FeaIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {FontFamily} from '../../types/Fonts';
import {Layout} from '../../styles/Layout';
import ShotIcon from '../../../assets/images/shotsIcon.png';
import BottleIcon from '../../../assets/images/bottleIcon.png';
import ShotCard from './ShotCard';

const ShotsAndBottles = () => {
  const navigation = useNavigation();
  const [selectedSection, setSelectedSection] = useState('Shots Ordered');
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
          Margins.mtXMd,
        ]}>
        <FeaIcon
          name="menu"
          color={theme.colors[ColorLabels.BLACK]}
          size={23}
          onPress={() => navigation.getParent('LeftDrawer').openDrawer()}
        />
        <Pressable
          onPress={() => setSelectedSection('Shots Ordered')}
          style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
          <Image
            source={ShotIcon}
            resizeMode="contain"
            style={styles.shotImg}
          />
          <Text
            style={[
              {
                color: isSelected('Shots Ordered')
                  ? theme.colors[ColorLabels.BOTTOM_TAB_DARK]
                  : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
                fontFamily: FontFamily.SF_SEMIBOLD,
                fontSize: 14,
              },
              Margins.mlXSm,
              Margins.mtXsm,
            ]}>
            Shots Ordered
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelectedSection('Bottles Ordered')}
          style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mrLg]}>
          <Image
            source={BottleIcon}
            resizeMode="contain"
            style={styles.bottleImg}
          />
          <Text
            style={[
              {
                color: isSelected('Bottles Ordered')
                  ? theme.colors[ColorLabels.BOTTOM_TAB_DARK]
                  : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
                fontFamily: FontFamily.SF_SEMIBOLD,
                fontSize: 14,
              },
              Margins.mtSm,
            ]}>
            Bottles Ordered
          </Text>
        </Pressable>
      </View>
      <ScrollView
        style={[Paddings.paddingHorizontalMedium]}
        showsVerticalScrollIndicator={false}>
        <ShotCard />
        <ShotCard />
        <ShotCard />
        <ShotCard />
        <ShotCard />
        <ShotCard />
        <ShotCard />
        <ShotCard />
        <ShotCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShotsAndBottles;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 16,
    fontFamily: FontFamily.SF_SEMIBOLD,
  },
  shotImg: {width: 22, height: 25},
  bottleImg: {width: 25, height: 25},
});
