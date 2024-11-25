import {configureFonts, DefaultTheme} from 'react-native-paper';
import {FontFamily} from '../types/Fonts';

const _fontConfig = {
  default: {
    regular: {
      fontFamily: FontFamily.SF_REGULAR,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: FontFamily.SF_MEDIUM,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: FontFamily.SF_LIGHT,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: FontFamily.SF_THIN,
      fontWeight: 'normal',
    },
  },
};

const fontConfig = {
  ios: _fontConfig,
  android: _fontConfig,
};

export enum ColorLabels {
  PRIMARY = 'primary',
  ERROR_ORANGE = 'errorOrange',
  LOGIN_BLACK = 'loginBlack',
  SECONDARY = 'secondary',
  LOGIN_BLUE = 'loginBlue',
  GREY = 'grey',
  BLACK = 'black',
  MEDIUM_GREY = 'mediumGrey',
  WHITE = 'white',
  LIGHT_GREY = 'lightGrey',
  LOGIN_BACKGROUND = 'loginBackground',
  BOTTOM_TAB_LIGHT = 'bottomTabLight',
  BOTTOM_TAB_DARK = 'bottomTabDark',
  STAR_SELECT_COLOR = 'starSelectColor',
  START_UNSELECT_COLOR = 'starUnselectColor',
  PRODUCT_GREY = 'productGrey',
  BUTTON_RED = 'buttonRed',
  BUTTON_GREEN = 'buttonGreen',
  DRAWER_GREY_COLOR = 'drawerGreyColor',
  DRAWER_BORDER_COLOR = 'drawerBorderColor',
}

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig as any),
  roundness: 2,
  dark: true,
  mode: 'adaptive',
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    [ColorLabels.PRIMARY]: '#07214B',
    [ColorLabels.ERROR_ORANGE]: '#F99117',
    [ColorLabels.LOGIN_BLACK]: '#35373B',
    [ColorLabels.SECONDARY]: '#E5E8EE',
    [ColorLabels.LOGIN_BLUE]: '#0866FF',
    [ColorLabels.GREY]: '#CDD5DF',
    [ColorLabels.BLACK]: '#050409',
    [ColorLabels.MEDIUM_GREY]: '#35373B',
    [ColorLabels.WHITE]: '#FFFFFF',
    [ColorLabels.LIGHT_GREY]: '#f9f9f9',
    [ColorLabels.LOGIN_BACKGROUND]: '#fafafa',
    [ColorLabels.BOTTOM_TAB_LIGHT]: '#929292',
    [ColorLabels.BOTTOM_TAB_DARK]: '#07214B',
    [ColorLabels.STAR_SELECT_COLOR]: '#F4BF50',
    [ColorLabels.START_UNSELECT_COLOR]: '#B7C3CF',
    [ColorLabels.PRODUCT_GREY]: '#9ca6b7',
    [ColorLabels.BUTTON_RED]: '#F41400',
    [ColorLabels.BUTTON_GREEN]: '#15B800',
    [ColorLabels.DRAWER_GREY_COLOR]: '#6C7072',
    [ColorLabels.DRAWER_BORDER_COLOR]: '#E2E4E5',
  },
};

export {theme};

export interface ColorsInterface {
  [ColorLabels.PRIMARY]: string;
  [ColorLabels.ERROR_ORANGE]: string;
  [ColorLabels.LOGIN_BLACK]: string;
  [ColorLabels.SECONDARY]: string;
  [ColorLabels.LOGIN_BLUE]: string;
  [ColorLabels.GREY]: string;
  [ColorLabels.BLACK]: string;
  [ColorLabels.MEDIUM_GREY]: string;
  [ColorLabels.WHITE]: string;
  [ColorLabels.LIGHT_GREY]: string;
  [ColorLabels.LOGIN_BACKGROUND]: string;
  [ColorLabels.BOTTOM_TAB_LIGHT]: string;
  [ColorLabels.BOTTOM_TAB_DARK]: string;
  [ColorLabels.STAR_SELECT_COLOR]: string;
  [ColorLabels.START_UNSELECT_COLOR]: string;
  [ColorLabels.PRODUCT_GREY]: string;
  [ColorLabels.DRAWER_GREY_COLOR]: string;
  [ColorLabels.DRAWER_BORDER_COLOR]: string;
}

export interface ThemeInterface {
  colors: ColorsInterface;
}
