import { View, Text, StyleSheet, ScrollView, Image, Alert, TouchableWithoutFeedback, Modal } from 'react-native';
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, icons, illustrations } from '../constants';
import Header from '../components/Header';
import { reducer } from '../utils/reducers/formReducers';
import { validateInput } from '../utils/actions/formActions';
import Input from '../components/Input';
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import { useTheme } from '../theme/ThemeProvider';

const isTestMode = true

const initialState = {
  inputValues: {
    email: isTestMode ? '**********' : '',
    newEmail: isTestMode ? '**********' : '',
  },
  inputValidities: {
    email: false,
    newEmail: false,
  },
  formIsValid: false,
}


const ChangeEmail = ({ navigation }) => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { colors, dark } = useTheme();

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue)
      dispatchFormState({ inputId, validationResult: result, inputValue })
    },
    [dispatchFormState]
  )

  useEffect(() => {
    if (error) {
      Alert.alert('An error occured', error)
    }
  }, [error])
   
  // Render modal
  const renderModal = () => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <TouchableWithoutFeedback
                onPress={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={[styles.modalSubContainer, { backgroundColor: dark ? COLORS.dark2 : COLORS.white }]}>
                        <Image
                            source={illustrations.passwordSuccess}
                            resizeMode='contain'
                            style={styles.modalIllustration}
                        />
                        <Text style={styles.modalTitle}>Congratulations!</Text>
                        <Text style={styles.modalSubtitle}>Your account is ready to use. You will be redirected to the Home page in a few seconds..</Text>
                        <Button
                            title="Continue"
                            filled
                            onPress={() => {
                                setModalVisible(false)
                                navigation.goBack()
                            }}
                            style={{
                                width: "100%",
                                marginTop: 12
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
        <Header title="Change Email" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
            <Image
              source={ dark ? illustrations.successDark : illustrations.success}
              resizeMode='contain'
              style={styles.success}
            />
          </View>
          <Text style={[styles.title, { color: dark ? COLORS.white : COLORS.black }]}>Reset Email</Text>
          <Input
              id="email"
              onInputChanged={inputChangedHandler}
              errorText={formState.inputValidities['email']}
              placeholder="Old Email"
              placeholderTextColor={dark ? COLORS.grayTie : COLORS.black}
              icon={icons.email}
              keyboardType="email-address"
            />
          <Input
              id="newEmail"
              onInputChanged={inputChangedHandler}
              errorText={formState.inputValidities['newEmail']}
              placeholder="New Email"
              placeholderTextColor={dark ? COLORS.grayTie : COLORS.black}
              icon={icons.email}
              keyboardType="email-address"
            />
            
            <View style={styles.checkBoxContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  color={isChecked ? COLORS.primary : dark ? COLORS.primary : "gray"}
                  onValueChange={setChecked}
                />
                <View style={{ flex: 1 }}>
                  <Text style={[styles.privacy, { color: dark ? COLORS.white : COLORS.black }]}>Remenber me</Text>
                </View>
              </View>
            </View>
            <View>
            </View>
        </ScrollView>
        <Button
              title="Continue"
              filled
              onPress={() => setModalVisible(true)}
              style={styles.button}
            />
        {renderModal()}
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
  success: {
    width: SIZES.width * 0.8,
    height: 250
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 52
  },
  title: {
    fontSize: 18,
    fontFamily: "medium",
    color: COLORS.black,
    marginVertical: 12
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 18,
  },
  checkbox: {
    marginRight: 8,
    height: 16,
    width: 16,
    borderRadius: 4,
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  privacy: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.black,
  },
  socialTitle: {
    fontSize: 19.25,
    fontFamily: "medium",
    color: COLORS.black,
    textAlign: "center",
    marginVertical: 26
  },
  socialBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 18,
    position: "absolute",
    bottom: 12,
    right: 0,
    left: 0,
  },
  bottomLeft: {
    fontSize: 14,
    fontFamily: "regular",
    color: "black"
  },
  bottomRight: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.primary
  },
  button: {
    marginVertical: 6,
    width: SIZES.width - 32,
    borderRadius: 30
  },
  forgotPasswordBtnText: {
    fontSize: 16,
    fontFamily: "semiBold",
    color: COLORS.primary,
    textAlign: "center",
    marginTop: 12
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
    color: COLORS.greyscale600,
    textAlign: "center",
    marginVertical: 12
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)"
},
modalSubContainer: {
  height: 494,
  width: SIZES.width * 0.9,
  backgroundColor: COLORS.white,
  borderRadius: 12,
  alignItems: "center",
  justifyContent: "center",
  padding: 16
},
modalIllustration: {
  height: 180,
  width: 180,
  marginVertical: 22
}
})

export default ChangeEmail