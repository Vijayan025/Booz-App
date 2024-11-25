import {StyleSheet} from 'react-native';
import {ColorLabels} from '../common/theme';

export const ProgressBarStyles = StyleSheet.create({
  base: {
    height: 12,
    backgroundColor: ColorLabels.WHITE,
    borderWidth: 1,
    borderColor: ColorLabels.BLACK,
    position: 'relative',
    borderRadius: 6,
    transform: [{rotateY: '180deg'}],
  },
  baseForSmall: {
    height: 12,
    backgroundColor: ColorLabels.WHITE,
    borderWidth: 1,
    borderColor: ColorLabels.BLACK,
    position: 'relative',
    transform: [{rotateY: '180deg'}],
    borderRadius: 1,
  },
  truncated: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});
export const ProgressBarForLoan = StyleSheet.create({
  baseOne: {
    height: 10,
    backgroundColor: ColorLabels.WHITE,
    borderWidth: 1,
    borderColor: '#797979',
    position: 'relative',
    borderRadius: 6,
    transform: [{rotateX: '180deg'}],
  },
  truncated: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});
export const ProgressBarForLoanSecond = StyleSheet.create({
  baseTwo: {
    height: 10,
    backgroundColor: ColorLabels.WHITE,
    borderWidth: 1,
    borderColor: '#797979',
    position: 'relative',
    borderRadius: 6,
    transform: [{rotateX: '180deg'}],
  },
  truncated: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});
