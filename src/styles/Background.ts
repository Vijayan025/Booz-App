import {StyleSheet} from 'react-native';
import {ColorLabels, theme} from '../common/theme';

export const Background = StyleSheet.create({
  primary: {backgroundColor: theme.colors.primary},
  white: {backgroundColor: theme.colors.white},
  black: {
    backgroundColor: theme.colors[ColorLabels.BLACK],
  },
  loginBackground: {
    backgroundColor: theme.colors[ColorLabels.LOGIN_BACKGROUND],
  },
  btnRed: {
    backgroundColor: theme.colors[ColorLabels.BUTTON_RED],
  },
  btnGreen: {
    backgroundColor: theme.colors[ColorLabels.BUTTON_GREEN],
  },
});
