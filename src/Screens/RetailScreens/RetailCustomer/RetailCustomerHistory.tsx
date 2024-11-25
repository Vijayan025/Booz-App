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
import FeaIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import ShotIcon from '../../../../assets/images/shotsIcon.png';
import BottleIcon from '../../../../assets/images/smBottle.png';
import {BaseStyle} from '../../../styles/Base';
import {Background} from '../../../styles/Background';
import {ColorLabels, theme} from '../../../common/theme';
import {Paddings} from '../../../styles/Padding';
import {Margins} from '../../../styles/Margins';
import {FontFamily} from '../../../types/Fonts';
import CustomerIcon from '../../../../assets/images/customerIcon.png';
import RetailShotCard from '../RetailHome/RetailShotCard';
import RetailBottleCard from '../RetailHome/RetailBottleCard';
import {UserScreens} from '../../../common/routes/user/user.screens';

const RetailCustomerHistory = () => {
  const navigation = useNavigation();
  const [selectedSection, setSelectedSection] = useState('Shots');
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
        <Text style={styles.txt}>CUSTOMER ORDER HISTORY</Text>
        <Pressable
          onPress={() =>
            navigation.navigate(UserScreens.customerDetails.routeName)
          }>
          <Image
            source={CustomerIcon}
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
        </Pressable>
      </View>
      <View
        style={[
          Paddings.paddingHorizontalMedium,
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifyCenter,
          Margins.mtMLg,
        ]}>
        <Pressable
          onPress={() => setSelectedSection('Shots')}
          style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mrLg]}>
          <Image
            source={ShotIcon}
            resizeMode="contain"
            style={styles.shotImg}
          />
          <Text
            style={[
              {
                color: isSelected('Shots')
                  ? theme.colors[ColorLabels.BOTTOM_TAB_DARK]
                  : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
                fontFamily: FontFamily.SF_SEMIBOLD,
                fontSize: 14,
              },
              Margins.mlXSm,
              Margins.mtXsm,
            ]}>
            Shots
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelectedSection('Bottles')}
          style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mrLg]}>
          <Image
            source={BottleIcon}
            resizeMode="contain"
            style={styles.bottleImg}
          />
          <Text
            style={[
              {
                color: isSelected('Bottles')
                  ? theme.colors[ColorLabels.BOTTOM_TAB_DARK]
                  : theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
                fontFamily: FontFamily.SF_SEMIBOLD,
                fontSize: 14,
              },
              Margins.mtSm,
            ]}>
            Bottles
          </Text>
        </Pressable>
      </View>
      {selectedSection === 'Shots' ? (
        <ScrollView
          style={[Paddings.paddingHorizontalMedium]}
          showsVerticalScrollIndicator={false}>
          <RetailShotCard buttonShow={false} />
          <RetailShotCard buttonShow={false} />
          <RetailShotCard buttonShow={false} />
          <RetailShotCard buttonShow={false} />
          <RetailShotCard buttonShow={false} />
          <RetailShotCard buttonShow={false} />
          <RetailShotCard buttonShow={false} />
        </ScrollView>
      ) : (
        <ScrollView
          style={[Paddings.paddingHorizontalMedium]}
          showsVerticalScrollIndicator={false}>
          <RetailBottleCard />
          <RetailBottleCard />
          <RetailBottleCard />
          <RetailBottleCard />
          <RetailBottleCard />
          <RetailBottleCard />
          <RetailBottleCard />
          <RetailBottleCard />
          <RetailBottleCard />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default RetailCustomerHistory;

const styles = StyleSheet.create({
  shotImg: {width: 22, height: 25},
  bottleImg: {width: 25, height: 25},
  txt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 14,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
  },
});
