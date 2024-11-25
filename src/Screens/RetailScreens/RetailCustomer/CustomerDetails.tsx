import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BaseStyle} from '../../../styles/Base';
import {Background} from '../../../styles/Background';
import {ColorLabels, theme} from '../../../common/theme';
import {Paddings} from '../../../styles/Padding';
import {Margins} from '../../../styles/Margins';
import {useNavigation} from '@react-navigation/native';
import FeaIcon from 'react-native-vector-icons/Feather';
import CustomerIcon from '../../../../assets/images/customerIcon.png';
import {FontFamily} from '../../../types/Fonts';
import CustomerDetailCard from './CustomerDetailCard';

const CustomerDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.loginBackground]}>
      <StatusBar
        backgroundColor={theme.colors[ColorLabels.LOGIN_BACKGROUND]}
        barStyle="dark-content"
      />
      <View
        style={[
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
          Paddings.paddingHorizontalMedium,
          Margins.mtXMd,
        ]}>
        <FeaIcon
          name="menu"
          color={theme.colors[ColorLabels.BLACK]}
          size={23}
          onPress={() => navigation.getParent('LeftDrawer').openDrawer()}
        />
        <Text style={styles.txt}>CUSTOMER DETAILS</Text>
        <Image
          source={CustomerIcon}
          resizeMode="contain"
          style={{width: 20, height: 20}}
        />
      </View>
      <View style={[BaseStyle.flexContainer]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomerDetailCard />
          <CustomerDetailCard />
          <CustomerDetailCard />
          <CustomerDetailCard />
          <CustomerDetailCard />
          <CustomerDetailCard />
          <CustomerDetailCard />
          <CustomerDetailCard />
          <CustomerDetailCard />
          <CustomerDetailCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CustomerDetails;

const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 14,
    fontFamily: FontFamily.SF_MEDIUM,
    letterSpacing: 1,
  },
});
