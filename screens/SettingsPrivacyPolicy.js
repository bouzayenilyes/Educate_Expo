import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants';
import Header from '../components/Header';
import { ScrollView } from 'react-native-virtualized-view';
import { useTheme } from '../theme/ThemeProvider';

const SettingsPrivacyPolicy = () => {
    const { colors, dark } = useTheme();

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Header title="Privacy Policy"/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={[styles.settingsTitle, { color: dark ? COLORS.white : COLORS.black }]}>1. Types of Data We Collect</Text>
                    <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>We may collect the following types of data:</Text>
                    <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>Personal Information: This includes but is not limited to your name, email address, and other contact details provided during account registration or usage of our services.</Text>
                    <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>Usage Information: We may collect information about how you interact with our services, including but not limited to IP addresses, device information, and browsing history.</Text>
                    <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>Cookies and Similar Technologies: We use cookies and similar technologies to enhance your experience and gather information about your preferences.</Text>
                </View>
                <View>
                    <Text style={[styles.settingsTitle, { color: dark ? COLORS.white : COLORS.black }]}>2. Use of Your Personal Data</Text>
                    <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>We may use your personal data for the following purposes:</Text>
                    <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>Service Delivery: To provide and maintain our services, including personalized content and features.</Text>
                    <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>Communication: To communicate with you, respond to your inquiries, and provide important information about our services.</Text>
                    <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>Analytics: To analyze usage patterns, improve our services, and customize content based on user preferences.</Text>
                </View>
                <View>
                    <Text style={[styles.settingsTitle, { color: dark ? COLORS.white : COLORS.black }]}>3. Disclosure of Your Personal Data</Text>
                    <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>We may disclose your personal data in the following situations:</Text>
                    <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>Legal Obligations: To comply with legal obligations, such as responding to lawful requests or court orders.</Text>
                    <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>Third-Party Service Providers: We may share your information with third-party service providers who assist us in delivering our services, subject to confidentiality agreements.</Text>
                    <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>Business Transactions: In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal data may be transferred as part of the transaction.</Text>
                </View>
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
    settingsTitle: {
        fontSize: 18,
        fontFamily: "bold",
        color: COLORS.black,
        marginVertical: 26
    },
    body: {
        fontSize: 14,
        fontFamily: "regular",
        color: COLORS.black,
        marginTop: 4
    }
})

export default SettingsPrivacyPolicy