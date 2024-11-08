import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

const PageContainer = (props) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            {props.children}
        </KeyboardAvoidingView>
    )
}

export default PageContainer