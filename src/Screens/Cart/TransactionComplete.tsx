import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {ColorLabels, theme} from '../../common/theme';
import TickIcon from '../../../assets/images/BigCheckMark.png';
import {FontFamily} from '../../types/Fonts';
import {Paddings} from '../../styles/Padding';
import {useNavigation} from '@react-navigation/native';
import {Margins} from '../../styles/Margins';
import {UserScreens} from '../../common/routes/user/user.screens';

const TransactionComplete = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.primary]}>
      <StatusBar
        backgroundColor={theme.colors[ColorLabels.PRIMARY]}
        barStyle="light-content"
      />
      <View style={[BaseStyle.flexContainer, BaseStyle.justifyCenter]}>
        <View
          style={[
            BaseStyle.alignCenter,
            BaseStyle.justifyEnd,
            {height: '50%'},
          ]}>
          <Image
            source={TickIcon}
            resizeMode="contain"
            style={{width: 154, height: 154}}
          />
          <Text style={styles.txt}>TRANSACTION COMPLETED</Text>
        </View>
        <View
          style={[
            BaseStyle.flexContainer,
            BaseStyle.justifyEnd,
            Margins.mbXXl,
            BaseStyle.alignCenter,
          ]}>
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.virtualPurchased.routeName)
            }
            style={[
              Background.white,
              {width: '50%', borderRadius: 50},
              Paddings.paddingLg,
              BaseStyle.alignCenter,
            ]}>
            <Text style={styles.btntxt}>VIEW WALLET</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionComplete;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: 21,
    fontFamily: FontFamily.SF_MEDIUM,
    lineHeight: 25,
    letterSpacing: 1,
    textAlign: 'center',
    marginTop: 40,
  },
  btntxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: 12,
    fontFamily: FontFamily.SF_SEMIBOLD,
    lineHeight: 14,
    letterSpacing: 1,
  },
});
