import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BaseStyle} from '../../../styles/Base';
import {ColorLabels, theme} from '../../../common/theme';
import {Background} from '../../../styles/Background';
import {Paddings} from '../../../styles/Padding';
import {Margins} from '../../../styles/Margins';
import {useNavigation} from '@react-navigation/native';
import {FontFamily} from '../../../types/Fonts';
import {fontSizes} from '../../../styles/fonts';
import ShotLargeIcon from '../../../../assets/images/ShotLargeIcon.png';
import {Position} from '../../../styles/Position';
import {numericNumOnly} from '../../../common/utils';
import TextInputPaper from '../../../common/ui/TextInputPaper';
import {Controller, useForm} from 'react-hook-form';
import {UserScreens} from '../../../common/routes/user/user.screens';

const ScanFormScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const AcceptSubmit = () => {
    navigation.navigate(UserScreens.retailOrderScreen.routeName, {
      type: 'ACCEPT',
    });
  };

  const DeclineSubmit = () => {
    navigation.navigate(UserScreens.retailOrderScreen.routeName, {
      type: 'DECLINE',
    });
  };

  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.white]}>
      <StatusBar
        backgroundColor={theme.colors[ColorLabels.WHITE]}
        barStyle="dark-content"
      />
      <View style={[Paddings.paddingHorizontalMedium, Margins.mtMd]}>
        <AntIcon
          name="arrowleft"
          color={theme.colors[ColorLabels.BLACK]}
          size={23}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={[
          BaseStyle.flexContainer,
          BaseStyle.alignCenter,
          BaseStyle.justifyEvenly,
        ]}>
        <View style={[BaseStyle.alignCenter]}>
          <View style={[Position.relative]}>
            <Image
              source={ShotLargeIcon}
              resizeMode="contain"
              style={styles.shotImg}
            />
            <Image
              source={ShotLargeIcon}
              resizeMode="contain"
              style={styles.shotImg1}
            />
          </View>
          <View style={[Margins.mtXXl]}>
            <Text style={styles.mainTxt}>White Whiskey - 1 Shot Ordered</Text>
            <Text style={styles.mainTxt}>Order no: WHISK0001</Text>
            <Text style={styles.mainTxt}>Customer No : +60 17-240 3480</Text>
          </View>
          <View style={[Margins.mtXXl, {height: 47}]}>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Enter Table Number',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  style={[styles.textInput, Background.white]}
                  placeholder={'Enter Table Number'}
                  textColor={ColorLabels.BLACK}
                  outlineColor={theme.colors[ColorLabels.WHITE]}
                  activeOutlineColor={theme.colors[ColorLabels.BLACK]}
                  outlineStyle={{borderRadius: 12}}
                  placeholderTextColor={theme.colors[ColorLabels.GREY]}
                  underlineColor={theme.colors[ColorLabels.WHITE]}
                  activeUnderlineColor={theme.colors[ColorLabels.WHITE]}
                  value={value}
                  onChangeText={text => {
                    const numericOnlyNum = numericNumOnly(text);
                    onChange(numericOnlyNum);
                  }}
                  keyboardType="numeric"
                  returnKeyType="done"
                  contentStyle={{
                    paddingHorizontal: 10,
                    fontSize: 14,
                    borderColor: theme.colors[ColorLabels.BLACK],
                    borderWidth: 0.8,
                    borderRadius: 12,
                  }}
                />
              )}
              name="tableNumber"
            />
            {errors.tableNumber && (
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.ERROR_ORANGE],
                    fontSize: fontSizes.smm,
                  },
                  Margins.mtXsm,
                ]}>
                {errors.tableNumber.message}
              </Text>
            )}
          </View>
        </View>

        <View style={[Paddings.paddingHorizontalExtraMedium]}>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BaseStyle.justifySpaceBetween,
              styles.btnWidth,
            ]}>
            <Pressable
              onPress={handleSubmit(DeclineSubmit)}
              style={[
                Background.btnRed,
                BaseStyle.alignCenter,
                Paddings.paddingMd,
                styles.btn,
              ]}>
              <Text style={styles.btnTxt}>DECLINE</Text>
            </Pressable>
            <Pressable
              onPress={handleSubmit(AcceptSubmit)}
              style={[
                Background.btnGreen,
                styles.btn,
                BaseStyle.alignCenter,
                Paddings.paddingMd,
              ]}>
              <Text style={styles.btnTxt}>ACCEPT</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScanFormScreen;

const styles = StyleSheet.create({
  btn: {borderRadius: 50, width: '46%'},
  btnWidth: {width: '100%'},
  btnTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: 12,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
  },
  mainTxt: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
    marginTop: 15,
  },
  shotImg: {
    width: 106,
    height: 127,
  },
  shotImg1: {
    width: 106,
    height: 127,
    position: 'absolute',
    left: 20,
    top: 20,
  },
  textInput: {
    minWidth: 294,
    height: 47,
    fontSize: 14,
  },
});
