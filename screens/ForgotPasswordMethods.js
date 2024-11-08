import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons, illustrations } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Button from '../components/Button';
import { useTheme } from '../theme/ThemeProvider';

const ForgotPasswordMethods = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState('sms');
  const { colors, dark } = useTheme();

  const handleMethodPress = (method) => {
    setSelectedMethod(method);
  };
  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header title="Forgot Password" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.passwordContainer}>
            <Image
              source={ dark ? illustrations.passwordDark : illustrations.password}
              resizeMode='contain'
              style={styles.password}
            />
          </View>
          <Text style={[styles.title, { 
            color: dark ? COLORS.white : COLORS.greyscale900 
          }]}>Select which contact details
            should we use to reset your password</Text>
          <TouchableOpacity
            style={[
              styles.methodContainer,
              selectedMethod === 'sms' && { borderColor: COLORS.primary, borderWidth: 2 }, // Customize the border color for SMS
            ]}
            onPress={() => handleMethodPress('sms')}>
            <View style={styles.iconContainer}>
              <Image
                source={icons.chat}
                resizeMode='contain'
                style={styles.icon}/>
            </View>
            <View>
              <Text style={styles.methodTitle}>via SMS:</Text>
              <Text style={[styles.methodSubtitle, { 
                color: dark? COLORS.white : COLORS.black
              }]}>+1 111 ******99</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.methodContainer,
              selectedMethod === 'email' && { borderColor: COLORS.primary, borderWidth: 2 }, // Customize the border color for Email
            ]}
            onPress={() => handleMethodPress('email')}
          >
            <View style={styles.iconContainer}>
              <Image
                source={icons.email}
                resizeMode='contain'
                style={styles.icon}/>
            </View>
            <View>
              <Text style={styles.methodTitle}>via Email:</Text>
              <Text style={[styles.methodSubtitle, { 
                color: dark? COLORS.white : COLORS.black
              }]}>and***ley@yourdomain.com</Text>
            </View>
          </TouchableOpacity>
          <Button
            title="Continue"
            filled
            style={styles.button}
            onPress={() =>
              navigation.navigate(
                selectedMethod === "sms"
                  ? 'ForgotPasswordPhoneNumber'
                  : 'ForgotPasswordEmail'
              )
            }
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16
  },
  password: {
    width: 276,
    height: 250
  },
  passwordContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 32
  },
  title: {
    fontSize: 18,
    fontFamily: "medium",
    color: COLORS.greyscale900
  },
  methodContainer: {
    width: SIZES.width - 32,
    height: 112,
    borderRadius: 32,
    borderColor: "gray",
    borderWidth: .3,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 22
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.tansparentPrimary,
    marginHorizontal: 16
  },
  icon: {
    width: 32,
    height: 32,
    tintColor: COLORS.primary
  },
  methodTitle: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.greyscale600
  },
  methodSubtitle: {
    fontSize: 16,
    fontFamily: "bold",
    color: COLORS.black,
    marginTop: 12
  },
  button: {
    borderRadius: 32,
    marginVertical: 22
  }
})

export default ForgotPasswordMethods