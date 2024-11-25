import {theme} from '../common/theme';

export const ButtonLabelSize = {
  lg: 20,
};

export enum ButtonStyleLabels {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const ButtonLabelStyle = {
  [ButtonStyleLabels.PRIMARY]: {color: theme.colors.loginText},
};

type ButtonLabelStyleType = typeof ButtonLabelStyle;

export const getButtonStyle = (type: keyof ButtonLabelStyleType) => ({
  ...ButtonLabelStyle[type],
  fontSize: ButtonLabelSize.lg,
});
