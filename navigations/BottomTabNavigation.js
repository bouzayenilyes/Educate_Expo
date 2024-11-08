import { View, Platform, Image, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, FONTS, icons } from '../constants'
import { Home, Inbox, MyCourse, Profile, Transactions } from '../screens'
import { useTheme } from '../theme/ThemeProvider'

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
    const { dark } = useTheme();

    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                justifyContent: "center",
                bottom: 0,
                right: 0,
                left: 0,
                elevation: 0,
                height: Platform.OS === 'ios' ? 90 : 60,
                backgroundColor: dark ? COLORS.dark1 : COLORS.white,
                borderTopColor: "transparent",
            },
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                 <Image
                                        source={ focused ? icons.home : icons.home2Outline }
                                        resizeMode='contain'
                                        style={{
                                            height: 24,
                                            width: 24,
                                            tintColor: focused? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                        }}
                                    />
                                    <Text style={{
                                        ...FONTS.body4,
                                        color: focused? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}>Home</Text>
                            </View>
                        )
                    },
                }}
            />
             <Tab.Screen
                name="MyCourse"
                component={MyCourse}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                 <Image
                                        source={ focused ? icons.document : icons.documentOutline }
                                        resizeMode='contain'
                                        style={{
                                            height: 24,
                                            width: 24,
                                            tintColor: focused? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                        }}
                                    />
                                    <Text style={{
                                        ...FONTS.body4,
                                        color: focused? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}>My Course</Text>
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={Inbox}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                 <Image
                                        source={ focused ? icons.chatBubble2Outline : icons.chatBubble2Outline }
                                        resizeMode='contain'
                                        style={{
                                            height: 24,
                                            width: 24,
                                            tintColor: focused? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                        }}
                                    />
                                    <Text style={{
                                        ...FONTS.body4,
                                        color: focused? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}>Inbox</Text>
                            </View>
                        )
                    },
                }}
            />
             <Tab.Screen
                name="Transactions"
                component={Transactions}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                 <Image
                                        source={ focused ? icons.cart : icons.cartOutline }
                                        resizeMode='contain'
                                        style={{
                                            height: 24,
                                            width: 24,
                                            tintColor: focused? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                        }}
                                    />
                                    <Text style={{
                                        ...FONTS.body4,
                                        color: focused? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}>Transact...</Text>
                            </View>
                        )
                    },
                }}
            />
             <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                 <Image
                                        source={ focused ? icons.user : icons.userOutline }
                                        resizeMode='contain'
                                        style={{
                                            height: 24,
                                            width: 24,
                                            tintColor: focused? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                        }}
                                    />
                                    <Text style={{
                                        ...FONTS.body4,
                                        color: focused? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}>Profile</Text>
                            </View>
                        )
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation