import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

const PaymentMethodItem = ({ checked, onPress, title, icon, tintColor }) => {
  const { dark } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container,
       Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow, 
       { backgroundColor: dark ? COLORS.dark2 : COLORS.white }]}>
      <View style={styles.rightContainer}>
        <Image
          source={icon}
          resizeMode='contain'
          style={[styles.icon, { 
            tintColor: tintColor
          }]}
        />
        <View>
          <Text style={[styles.title, { 
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>{title}</Text>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={{ marginLeft: 8 }}>
          <View style={styles.roundedChecked}>
            {checked && <View style={styles.roundedCheckedCheck} />}
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    height: 74,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 26,
    width: 26,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: 'bold',
    color: COLORS.greyscale900,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundedChecked: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  roundedCheckedCheck: {
    height: 10,
    width: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 999,
  },
  androidShadow: {
    elevation: 1,
  },
  iosShadow: {
    shadowColor: 'rgba(4, 6, 15, 0.05)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
});

export default PaymentMethodItem;