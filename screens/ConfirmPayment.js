import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, icons, illustrations } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { OtpInput } from "react-native-otp-entry";
import { useTheme } from '../theme/ThemeProvider';
import Button from '../components/Button';

const ConfirmPayment = ({ navigation }) => {
  const { colors, dark } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(false)}>
          <View style={[styles.modalContainer]}>
            <View style={[styles.modalSubContainer, {
              backgroundColor: dark ? COLORS.dark2 : COLORS.secondaryWhite
            }]}>
              <View style={styles.backgroundIllustration}>
                <Image
                  source={illustrations.background}
                  resizeMode='contain'
                  style={styles.modalIllustration}
                />
                <Image
                  source={icons.check}
                  resizeMode='contain'
                  style={styles.editPencilIcon}
                />
              </View>
              <Text style={styles.modalTitle}>Enroll Course Successful!</Text>
              <Text style={[styles.modalSubtitle, {
                color: dark ? COLORS.secondaryWhite : COLORS.greyscale900
              }]}>
                You have successfully made payment and enrolled the course.
              </Text>

              <Button
                title="View Course"
                filled
                onPress={() => {
                  setModalVisible(false)
                  navigation.navigate("CourseDetails")
                }}
                style={{
                  width: "100%",
                  marginTop: 12
                }}
              />
              <Button
                title="View E-Receipt"
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("EReceipt");
                }}
                textColor={dark ? COLORS.white : COLORS.primary}
                style={{
                  width: "100%",
                  marginTop: 12,
                  backgroundColor: dark ? COLORS.dark3 : COLORS.transparentTertiary,
                  borderColor: dark ? COLORS.dark3 : COLORS.transparentTertiary
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header title="Enroll Course" />
        <View style={styles.containerView}>
          <Text style={[styles.title, {
            color: dark ? COLORS.secondaryWhite : COLORS.greyscale900
          }]}>
            Enter your PIN to confirm payment
          </Text>
          <View style={styles.optContainer}>
            <OtpInput
              numberOfDigits={4}
              onTextChange={(text) => console.log(text)}
              focusColor={COLORS.primary}
              focusStickBlinkingDuration={500}
              onFilled={(text) => console.log(`OTP is ${text}`)}
              theme={{
                pinCodeContainerStyle: {
                  backgroundColor: dark ? COLORS.dark2 : COLORS.secondaryWhite,
                  borderColor: dark ? COLORS.gray3 : COLORS.secondaryWhite,
                  borderWidth: dark ? 0.4 : 1,
                  borderRadius: 10,
                  height: 58,
                  width: 58,
                },
                pinCodeTextStyle: {
                  color: dark ? COLORS.white : COLORS.black,
                }
              }}
            />
          </View>
          <Button
            title="Continue"
            filled
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>
      {renderModal()}
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
  containerView: {
    marginVertical: 16,
    flex: 1,
    justifyContent: "center",
    marginBottom: 170
  },
  title: {
    fontSize: 16,
    fontFamily: "regular",
    color: COLORS.black,
    marginVertical: 16,
    textAlign: "center"
  },
  optContainer: {
    marginVertical: 64
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: "bold",
    color: COLORS.primary,
    textAlign: "center",
    marginVertical: 12
  },
  modalSubtitle: {
    fontSize: 16,
    fontFamily: "regular",
    color: COLORS.black,
    textAlign: "center",
    marginVertical: 12,
    marginHorizontal: 16
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalSubContainer: {
    height: 490,
    width: SIZES.width * 0.86,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  backgroundIllustration: {
    height: 150,
    width: 150,
    marginVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    zIndex: -999
  },
  modalIllustration: {
    height: 150,
    width: 150,
  },
  modalInput: {
    width: "100%",
    height: 52,
    backgroundColor: COLORS.transparentTertiary,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginVertical: 12
  },
  editPencilIcon: {
    width: 42,
    height: 42,
    tintColor: COLORS.white,
    zIndex: 99999,
    position: "absolute",
    top: 54,
    left: 58,
  }
})

export default ConfirmPayment