import React from 'react';
import {View} from 'react-native';
import {
  RadioButton as PaperRadioButton,
  RadioButtonProps,
} from 'react-native-paper';

interface CustomRadioButtonProps extends RadioButtonProps {
  value: string;
  selected: boolean;
  disabled?: boolean;
  onValueChange: (value: string) => void;
}

const RadioButton = ({
  value,
  selected,
  onValueChange,
  disabled,
  ...props
}: CustomRadioButtonProps) => {
  const handlePress = () => {
    onValueChange(value);
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <PaperRadioButton.Android
        value={value}
        disabled={disabled}
        status={selected ? 'checked' : 'unchecked'}
        onPress={handlePress}
        {...props}
      />
    </View>
  );
};

export default RadioButton;
