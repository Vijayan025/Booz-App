import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FeaIcon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BaseStyle} from '../../../styles/Base';
import {Background} from '../../../styles/Background';
import {ColorLabels, theme} from '../../../common/theme';
import {Paddings} from '../../../styles/Padding';
import {Margins} from '../../../styles/Margins';
import {FontFamily} from '../../../types/Fonts';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Controller, useForm} from 'react-hook-form';
import TextInputPaper from '../../../common/ui/TextInputPaper';
import {FontsFamily, fontSizes} from '../../../styles/fonts';
import {TextInput} from 'react-native-paper';
import dayjs from 'dayjs';
import DateTimePicker from 'react-native-ui-datepicker';
import MatcIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {alphabetsOnly} from '../../../common/utils';
import {Position} from '../../../styles/Position';

const SubmitReports = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({});

  const showDatePicker = () => {
    setOpen(true);
  };

  const onSubmit = (data: any) => {
    console.log('data', data);
  };

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
        <Text style={styles.txt}>Submit Reports to Dealer</Text>
        <FeaIcon
          name="menu"
          color={theme.colors[ColorLabels.WHITE]}
          size={23}
        />
      </View>
      <KeyboardAwareScrollView
        enableOnAndroid
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
        style={[
          BaseStyle.flexContainer,
          Paddings.paddingHorizontalMedium,
          Margins.mtXXl,
        ]}>
        <View style={[Margins.mtMd, Position.relative]}>
          <Text style={[styles.txtLabel, Margins.mbSm]}>Date</Text>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Date is required',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TouchableOpacity onPress={showDatePicker}>
                <TextInputPaper
                  style={[styles.textInput]}
                  placeholder="Choose Date"
                  placeholderTextColor={theme.colors[ColorLabels.GREY]}
                  textColor={theme.colors[ColorLabels.BLACK]}
                  outlineColor={theme.colors[ColorLabels.GREY]}
                  outlineStyle={{borderRadius: 8}}
                  underlineColor={theme.colors[ColorLabels.WHITE]}
                  activeUnderlineColor={theme.colors[ColorLabels.PRIMARY]}
                  value={value ? dayjs(value).format('DD/MM/YYYY') : ''}
                  onChangeText={onChange}
                  keyboardType="default"
                  returnKeyType="done"
                  contentStyle={[
                    FontsFamily.regular,
                    {paddingHorizontal: 10, fontSize: 15},
                  ]}
                  left={
                    <TextInput.Icon
                      icon={() => (
                        <MatcIcon
                          name="calendar-month"
                          size={23}
                          color={theme.colors[ColorLabels.GREY]}
                        />
                      )}
                      onPress={showDatePicker}
                    />
                  }
                  showSoftInputOnFocus={false}
                  editable={false}
                  mode="outlined"
                />
              </TouchableOpacity>
            )}
            name="dateOfBirth"
          />
          {errors.dateOfBirth && (
            <Text style={styles.error}>{errors.dateOfBirth.message}</Text>
          )}
          {open && (
            <View style={[Position.absolute, styles.calStyle]}>
              <DateTimePicker
                mode="single"
                date={date}
                height={241}
                weekDaysTextStyle={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.SF_BOLD,
                }}
                weekDaysContainerStyle={{marginTop: -10}}
                selectedItemColor={theme.colors[ColorLabels.PRIMARY]}
                onChange={params => {
                  setDate(params?.date);
                  console.log('date', date);
                  setOpen(false);
                  setValue(
                    'dateOfBirth',
                    dayjs(params?.date).format('YYYY-MM-DDTHH:mm:ss'),
                    {
                      shouldValidate: true,
                    },
                  );
                }}
              />
            </View>
          )}
        </View>
        <View style={[Margins.mtLg]}>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Title Subject is required',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputPaper
                style={[styles.textInput1, Background.white]}
                placeholder="Title Subject"
                placeholderTextColor={theme.colors[ColorLabels.GREY]}
                textColor={theme.colors[ColorLabels.BLACK]}
                outlineColor={theme.colors[ColorLabels.GREY]}
                outlineStyle={{borderRadius: 8}}
                value={value}
                onChangeText={text => {
                  const alphabetsOnlyText = alphabetsOnly(text);
                  onChange(alphabetsOnlyText);
                }}
                keyboardType="default"
                returnKeyType="done"
                contentStyle={[styles.contentStyle, FontsFamily.regular]}
                mode="outlined"
                underlineColor={theme.colors[ColorLabels.PRIMARY]}
                activeUnderlineColor={theme.colors[ColorLabels.PRIMARY]}
                // label="Title Subject"
              />
            )}
            name="title"
          />
          {errors.title && (
            <Text style={styles.error}>{errors.title.message}</Text>
          )}
        </View>
        <View style={[Margins.mtLg]}>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Message  is required',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputPaper
                style={[styles.textInput1, Background.white, {minHeight: 200}]}
                placeholder="Message "
                placeholderTextColor={theme.colors[ColorLabels.GREY]}
                textColor={theme.colors[ColorLabels.BLACK]}
                outlineColor={theme.colors[ColorLabels.GREY]}
                outlineStyle={{borderRadius: 8}}
                value={value}
                onChangeText={text => {
                  const alphabetsOnlyText = alphabetsOnly(text);
                  onChange(alphabetsOnlyText);
                }}
                keyboardType="default"
                returnKeyType="done"
                contentStyle={[styles.contentStyle, FontsFamily.regular]}
                mode="outlined"
                underlineColor={theme.colors[ColorLabels.PRIMARY]}
                activeUnderlineColor={theme.colors[ColorLabels.PRIMARY]}
                // label="Message"
                multiline={true}
              />
            )}
            name="message"
          />
          {errors.message && (
            <Text style={styles.error}>{errors.message.message}</Text>
          )}
        </View>
        <View style={[Margins.mtMLg, Margins.mbXl, BaseStyle.alignCenter]}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={[
              BaseStyle.justifyCenter,
              Paddings.paddingMd,
              Background.primary,
              {borderRadius: 50, width: '100%'},
            ]}>
            <Text style={styles.submitTxt}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SubmitReports;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 14,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
  },
  txtLabel: {
    color: theme.colors[ColorLabels.LOGIN_BLACK],
    fontFamily: FontFamily.SF_SEMIBOLD,
    fontSize: fontSizes.smd,
  },
  textInput: {
    width: 250,
    fontSize: 14,
    minHeight: 42,
  },
  textInput1: {
    minWidth: 294,
    fontSize: 14,
    minHeight: 47,
  },
  contentStyle: {paddingHorizontal: 10, fontSize: 15},
  calStyle: {
    width: 250,
    top: 90,
    backgroundColor: theme.colors[ColorLabels.WHITE],
    zIndex: 22,
    borderRadius: 8,
    elevation: 2,
  },
  submitTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.sm,
    fontFamily: FontFamily.SF_MEDIUM,
    textAlign: 'center',
    letterSpacing: 1,
  },
  error: {
    color: theme.colors[ColorLabels.ERROR_ORANGE],
    fontSize: 12,
    marginTop: 4,
  },
});
