import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import ProfileOutlineSvg from '../../common/Common/Svg/ProfileOutlineSvg';
import HomeOutlineSvg from '../../common/Common/Svg/HomeOutlineSvg';
import DocumentOutlineSvg from '../../common/Common/Svg/DocumentOutlineSvg';
import CommentsOutlineSvg from '../../common/Common/Svg/CommentsOutlineSvg';
import BellOutlineSvg from '../../common/Common/Svg/BellOutlineSvg';
import BookmarkOutlineSvg from '../../common/Common/Svg/BookmarkOutlineSvg';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import UserPic from '../../../assets/images/SideMenuUser.png';
import CloseIcon from '../../../assets/images/closeIcon.png';
import HomeFillSvg from '../../common/Common/Svg/HomeFillSvg';
import DocumentFillSvg from '../../common/Common/Svg/DocumentFillSvg';
import CommentsFillSvg from '../../common/Common/Svg/CommentsFillSvg';
import BellFillSvg from '../../common/Common/Svg/BellFillSvg';
import BookmarkFillSvg from '../../common/Common/Svg/BookmarkFillSvg';
import ProfileFillSvg from '../../common/Common/Svg/ProfileFillSvg';

const LeftMenuDrawerContent = (props: {
  state: any;
  descriptors: any;
  navigation: any;
}) => {
  const {state, descriptors, navigation} = props;
  const getIconForRoute = (routeName: any, isActive: boolean) => {
    switch (routeName) {
      case 'Home':
        return isActive ? <HomeFillSvg /> : <HomeOutlineSvg />;
      case 'Topics':
        return isActive ? <DocumentFillSvg /> : <DocumentOutlineSvg />;
      case 'Messages':
        return isActive ? <CommentsFillSvg /> : <CommentsOutlineSvg />;
      case 'Notifications':
        return isActive ? <BellFillSvg /> : <BellOutlineSvg />;
      case 'Bookmarks':
        return isActive ? <BookmarkFillSvg /> : <BookmarkOutlineSvg />;
      case 'Profile':
        return isActive ? <ProfileFillSvg /> : <ProfileOutlineSvg />;
      default:
        return <HomeOutlineSvg />;
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          BaseStyle.alignEnd,
          Paddings.paddingHorizontalMedium,
          Margins.mtXMd,
        ]}>
        <Pressable
          onPress={() => navigation.getParent('LeftDrawer').closeDrawer()}>
          <Image source={CloseIcon} resizeMode="contain" />
        </Pressable>
      </View>
      <View style={[Paddings.paddingHorizontalMedium]}>
        <Image source={UserPic} resizeMode="contain" />
        <Text style={styles.nameTxt}>Sophia Rose</Text>
        <Text style={styles.subTxt}>UX/UI Designer</Text>
      </View>
      <View style={styles.borderLine} />
      {state.routes.map(
        (route: {name: any; key: React.Key | null | undefined}, index: any) => {
          const isFocused = state.index === index;
          const icon = getIconForRoute(route.name, isFocused);
          return (
            <DrawerItem
              key={route.key}
              label={descriptors[route.key].options.title || route.name}
              focused={isFocused}
              icon={() => icon}
              onPress={() => navigation.navigate(route.name)}
              style={[
                styles.drawerItem,
                isFocused ? styles.activeBackground : styles.inactiveBackground,
                Margins.mtSm,
              ]}
              labelStyle={isFocused ? styles.activeLabel : styles.inactiveLabel}
            />
          );
        },
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  drawerItem: {
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  activeBackground: {
    backgroundColor: '#EDEDED',
    borderRadius: 50,
  },
  inactiveBackground: {
    backgroundColor: 'transparent',
  },
  activeLabel: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 18,
    marginLeft: 5,
    fontFamily: FontFamily.INTER_SEMIBOLD,
    marginTop: 4,
  },
  inactiveLabel: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 18,
    marginLeft: 5,
    fontFamily: FontFamily.INTER_MEDIUM,
    marginTop: 4,
  },
  borderLine: {
    borderBottomColor: theme.colors[ColorLabels.DRAWER_BORDER_COLOR],
    borderBottomWidth: 0.8,
    marginTop: 15,
    marginBottom: 20,
  },
  nameTxt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 16,
    fontFamily: FontFamily.SF_BOLD,
    marginTop: 10,
  },
  subTxt: {
    color: theme.colors[ColorLabels.DRAWER_GREY_COLOR],
    fontSize: 16,
    fontFamily: FontFamily.SF_REGULAR,
    marginTop: -5,
  },
});

export default LeftMenuDrawerContent;
