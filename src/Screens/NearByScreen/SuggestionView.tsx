import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {ColorLabels, theme} from '../../common/theme';
import ImageView from 'react-native-image-viewing';
import StaggerView from '@mindinventory/react-native-stagger-view';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Paddings} from '../../styles/Padding';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {Margins} from '../../styles/Margins';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';

const SuggestionView = () => {
  const navigation = useNavigation();
  const [visible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setIsVisible(true);
  };
  const images = [
    {
      uri: 'https://images.pexels.com/photos/9386469/pexels-photo-9386469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uri: 'https://images.pexels.com/photos/1189257/pexels-photo-1189257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uri: 'https://images.pexels.com/photos/18510264/pexels-photo-18510264/free-photo-of-a-person-preparing-a-cocktail.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uri: 'https://images.pexels.com/photos/14162012/pexels-photo-14162012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uri: 'https://images.pexels.com/photos/10774218/pexels-photo-10774218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uri: 'https://images.pexels.com/photos/4485391/pexels-photo-4485391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uri: 'https://images.pexels.com/photos/14162012/pexels-photo-14162012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uri: 'https://images.pexels.com/photos/10774218/pexels-photo-10774218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.white]}>
      <StatusBar
        backgroundColor={theme.colors[ColorLabels.WHITE]}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <StaggerView
          data={images}
          horizontal
          numColumns={2}
          contentContainerStyle={{
            paddingHorizontal: 0,
            alignSelf: 'stretch',
            height: 220,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            const index = images.findIndex(image => image.uri === item.uri);
            return (
              <TouchableOpacity
                onPress={() => {
                  openImage(index);
                }}>
                <Image
                  source={{uri: item.uri}}
                  style={[
                    styles.image,
                    {
                      width: 150,
                      height: 100,
                    },
                  ]}
                />
              </TouchableOpacity>
            );
          }}
          animationType={'FADE_IN_FAST'}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[BaseStyle.flexContainer, Paddings.paddingHorizontalMedium]}>
          <Text style={styles.mainTxt}>Tess Bar & Kitchen, Singapore</Text>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <Text style={styles.subTxt}>4.6</Text>
            <FontIcon
              name="star"
              color={theme.colors[ColorLabels.STAR_SELECT_COLOR]}
              size={13}
              style={styles.star}
            />
            <FontIcon
              name="star"
              color={theme.colors[ColorLabels.STAR_SELECT_COLOR]}
              size={13}
              style={styles.star}
            />
            <FontIcon
              name="star"
              color={theme.colors[ColorLabels.STAR_SELECT_COLOR]}
              size={13}
              style={styles.star}
            />
            <FontIcon
              name="star"
              color={theme.colors[ColorLabels.STAR_SELECT_COLOR]}
              size={13}
              style={styles.star}
            />
            <FontIcon
              name="star"
              color={theme.colors[ColorLabels.START_UNSELECT_COLOR]}
              size={13}
              style={styles.star}
            />
            <Text style={styles.subTxt}>(949) - ₹₹</Text>
          </View>
          <Text style={styles.subTxt}>
            Cocktail bar -{' '}
            <Text style={[styles.subTxt, {color: 'green'}]}>Open</Text>
          </Text>
          <View
            style={[
              Margins.mtXMd,
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BaseStyle.justifySpaceBetween,
            ]}>
            <Pressable
              style={[Paddings.paddingMd, Background.primary, styles.btn]}>
              <Text style={[styles.btnTxt]}>DIRECTIONS</Text>
            </Pressable>
            <Pressable
              style={[Paddings.paddingMd, Background.white, styles.btn1]}>
              <Text
                style={[
                  styles.btnTxt,
                  {color: theme.colors[ColorLabels.BLACK]},
                ]}>
                START
              </Text>
            </Pressable>
          </View>
          <View style={[Margins.mtLg]}>
            <Text style={styles.titleTxt}>OPEN</Text>
            <Text style={styles.titleSubTxt}>
              Today{' '}
              <Text
                style={[
                  styles.titleSubTxt,
                  {color: theme.colors[ColorLabels.BLACK]},
                ]}>
                Closes 1am
              </Text>
            </Text>
          </View>
          <View style={[Margins.mtLg]}>
            <Text style={styles.titleTxt}>ADDRESS</Text>
            <Text style={styles.titleSubTxt}>36 Seah St, Singapore 188392</Text>
          </View>
          <View style={[Margins.mtLg]}>
            <Text style={styles.titleTxt}>PHONE</Text>
            <Text style={styles.titleSubTxt}>+6596334776</Text>
          </View>
          <View style={[Margins.mtLg]}>
            <Text style={styles.titleTxt}>MENU WEBSITE</Text>
            <Text style={styles.titleSubTxt}>www.tessbar.com</Text>
          </View>
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.virtualPurchased.routeName, {
                type: 'VIEW',
              })
            }
            style={[
              Paddings.paddingLg,
              Background.primary,
              styles.btnMain,
              Margins.mtXl,
              Margins.mbXl,
            ]}>
            <Text style={[styles.btnTxt]}>VIEW PURCHASED BOTTLE</Text>
          </Pressable>
        </View>
      </ScrollView>
      <ImageView
        images={images}
        imageIndex={currentIndex}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </SafeAreaView>
  );
};

export default SuggestionView;

const styles = StyleSheet.create({
  container: {
    height: 230,
  },
  image: {
    borderRadius: 10,
    margin: 5,
  },
  mainTxt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: fontSizes.smd,
    fontFamily: FontFamily.SF_SEMIBOLD,
  },
  titleTxt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: fontSizes.smd,
    fontFamily: FontFamily.SF_MEDIUM,
    lineHeight: 19,
    letterSpacing: 1,
  },
  titleSubTxt: {
    color: theme.colors[ColorLabels.BOTTOM_TAB_LIGHT],
    fontSize: fontSizes.sm,
    fontFamily: FontFamily.SF_REGULAR,
    lineHeight: 24,
    letterSpacing: 1,
    marginTop: 5,
  },
  star: {width: 16},
  subTxt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: fontSizes.smm,
    fontFamily: FontFamily.SF_MEDIUM,
    marginRight: 3,
  },
  btn: {borderRadius: 50, width: '55%'},
  btnMain: {borderRadius: 50},
  btn1: {
    borderRadius: 50,
    width: '38%',
    borderColor: theme.colors[ColorLabels.PRIMARY],
    borderWidth: 1,
  },
  btnTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.sm,
    fontFamily: FontFamily.SF_MEDIUM,
    textAlign: 'center',
    lineHeight: 14,
    letterSpacing: 1,
  },
});
