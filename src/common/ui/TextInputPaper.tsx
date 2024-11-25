import React from 'react';
import {TextInput as PaperTextInput, TextInputProps} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {ColorLabels, theme} from '../theme';
import {FontFamily} from '../../types/Fonts';
import {FontsFamily} from '../../styles/fonts';
interface PaperTextInputProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  style: any[];
  mode?: 'flat' | 'outlined';
  primary?: boolean;
  disabled?: boolean;
  right?: any;
  contentStyle?: any;
  outlineStyle?: any;
}

const primaryTheme = {
  colors: {
    primary: theme.colors[ColorLabels.LIGHT_BLACK],
    outline: theme.colors.primary,
    background: theme.colors.white,
  },
};

const accentTheme = {
  colors: {
    primary: theme.colors.primary,
    outline: theme.colors.primary,
    background: theme.colors.white,
  },
};

const TextInputPaper = React.forwardRef(
  (
    {
      label,
      value,
      onChangeText,
      placeholder,
      style = [],
      mode = 'outlined',
      primary = true,
      disabled = false,
      right,
      outlineStyle,
      contentStyle,
      ...props
    }: PaperTextInputProps,
    ref,
  ) => {
    return (
      <>
        <PaperTextInput
          label={label}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.slateGray}
          value={value}
          contentStyle={contentStyle}
          onChangeText={onChangeText}
          style={[...style, styles.height]}
          mode={mode}
          outlineStyle={[{borderWidth: 0.5, borderRadius: 4}, outlineStyle]}
          theme={primary ? primaryTheme : accentTheme}
          {...props}
          ref={ref as any}
          disabled={disabled}
          right={right}
        />
      </>
    );
  },
);

export default TextInputPaper;

const styles = StyleSheet.create({
  borderRadius4: {borderRadius: 4, borderWidth: 1},
  inputBorder: {borderWidth: 1},
  height: {height: 44},
});
