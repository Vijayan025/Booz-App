import {StyleSheet} from 'react-native';
import {ColorLabels, theme} from '../common/theme';

export const InputBoxStyle = StyleSheet.create({
  otpBase: {
    color: theme.colors.black,
  },
  otpInputPrimary: {
    borderColor: theme.colors[ColorLabels.WHITE],
    backgroundColor: theme.colors[ColorLabels.LIGHT_GREY],
    borderBottomColor: theme.colors[ColorLabels.PRIMARY],
  },
  otpInputHighlighted: {
    borderBottomWidth: 2,
  },
  otpInputAccent: {
    backgroundColor: theme.colors.white,
  },
});
