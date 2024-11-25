import {StyleSheet} from 'react-native';
import {theme} from '../common/theme';
import {FontFamily} from '../types/Fonts';

export const fontSizes = {
  md: 14,
  lg: 20,
  mlg: 18,
  xlg: 22,
  xxmlg: 24,
  xxlg: 28,
  sm: 12,
  smm: 13,
  xxsm: 11,
  xs: 8,
  smd: 16,
  smmd: 17,
  xsm: 10,
  xxl: 42,
};

export const TextStyle = StyleSheet.create({
  upperCase: {textTransform: 'uppercase'},
  capitalize: {textTransform: 'capitalize'},
  textCenter: {textAlign: 'center', textAlignVertical: 'center'},
  copyRightText: {color: theme.colors.white, opacity: 0.45},
});
export const FontsFamily = StyleSheet.create({
  regular: {
    fontFamily: FontFamily.SF_REGULAR,
    fontWeight: '400',
  },
  medium: {
    fontFamily: FontFamily.SF_MEDIUM,
    fontWeight: '500',
  },
  light: {
    fontFamily: FontFamily.SF_LIGHT,
    fontWeight: '200',
  },
  thin: {
    fontFamily: FontFamily.SF_THIN,
    fontWeight: '300',
  },
  bold: {
    fontFamily: FontFamily.SF_BOLD,
    fontWeight: '600',
  },
});
