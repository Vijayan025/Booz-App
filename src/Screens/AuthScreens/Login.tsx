import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ColorLabels, theme} from '../../common/theme';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {BorderStyle} from '../../styles/Border';
import {fontSizes} from '../../styles/fonts';
import {useNavigationSource} from '../../common/Common/NavigationSource';
import {FontFamily} from '../../types/Fonts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Background} from '../../styles/Background';
import AppIcon from '../../../assets/images/logo.png';
import {Margins} from '../../styles/Margins';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Controller, useForm} from 'react-hook-form';
import {validateEmail} from '../../common/utils';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {TextInput} from 'react-native-paper';
import {AuthScreens} from '../../common/routes/auth/auth.screens';
import {useNavigation} from '@react-navigation/native';
import {useLoginNavigationSource} from '../../common/Common/LoginNavigationSource';
import Checkbox from '../../common/ui/CheckBox';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: 'vijayan.p@yaacreations.com',
      password: 'test',
    },
  });
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [isRetailChecked, setIsRetailChecked] = useState(false);
  const {setNavigationSource}: any = useNavigationSource();
  const {setLoginNavigationSource}: any = useLoginNavigationSource();

  const navigation = useNavigation();

  const onSubmit = (data: any) => {
    setNavigationSource('Login');
    if (isRetailChecked) {
      setLoginNavigationSource('RETAIL');
    } else {
      setLoginNavigationSource('');
    }
  };
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.loginBackground]}>
      <StatusBar
        backgroundColor={theme.colors[ColorLabels.LOGIN_BACKGROUND]}
        barStyle="dark-content"
      />
      <View style={[BaseStyle.alignCenter, Margins.mtXMd]}>
        <Image source={AppIcon} resizeMode="contain" style={styles.img} />
      </View>
      <Text
        style={[styles.txt, BaseStyle.textCenter, Margins.mbSLg, Margins.mtLg]}>
        Login Now
      </Text>
      <KeyboardAwareScrollView
        enableOnAndroid
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
        style={[BaseStyle.flexContainer]}>
        <View style={[Paddings.paddingHorizontalMedium]}>
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
                textColor={ColorLabels.BLACK}
                outlineColor={theme.colors[ColorLabels.GREY]}
                underlineColor={theme.colors[ColorLabels.WHITE]}
                activeUnderlineColor={theme.colors[ColorLabels.PRIMARY]}
                value={value}
                onChangeText={onChange}
                keyboardType="default"
                returnKeyType="done"
                autoCapitalize="none"
                contentStyle={styles.contentStyle}
                label="Email"
                mode="flat"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.error}>{errors.email.message}</Text>
          )}
        </View>
        <View style={[Paddings.paddingHorizontalMedium, Margins.mtMd]}>
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
                textColor={ColorLabels.BLACK}
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
                label="Password"
                mode="flat"
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
        <View
          style={[
            Paddings.paddingHorizontalMedium,
            Margins.mtMd,
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
          ]}>
          <Checkbox
            checked={isRetailChecked}
            onToggle={() => setIsRetailChecked(!isRetailChecked)}
            uncheckedColor={theme.colors[ColorLabels.GREY]}
            color={theme.colors[ColorLabels.PRIMARY]}
            size={24}
          />
          <Text style={[Margins.mlSm, styles.checkboxLabel]}>
            Retail Login (for ui purpose)
          </Text>
        </View>
        <View style={[Paddings.paddingHorizontalMedium, Margins.mtMLg]}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={[
              BaseStyle.justifyCenter,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
              Background.primary,
              {borderRadius: 50},
            ]}>
            <Text style={styles.submitTxt}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            BaseStyle.alignEnd,
            Paddings.paddingHorizontalMedium,
            Margins.mtMd,
            Margins.mrMd,
          ]}>
          <TouchableOpacity
            style={[Margins.mtSm]}
            onPress={() =>
              navigation.navigate(AuthScreens.forgotPassword.routeName)
            }>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifyCenter,
            Margins.mtXMd,
          ]}>
          <View style={styles.line} />
          <Text style={[styles.orText, BaseStyle.textCenter]}>Or</Text>
          <View style={styles.line} />
        </View>
        <View style={[Paddings.paddingHorizontalMedium, Margins.mtMLg]}>
          <TouchableOpacity
            onPress={() => navigation.navigate(AuthScreens.signup.routeName)}
            style={[
              BaseStyle.justifyCenter,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
              Background.white,
              {borderRadius: 50, elevation: 2},
            ]}>
            <Text style={styles.regText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  img: {width: 168, height: 186},
  txt: {
    color: theme.colors[ColorLabels.LOGIN_BLACK],
    fontFamily: FontFamily.SF_SEMIBOLD,
    fontSize: fontSizes.lg,
  },
  textInput: {
    minWidth: 294,
    borderColor: theme.colors[ColorLabels.GREY],
    borderWidth: 0.3,
    height: 52,
    fontSize: 14,
  },
  contentStyle: {paddingHorizontal: 10, fontSize: 14},
  error: {
    color: theme.colors[ColorLabels.ERROR_ORANGE],
    fontSize: 13,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  submitTxt: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: fontSizes.smm,
    fontFamily: FontFamily.SF_MEDIUM,
    textAlign: 'center',
  },
  regText: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: fontSizes.smm,
    fontFamily: FontFamily.SF_MEDIUM,
    textAlign: 'center',
  },
  forgot: {
    color: theme.colors[ColorLabels.MEDIUM_GREY],
    fontSize: fontSizes.sm,
    fontFamily: FontFamily.SF_MEDIUM,
  },
  line: {
    width: '20%',
    borderBottomColor: theme.colors[ColorLabels.MEDIUM_GREY],
    borderStyle: 'dashed',
    borderBottomWidth: 0.7,
  },
  orText: {
    color: theme.colors[ColorLabels.MEDIUM_GREY],
    fontSize: fontSizes.sm,
    fontFamily: FontFamily.SF_MEDIUM,
    width: '10%',
  },
  checkboxLabel: {
    fontSize: fontSizes.sm,
    color: theme.colors[ColorLabels.MEDIUM_GREY],
    fontFamily: FontFamily.SF_MEDIUM,
  },
});
