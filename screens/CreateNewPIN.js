import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { ScrollView } from "react-native-virtualized-view";
import { COLORS } from '../constants';
import { OtpInput } from "react-native-otp-entry";
import Button from "../components/Button";
import { useTheme } from '../theme/ThemeProvider';

const CreateNewPIN = ({ navigation }) => {
    const { colors, dark } = useTheme();

    return (
        <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <Header title="Create New PIN" />
                <ScrollView contentContainerStyle={styles.center}>
                    <Text style={[styles.title, {
                        color: dark ? COLORS.white : COLORS.greyscale900
                    }]}>Add a PIN number to make your account
                        more secure.</Text>
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
                     <Button
                    title="Continue"
                    filled
                    style={styles.button}
                    onPress={() => { navigation.navigate("Fingerprint") }}
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
        padding: 16,
        backgroundColor: COLORS.white
    },
    title: {
        fontSize: 18,
        fontFamily: "medium",
        color: COLORS.greyscale900,
        textAlign: "center",
        marginVertical: 64
    },
    OTPStyle: {
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
        borderRadius: 32,
        marginVertical: 72
    },
    center: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 144
    },
})

export default CreateNewPIN