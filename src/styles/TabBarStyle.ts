import {StyleSheet} from 'react-native';
import {ColorLabels, theme} from '../common/theme';

export const TabBarStyle = StyleSheet.create({
  default: {
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    position: 'relative',
    elevation: 0,
    shadowOpacity: 0,
  },
  borderView: {
    position: 'absolute',
    left: '50%',
    top: '35%',
    width: 2,
    height: 20,
    backgroundColor: theme.colors[ColorLabels.BLACK],
    zIndex: 99999,
  },
});
