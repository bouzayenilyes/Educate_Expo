import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useReducer, useCallback, useEffect } from 'react'
import { commonStyles } from '../styles/CommonStyles'
import { COLORS, SIZES } from '../constants'
import Input from '../components/Input'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'
import Button from '../components/Button'
import Header from '../components/Header'
import Card from '../components/Card'
import { useTheme } from '../theme/ThemeProvider'

const initialState = {
  inputValues: {
    creditCardHolderName: '',
    creditCardNumber: '',
    creditCardExpiryDate: '',
    cvv: ''
  },
  inputValidities: {
    creditCardHolderName: false,
    creditCardNumber: false,
    creditCardExpiryDate: false,
    cvv: false
  },
  formIsValid: false,
}

const AddNewCard = ({ navigation }) => {
  const [error, setError] = useState(null);
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
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

  const renderPaymentForm = () => {
    return (
      <View style={{ marginVertical: 22 }}>
        <Card
          containerStyle={styles.card}
          number="•••• •••• •••• ••••"
          balance="10000"
          date="11/2029"
        />
        <View style={{ marginTop: 12 }}>
          <Text style={[commonStyles.inputHeader, { 
            color: dark? COLORS.white : COLORS.black
          }]}>Card Holder Name</Text>
          <Input
            id="creditCardHolderName"
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities['creditCardHolderName']}
            placeholder="Vishal Khadok"
            placeholderTextColor={dark ? COLORS.grayTie : COLORS.black}
          />
        </View>
        <View style={{ marginTop: 12 }}>
          <Text style={[commonStyles.inputHeader, { 
            color: dark? COLORS.white : COLORS.black
          }]}>Card Number</Text>
          <Input
            id="creditCardNumber"
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities['creditCardNumber']}
            placeholder="2143"
            placeholderTextColor={dark ? COLORS.grayTie : COLORS.black}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
          <View style={{ width: (SIZES.width - 32) / 2 - 10 }}>
            <Text style={[commonStyles.inputHeader, { 
              color: dark? COLORS.white : COLORS.black
            }]}>Expire Date</Text>
            <Input
              id="creditCardExpiryDate"
              onInputChanged={inputChangedHandler}
              errorText={formState.inputValidities['creditCardExpiryDate']}
              placeholder="mm/yyyy"
              placeholderTextColor={dark ? COLORS.grayTie : COLORS.black}
            />
          </View>
          <View style={{ width: (SIZES.width - 32) / 2 - 10 }}>
            <Text style={[commonStyles.inputHeader, { 
              color: dark? COLORS.white : COLORS.black
            }]}>CVV</Text>
            <Input
              id="cvv"
              onInputChanged={inputChangedHandler}
              errorText={formState.inputValidities['cvv']}
              placeholder="..."
              placeholderTextColor={dark ? COLORS.grayTie : COLORS.black}
            />
          </View>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ flex: 1, margin: 16 }}>
        <Header title="Add New Card" />
        {renderPaymentForm()}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: SIZES.width - 32
          }}
        >
          <Button
            filled
            title="Add New Card"
            onPress={() => navigation.goBack()}
            style={styles.addBtn}
          />
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  card: {
    width: SIZES.width - 32,
    borderRadius: 16,
    marginVertical: 6
  },
  addBtn: {
    borderRadius: 32
  }
})

export default AddNewCard