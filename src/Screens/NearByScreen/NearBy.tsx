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
import {useNavigation} from '@react-navigation/native';
import {Searchbar} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeaIcon from 'react-native-vector-icons/Feather';
import {FontFamily} from '../../types/Fonts';
import QrIcon from '../../../assets/images/qrBlackIcon.png';
import SuggestionCard from '../Home/SuggestionCard';
import {fontSizes} from '../../styles/fonts';
import NearByCard from './NearByCard';
import {UserScreens} from '../../common/routes/user/user.screens';
import MapComponent from './MapComponent';
import {useNewNavigationSource} from '../../common/Common/NewNavigationSource';

const NearBy = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText]: any = useState();
  const {newNavigationSource}: any = useNewNavigationSource();
  console.log('newNavigationSource', newNavigationSource);
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
        <Text style={styles.txt}>Search Near By Bar</Text>
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
        <View style={[Margins.mtLg, Margins.mbMd, styles.shadowWrapper]}>
          <Searchbar
            style={styles.searchStyle}
            inputStyle={styles.searchInput}
            placeholder={'Search'}
            onChangeText={(text: any) => {
              setSearchText(text);
            }}
            value={searchText}
            icon={() => (
              <IonIcon
                name="search"
                color={theme.colors[ColorLabels.BOTTOM_TAB_LIGHT]}
                size={20}
              />
            )}
          />
        </View>
      </View>
      {newNavigationSource === 'MAP' ? (
        <MapComponent />
      ) : (
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View
            style={[
              Margins.mtMLg,
              Paddings.paddingHorizontalMedium,
              Margins.mbXl,
            ]}>
            <Text style={styles.mainTxt}>SUGGESTIONS FOR YOU</Text>
            <NearByCard />
            <NearByCard />
            <NearByCard />
            <NearByCard />
            <NearByCard />
            <NearByCard />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default NearBy;

const styles = StyleSheet.create({
  searchStyle: {
    backgroundColor: theme.colors[ColorLabels.WHITE],
    borderRadius: 50,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  shadowWrapper: {
    backgroundColor: theme.colors[ColorLabels.WHITE],
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 2,
  },
  searchInput: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    fontSize: 15,
    fontFamily: FontFamily.SF_LIGHT,
    marginTop: -2,
  },
  txt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 16,
    fontFamily: FontFamily.SF_SEMIBOLD,
  },
  mainTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.smd,
    fontFamily: FontFamily.SF_MEDIUM,
  },
});
