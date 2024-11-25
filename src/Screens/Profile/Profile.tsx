import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ColorLabels, theme} from '../../common/theme';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import FeaIcon from 'react-native-vector-icons/Feather';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import {FontFamily} from '../../types/Fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ImagePickModal from '../../common/Common/ImagePickerModal';
import DefaultPic from '../../../assets/images/defaultPic.png';
import CameraIcon from '../../../assets/images/cameraIcon.png';
import {alphabetsOnly, MIN_YEAR, validateEmail} from '../../common/utils';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {Controller, useForm} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import {FontsFamily, fontSizes} from '../../styles/fonts';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import DropDownComponent from '../../common/Common/DropDownComponent';
import {BorderStyle} from '../../styles/Border';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: 'Melissa Peters',
      email: 'melpeters@gmail.com',
      password: '12345678',
      dateOfBirth: '1995-05-23T12:23:49',
      countryRegion: '2',
    },
  });
  const [passwordVisible, setPasswordVisible] = useState(true);
  const navigation = useNavigation();
  const [uploadUri, setUploadUri] = useState();
  const [show, setShow] = useState(false);
  const [imageBase64, setImageBase64]: any = React.useState<string | null>(
    null,
  );
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('2');

  const languages = [
    {label: 'India', value: '1'},
    {label: 'Nigeria', value: '2'},
  ];
  const handleCountrySelect = (item: any) => {
    setSelectedCountry(item);
    setValue('countryRegion', item, {
      shouldValidate: true,
    });
  };
  const processImage = async (data: any) => {
    const {compressedImageBase64: imageBase64, uri} = await data;
    setImageBase64(imageBase64 as string);
    setUploadUri(uri as string);
    bottomSheetModalRef.current?.close();
  };

  const showDatePicker = () => {
    setOpen(true);
  };

  const onSubmit = (data: any) => {
    console.log('data', data);
    navigation.navigate('Dashboard');
  };

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentPress = () => bottomSheetModalRef.current.present();
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );
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
        <Text style={styles.txt}>Edit Profile</Text>
        <FeaIcon
          name="menu"
          color={theme.colors[ColorLabels.LOGIN_BACKGROUND]}
          size={23}
        />
      </View>
      <KeyboardAwareScrollView
        enableOnAndroid
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
        style={[BaseStyle.flexContainer, Paddings.paddingHorizontalMedium]}>
        <View style={[{alignItems: 'center'}, Margins.mtXl]}>
          <View
            style={[
              styles.mainPic,
              BaseStyle.alignCenter,
              BaseStyle.justifyCenter,
            ]}>
            <Pressable
              onPress={handlePresentPress}
              style={[styles.imageBoxTouchable]}>
              {uploadUri ? (
                <Image source={{uri: uploadUri}} style={styles.imageBox} />
              ) : (
                <Image source={DefaultPic} style={[styles.imageBox]} />
              )}
              <View style={styles.camera}>
                <Image
                  source={CameraIcon}
                  resizeMode="contain"
                  style={styles.camIcon}
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={[Margins.mtLg]}>
          <Text style={[styles.txtLabel, Margins.mbXSm]}>Name</Text>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Name is required',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputPaper
                style={[styles.textInput, Background.white]}
                placeholder={'Name'}
                placeholderTextColor={theme.colors[ColorLabels.GREY]}
                textColor={theme.colors[ColorLabels.BLACK]}
                outlineColor={theme.colors[ColorLabels.GREY]}
                outlineStyle={{borderWidth: 1}}
                value={value}
                onChangeText={text => {
                  const alphabetsOnlyText = alphabetsOnly(text);
                  onChange(alphabetsOnlyText);
                }}
                keyboardType="default"
                returnKeyType="done"
                contentStyle={styles.contentStyle}
                mode="outlined"
                underlineColor={theme.colors[ColorLabels.PRIMARY]}
                activeUnderlineColor={theme.colors[ColorLabels.PRIMARY]}
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text style={{color: theme.colors[ColorLabels.ERROR_ORANGE]}}>
              {errors.name.message}
            </Text>
          )}
        </View>
        <View style={[Margins.mtMd]}>
          <Text style={[styles.txtLabel, Margins.mbXSm]}>Email</Text>
          <Controller
            control={control}
            rules={{
              validate: value => {
                if (!value) {
                  return 'Email is required';
                }
                if (!validateEmail(value)) {
                  return 'Please enter a valid email';
                }
                return true;
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputPaper
                style={[styles.textInput, Background.white]}
                placeholder={'Email'}
                placeholderTextColor={theme.colors[ColorLabels.GREY]}
                textColor={theme.colors[ColorLabels.BLACK]}
                outlineColor={theme.colors[ColorLabels.GREY]}
                underlineColor={theme.colors[ColorLabels.WHITE]}
                activeUnderlineColor={theme.colors[ColorLabels.PRIMARY]}
                value={value}
                onChangeText={onChange}
                keyboardType="default"
                returnKeyType="done"
                autoCapitalize="none"
                contentStyle={styles.contentStyle}
                mode="outlined"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.error}>{errors.email.message}</Text>
          )}
        </View>
        <View style={[Margins.mtMd]}>
          <Text style={[styles.txtLabel, Margins.mbXSm]}>Password</Text>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputPaper
                style={[styles.textInput, Background.white]}
                placeholder={'Password'}
                placeholderTextColor={theme.colors[ColorLabels.GREY]}
                textColor={theme.colors[ColorLabels.BLACK]}
                outlineColor={theme.colors[ColorLabels.GREY]}
                underlineColor={theme.colors[ColorLabels.WHITE]}
                activeUnderlineColor={theme.colors[ColorLabels.PRIMARY]}
                value={value}
                onChangeText={onChange}
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="done"
                secureTextEntry={passwordVisible}
                contentStyle={styles.contentStyle}
                mode="outlined"
                right={
                  <TextInput.Icon
                    icon={passwordVisible ? 'eye' : 'eye-off'}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                    color={theme.colors[ColorLabels.PRIMARY]}
                  />
                }
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.error}>{errors.password.message}</Text>
          )}
        </View>
        <View style={[Margins.mtMd]}>
          <Text style={[styles.txtLabel, Margins.mbXSm]}>Date of Birth</Text>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'DOB',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TouchableOpacity onPress={showDatePicker}>
                <TextInputPaper
                  style={[styles.textInput]}
                  placeholder="Date of Birth"
                  placeholderTextColor={theme.colors[ColorLabels.GREY]}
                  textColor={theme.colors[ColorLabels.BLACK]}
                  outlineColor={theme.colors[ColorLabels.GREY]}
                  underlineColor={theme.colors[ColorLabels.WHITE]}
                  activeUnderlineColor={theme.colors[ColorLabels.PRIMARY]}
                  value={value ? dayjs(value).format('DD/MM/YYYY') : ''}
                  onChangeText={onChange}
                  keyboardType="default"
                  returnKeyType="done"
                  contentStyle={[
                    FontsFamily.regular,
                    {paddingHorizontal: 10, fontSize: 14},
                  ]}
                  right={
                    <TextInput.Icon
                      icon={() => (
                        <MatIcon
                          name="keyboard-arrow-down"
                          size={20}
                          color={theme.colors[ColorLabels.BLACK]}
                        />
                      )}
                      onPress={showDatePicker}
                      style={{marginRight: -10}}
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
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.ERROR_ORANGE],
                  fontSize: fontSizes.sm,
                },
                Margins.mtXsm,
              ]}>
              {errors.dateOfBirth.message}
            </Text>
          )}
          {open && (
            <DatePicker
              modal
              open={open}
              date={date}
              mode="date"
              onConfirm={pickedDate => {
                setOpen(false);
                setDate(pickedDate);
                setValue(
                  'dateOfBirth',
                  dayjs(pickedDate).format('YYYY-MM-DDTHH:mm:ss'),
                  {
                    shouldValidate: true,
                  },
                );
              }}
              onCancel={() => {
                setOpen(false);
              }}
              theme="light"
              maximumDate={new Date()}
              minimumDate={MIN_YEAR}
            />
          )}
        </View>
        <View style={[Margins.mtMd]}>
          <Text style={[styles.txtLabel, Margins.mbXSm]}>Country/Region</Text>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Country/Region is required',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <DropDownComponent
                data={
                  languages
                    ? languages.map(row => ({
                        label: row.label,
                        value: row.value,
                      }))
                    : []
                }
                value={selectedCountry}
                onChange={handleCountrySelect}
                placeholder={`Country/Region`}
                maxHeight={200}
                containerStyle={[
                  {
                    borderColor: theme.colors[ColorLabels.GREY],
                    height: 400,
                    width: 350,
                  },
                ]}
                activeColor={theme.colors[ColorLabels.PRIMARY]}
                search
                mode={'modal'}
              />
            )}
            name="countryRegion"
          />
          {errors.countryRegion && (
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.ERROR_ORANGE],
                  fontSize: fontSizes.sm,
                },
                Margins.mtXsm,
              ]}>
              {errors.countryRegion.message}
            </Text>
          )}
        </View>
        <View style={[Margins.mtMLg, Margins.mbXl, BaseStyle.alignCenter]}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={[
              BaseStyle.justifyCenter,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
              Background.primary,
              {borderRadius: 50, width: '60%'},
            ]}>
            <Text style={styles.submitTxt}>SAVE CHANGES</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        enableDynamicSizing
        backgroundStyle={{backgroundColor: theme.colors[ColorLabels.WHITE]}}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        onDismiss={() => bottomSheetModalRef.current?.close()}>
        <BottomSheetView>
          <View
            style={[
              Margins.mbMd,
              Margins.mtMd,
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BaseStyle.justifySpaceBetween,
              Paddings.paddingHorizontalExtraMedium,
            ]}>
            <Text style={styles.modeltxt}>Profile Photo</Text>
            <AntIcon
              name="closecircle"
              color={theme.colors[ColorLabels.PRIMARY]}
              size={20}
              onPress={() => bottomSheetModalRef.current?.close()}
            />
          </View>
          <ImagePickModal handleSubmit={processImage} />
        </BottomSheetView>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 16,
    fontFamily: FontFamily.SF_SEMIBOLD,
  },
  imageBoxTouchable: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  imageBox: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: theme.colors[ColorLabels.WHITE],
  },
  camera: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: theme.colors[ColorLabels.WHITE],
    padding: 5,
    right: -1,
    bottom: -3,
    elevation: 5,
  },
  mainPic: {
    position: 'relative',
    borderWidth: 0.8,
    borderColor: theme.colors[ColorLabels.PRIMARY],
    width: 125,
    height: 125,
    borderRadius: 100,
  },
  camIcon: {
    width: 25,
    height: 25,
  },
  textInput: {
    minWidth: 294,
    height: 52,
    fontSize: 14,
  },
  contentStyle: {paddingHorizontal: 10, fontSize: 14},
  txtLabel: {
    color: theme.colors[ColorLabels.LOGIN_BLACK],
    fontFamily: FontFamily.SF_SEMIBOLD,
    fontSize: fontSizes.smd,
  },
  submitTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.smm,
    fontFamily: FontFamily.SF_MEDIUM,
    textAlign: 'center',
  },
  modeltxt: {
    fontSize: 15,
    color: theme.colors[ColorLabels.PRIMARY],
    textAlign: 'left',
    fontFamily: FontFamily.SF_SEMIBOLD,
  },
});
