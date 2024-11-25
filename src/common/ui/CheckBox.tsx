import * as React from 'react';
import {Checkbox as RNPCheckbox} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

interface Props {
  uncheckedColor?: string;
  checked: boolean;
  onToggle: () => void;
  accessibilityLabel?: string;
  style?: any;
  color?: string;
  size?: number;
}

const Checkbox: React.FC<Props> = ({
  uncheckedColor,
  accessibilityLabel,
  checked,
  onToggle,
  color,
  size,
}) => {
  const checkboxStyle = {
    ...styles.checkbox,
    width: size || styles.checkbox.width,
    height: size || styles.checkbox.height,
  };

  return (
    <RNPCheckbox.Android
      uncheckedColor={uncheckedColor}
      status={checked ? 'checked' : 'unchecked'}
      onPress={onToggle}
      accessibilityLabel={accessibilityLabel}
      color={color}
      style={checkboxStyle}
    />
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Checkbox;
