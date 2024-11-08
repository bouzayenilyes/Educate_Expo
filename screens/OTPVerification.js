import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { COLORS } from '../constants';
import { OtpInput } from "react-native-otp-entry";
import Button from "../components/Button";
import { useTheme } from '../theme/ThemeProvider';

const OTPVerification = ({ navigation }) => {
  const [time, setTime] = useState(55);
  const { colors, dark } = useTheme();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header title="Forgot Password" />
        <ScrollView>
          <Text style={[styles.title, {
            color: dark ? COLORS.white : COLORS.black
          }]}>Code has been send to +1 111 ******99</Text>
          <OtpInput 
              numberOfDigits={4}
              onTextChange={(text) => console.log(text)} 
              focusColor={COLORS.primary}
              focusStickBlinkingDuration={500}
              onFilled={(text) => console.log(`OTP is ${text}`)}
              theme={{
                pinCodeContainerStyle: {
                  backgroundColor: dark ? COLORS.dark2 : COLORS.secondaryWhite,
                  borderColor: dark ? COLORS.gray : COLORS.secondaryWhite,
                  borderWidth: .4,
                  borderRadius: 10,
                  height: 58,
                  width: 58,
                },
                pinCodeTextStyle: {
                  color: dark ? COLORS.white : COLORS.black,
                }
              }}
              />
          <View style={styles.codeContainer}>
            <Text style={[styles.code, {
              color: dark ? COLORS.white : COLORS.greyscale900
            }]}>Resend code in</Text>
            <Text style={styles.time}>{`  ${time}  `}</Text>
            <Text style={[styles.code, {
              color: dark ? COLORS.white : COLORS.greyscale900
            }]}>s</Text>
          </View>
        </ScrollView>
        <Button
          title="Verify"
          filled
          style={styles.button}
          onPress={() => { navigation.navigate("CreateNewPassword") }}
        />
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
    padding: 16,
    backgroundColor: COLORS.white
  },
  title: {
    fontSize: 18,
    fontFamily: "medium",
    color: COLORS.greyscale900,
    textAlign: "center",
    marginVertical: 54
  },
  OTPStyle: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    borderRadius: 8,
    height: 58,
    width: 58,
    backgroundColor: COLORS.secondaryWhite,
    borderBottomColor: "gray",
    borderBottomWidth: .4,
    borderWidth: .4,
    borderColor: "gray"
  },
  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
    justifyContent: "center"
  },
  code: {
    fontSize: 18,
    fontFamily: "medium",
    color: COLORS.greyscale900,
    textAlign: "center"
  },
  time: {
    fontFamily: "medium",
    fontSize: 18,
    color: COLORS.primary
  },
  button: {
    borderRadius: 32
  }
})

export default OTPVerification