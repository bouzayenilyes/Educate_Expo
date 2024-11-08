import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native-virtualized-view'
import Header from '../components/Header'
import GlobalSettingsItem from '../components/GlobalSettingsItem'
import { useTheme } from '../theme/ThemeProvider'

const SettingsNotifications = () => {
    const [isGeneralNotificationsEnabled, setIsGeneralNotificationsEnabled] = useState(true);
    const [isSoundEnabled, setIsSoundEnabled] = useState(true);
    const [isVibrateEnabled, setIsVibrateEnabled] = useState(false);
    const [specialOffersEnabled, setSpecialOffersEnabled] = useState(false);
    const [promoDiscountEnabled, setPromoDiscountEnabled] = useState(true);
    const [isPaymentEnabled, setIsPaymentEnabled] = useState(true);
    const [isChashbackEnabled, setIsChashbackEnabled] = useState(false);
    const [isAppUpdatesEnabled, setIsAppUpdatesEnabled] = useState(true);
    const [newServiceAvailable, setNewServiceAvailable] = useState(false);
    const [newTipsAvailable, setNewTipsAvailable] = useState(true);
    const { colors, dark } = useTheme();

    const toggleGeneralNotifications = ()=>{
        setIsGeneralNotificationsEnabled(!isGeneralNotificationsEnabled);
    }

    const toggleSound = ()=>{
        setIsSoundEnabled(!isSoundEnabled);
    }

    const toggleVibrate = ()=>{
        setIsVibrateEnabled(!isVibrateEnabled);
    }

    const toggleSpecialOffers = ()=>{
        setSpecialOffersEnabled(!specialOffersEnabled);
    }

    const toggleDiscountEnabled = ()=>{
        setPromoDiscountEnabled(!promoDiscountEnabled);
    }

    const togglePayments = ()=>{
        setIsPaymentEnabled(!isPaymentEnabled);
    }

    const toggleCashback = ()=>{
        setIsChashbackEnabled(!isChashbackEnabled);
    }

    const toggleAppUpdates = ()=>{
        setIsAppUpdatesEnabled(!isAppUpdatesEnabled);
    }

    const toggleNewServiceAvailable = ()=>{
        setNewServiceAvailable(!newServiceAvailable);
    }

    const toggleNewTipsAvailable = ()=>{
        setNewTipsAvailable(!newTipsAvailable);
    }

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <StatusBar hidden />
            <Header title="Notifications" />
            <ScrollView 
                style={styles.settingsContainer} 
                showsVerticalScrollIndicator={false}>
               <GlobalSettingsItem
                 title="General Notifications"
                 isNotificationEnabled={isGeneralNotificationsEnabled}
                 toggleNotificationEnabled={toggleGeneralNotifications}
               />
               <GlobalSettingsItem
                 title="Sound"
                 isNotificationEnabled={isSoundEnabled}
                 toggleNotificationEnabled={toggleSound}
               />
               <GlobalSettingsItem
                 title="Vibrate"
                 isNotificationEnabled={isVibrateEnabled}
                 toggleNotificationEnabled={toggleVibrate}
               />
               <GlobalSettingsItem
                 title="Special Offers"
                 isNotificationEnabled={specialOffersEnabled}
                 toggleNotificationEnabled={toggleSpecialOffers}
               />
               <GlobalSettingsItem
                 title="Promo & Discount"
                 isNotificationEnabled={promoDiscountEnabled}
                 toggleNotificationEnabled={toggleDiscountEnabled}
               />
               <GlobalSettingsItem
                 title="Payments"
                 isNotificationEnabled={isPaymentEnabled}
                 toggleNotificationEnabled={togglePayments}
               />
               <GlobalSettingsItem
                 title="Cashback"
                 isNotificationEnabled={isChashbackEnabled}
                 toggleNotificationEnabled={toggleCashback}
               />
               <GlobalSettingsItem
                 title="App Updates"
                 isNotificationEnabled={isAppUpdatesEnabled}
                 toggleNotificationEnabled={toggleAppUpdates}
               />
               <GlobalSettingsItem
                 title="New Service Available"
                 isNotificationEnabled={newServiceAvailable}
                 toggleNotificationEnabled={toggleNewServiceAvailable}
               />
               <GlobalSettingsItem
                 title="New Tips Available"
                 isNotificationEnabled={newTipsAvailable}
                 toggleNotificationEnabled={toggleNewTipsAvailable}
               />
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

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
    settingsContainer: {
        marginVertical: 16
    }
})
export default SettingsNotifications