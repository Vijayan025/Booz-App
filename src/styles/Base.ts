import {StyleSheet} from 'react-native';
import {fontSizes} from './fonts';

export const BaseStyle = StyleSheet.create({
  dFlex: {display: 'flex'},
  flexRow: {flexDirection: 'row'},
  rowReverse: {flexDirection: 'row-reverse'},
  flexColumn: {flexDirection: 'column'},
  flexContainer: {flex: 1},
  justifyCenter: {justifyContent: 'center'},
  justifyStart: {justifyContent: 'flex-start'},
  justifyEnd: {justifyContent: 'flex-end'},
  justifySpaceBetween: {justifyContent: 'space-between'},
  justifySpaceAround: {justifyContent: 'space-around'},
  justifyEvenly: {justifyContent: 'space-evenly'},
  alignCenter: {alignItems: 'center', alignContent: 'center'},
  alignStart: {alignItems: 'flex-start', alignContent: 'flex-start'},
  alignEnd: {alignItems: 'flex-end', alignContent: 'flex-end'},
  textCenter: {textAlign: 'center'},
  textLeft: {textAlign: 'left'},
  textRight: {textAlign: 'right'},
  fontMd: {fontSize: fontSizes.md},
  fontLg: {fontSize: fontSizes.lg},
  textInput: {
    minWidth: 278,
    borderColor: 'black',
    height: 47,
    borderRadius: 40,
  },
  blockTextInput: {height: 47, borderColor: 'black'},
  buttonText: {fontSize: 20, textTransform: 'uppercase'},
});
