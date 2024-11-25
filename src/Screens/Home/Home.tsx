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
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ColorLabels, theme} from '../../common/theme';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import FeaIcon from 'react-native-vector-icons/Feather';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import {FontFamily} from '../../types/Fonts';
import {Searchbar} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HomeCard from './HomeCard';
import {fontSizes} from '../../styles/fonts';
import SuggestionCard from './SuggestionCard';

const Home = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText]: any = useState();
  const sections = ['Whiskey', 'Sprits', 'Wine', 'Champagne', 'Beer'];
  const [selectedSection, setSelectedSection] = useState('Whiskey');
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
        <FeaIcon
          name="menu"
          color={theme.colors[ColorLabels.LOGIN_BACKGROUND]}
          size={23}
        />
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
            right={() => (
              <FeaIcon
                name="camera"
                color={theme.colors[ColorLabels.BOTTOM_TAB_LIGHT]}
                size={20}
                style={[Margins.mrMmd]}
              />
            )}
          />
        </View>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <View style={[Margins.mrLg]} />
          </ScrollView>
        </View>
        <View
          style={[
            Margins.mtMLg,
            Paddings.paddingHorizontalMedium,
            Margins.mbXl,
          ]}>
          <Text style={styles.mainTxt}>SUGGESTIONS FOR YOU</Text>
          <SuggestionCard />
          <SuggestionCard />
          <SuggestionCard />
          <SuggestionCard />
          <SuggestionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 16,
    fontFamily: FontFamily.SF_SEMIBOLD,
  },
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
  mainTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.smd,
    fontFamily: FontFamily.SF_MEDIUM,
  },
});
