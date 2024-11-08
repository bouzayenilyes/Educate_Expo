import {
    validateString,
    validateEmail,
    validatePassword,
    validateCreditCardNumber,
    validateExpiryDate,
    validateCVV
} from '../ValidationConstraints'

export const validateInput = (inputId, inputValue) => {
    if (
        inputId === 'fullName' ||
        inputId === 'location' ||
        inputId === 'userName' ||
        inputId === 'phoneNumber' ||
        inputId === 'creditCardHolderName' ||
        inputId === 'bio' ||
        inputId === 'address' ||
        inputId === 'street' ||
        inputId === 'postalCode' ||
        inputId === 'appartment' ||
        inputId === 'nickname' ||
        inputId === 'link' || 
        inputId === "occupation" 
    ) {
        return validateString(inputId, inputValue)
    } else if (inputId === 'email' || inputId === 'newEmail') {
        return validateEmail(inputId, inputValue)
    } else if (inputId === 'password' || inputId === 'confirmPassword' || inputId === 'newPassword' || inputId === 'confirmNewPassword' ) {
        return validatePassword(inputId, inputValue)
    } else if (inputId === 'resetToken') {
        return validateString(inputId, inputValue)
    }else if(inputId === 'creditCardNumber'){
        return validateCreditCardNumber(inputId, inputValue)
    }else if(inputId === 'creditCardExpiryDate'){
        return validateExpiryDate(inputId, inputValue)
    }else if(inputId === 'cvv'){
        return validateCVV(inputId, inputValue)
    }
}