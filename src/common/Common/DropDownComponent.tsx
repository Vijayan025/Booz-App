import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {FontFamily} from '../../types/Fonts';
import {ColorLabels, theme} from '../../common/theme';

interface ReusableCardProps {
  data?: any;
  value?: any;
  onChange?: any;
  placeholder?: any;
  renderItem?: any;
  maxHeight?: any;
  labelField?: any;
  valueField?: any;
  containerStyle?: any;
  activeColor?: any;
  search?: any;
  mode?: any;
  onChangeText?: any;
  dropdownPosition?: any;
  disabled?: boolean;
  white?: any;
  add?: any;
}

const DropDownComponent: FC<ReusableCardProps> = ({
  data,
  value,
  onChange,
  placeholder,
  renderItem,
  maxHeight = 200,
  labelField = 'label',
  valueField = 'value',
  containerStyle,
  activeColor,
  search,
  mode,
  onChangeText,
  dropdownPosition,
  disabled = false,
  white = false,
  add = false,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);
  const handleSelect = (item: any) => {
    setSelectedValue(item);
    onChange(item);
  };

  const renderDropdownItem = (item: {
    value: any;
    label:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined;
  }) => {
    const selectedItem = item.value === selectedValue;
    return (
      <View style={styles.item}>
        <Text
          style={
            item.value === selectedValue?.value || selectedItem
              ? {
                  color: 'white',
                  fontSize: 13,
                  fontFamily: FontFamily.SF_MEDIUM,
                }
              : styles.textItem
          }>
          {item.label}
        </Text>
        {item.value === selectedValue?.value && (
          <IonIcon name={'checkmark-circle'} color={'white'} size={18} />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={[
        styles.dropdown,
        {
          borderColor: white
            ? theme.colors[ColorLabels.WHITE]
            : theme.colors[ColorLabels.GREY],
          backgroundColor: theme.colors[ColorLabels.WHITE],
        },
      ]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={[
        styles.selectedTextStyle,
        {
          color: white
            ? theme.colors[ColorLabels.WHITE]
            : theme.colors[ColorLabels.BLACK],
          fontFamily: white ? FontFamily.SF_SEMIBOLD : FontFamily.SF_MEDIUM,
        },
      ]}
      data={
        data
          ? data.map((row: {label: any; value: any; id: any}) => ({
              label: row.label,
              value: row.value,
              id: row.id,
            }))
          : []
      }
      dropdownPosition={dropdownPosition || 'bottom'}
      maxHeight={maxHeight}
      labelField={labelField}
      valueField={valueField}
      placeholder={placeholder}
      value={selectedValue}
      onChange={handleSelect}
      renderItem={renderItem || renderDropdownItem}
      containerStyle={[containerStyle]}
      activeColor={activeColor}
      search={search}
      mode={mode}
      searchPlaceholder="Search.."
      flatListProps={{
        initialNumToRender: data.length,
        initialScrollIndex: 0,
      }}
      autoScroll
      onChangeText={onChangeText}
      inputSearchStyle={{color: theme.colors[ColorLabels.BLACK]}}
      showsVerticalScrollIndicator={false}
      disable={disabled}
      iconColor={white ? 'white' : 'black'}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 44,
    // borderColor: theme.colors[ColorLabels.GREY],
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 10,
    color: theme.colors[ColorLabels.BLACK],
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 13,
    color: theme.colors[ColorLabels.BLACK],
    fontFamily: FontFamily.SF_REGULAR,
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: FontFamily.SF_REGULAR,
  },
  placeholderStyle: {
    fontSize: 14,
    color: theme.colors[ColorLabels.GREY],
    fontFamily: FontFamily.SF_REGULAR,
  },
});

export default DropDownComponent;
