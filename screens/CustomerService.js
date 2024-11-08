import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons, images } from '../constants'
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons"
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { useTheme } from '../theme/ThemeProvider'

const CustomerService = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const { colors, dark } = useTheme();

    const handleInputText = (text) => {
        setInputMessage(text)
    }

    const renderMessage = (props) => {
        const { currentMessage } = props

        if (currentMessage.user._id === 1) {
            return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Bubble
                        {...props}
                        wrapperStyle={{
                            right: {
                                backgroundColor: COLORS.primary,
                                marginRight: 12,
                                marginVertical: 12,
                            },
                        }}
                        textStyle={{
                            right: {
                                color: COLORS.white, // Change the text color for the sender here
                            },
                        }}
                    />
                </View>
            )
        } else {
            return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                    }}
                >
                    <Image
                        source={images.avatar}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            marginLeft: 8,
                        }}
                    />
                    <Bubble
                        {...props}
                        wrapperStyle={{
                            left: {
                                backgroundColor: COLORS.secondary,
                                marginLeft: 12,
                            },
                        }}
                        textStyle={{
                            left: {
                                color: COLORS.white, // Change the text color for the sender here
                            },
                        }}
                    />
                </View>
            )
        }

        return <Bubble {...props} />
    }

    /***
     * Implementing chat functionnality
     */

    const submitHandler = () => {
        const message = {
            _id: Math.random().toString(36).substring(7),
            text: inputMessage,
            createdAt: new Date(),
            user: { _id: 1 },
        }
        setMessages((previousMessage) =>
            GiftedChat.append(previousMessage, [message])
        );

        setInputMessage("")
    }
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <StatusBar hidden={true} />
            <View style={[styles.contentContainer, { backgroundColor: colors.background }]}>
                <View style={[styles.header, { backgroundColor: dark ? COLORS.dark1 : COLORS.white }]}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={icons.arrowLeft}
                                resizeMode="contain"
                                style={[styles.headerIcon, { 
                                    tintColor: dark? COLORS.white : COLORS.greyscale900
                                }]}
                            />
                        </TouchableOpacity>
                        <Text style={[styles.headerTitle, { 
                            color: dark? COLORS.white : COLORS.greyscale900
                        }]}>Customer Service</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Image
                                source={icons.call}
                                resizeMode="contain"
                                style={[styles.headerIcon, { 
                                    tintColor: dark? COLORS.secondaryWhite : COLORS.greyscale900
                                }]}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 16 }}>
                            <Image
                                source={icons.moreCircle}
                                resizeMode="contain"
                                style={[styles.headerIcon, { 
                                    tintColor: dark ? COLORS.secondaryWhite : COLORS.greyscale900
                                }]}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.chatContainer}>
                    <GiftedChat
                        messages={messages}
                        renderInputToolbar={() => { }}
                        user={{ _id: 1 }}
                        minInputToolbarHeight={0}
                        renderMessage={renderMessage}
                    />
                </View>
                <View style={[styles.inputContainer, { 
                    backgroundColor: dark ? COLORS.dark1 : COLORS.white
                }]}>
                    <View style={[styles.inputMessageContainer, { 
                        backgroundColor: dark ? COLORS.dark2 : COLORS.grayscale100,
                    }]}>
                        <TextInput
                            style={styles.input}
                            value={inputMessage}
                            onChangeText={handleInputText}
                            placeholderTextColor={COLORS.blue2}
                            placeholder="Enter your message..."
                        />
                        <View style={styles.attachmentIconContainer}>
                            <TouchableOpacity>
                                <Feather name="image" size={24} color={COLORS.gray} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.microContainer}>
                        <MaterialCommunityIcons name="microphone" size={24} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    contentContainer: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: COLORS.white,
    },
    headerTitle: {
        fontSize: 18,
        fontFamily: "semiBold",
        color: COLORS.black,
        marginLeft: 22
    },
    headerIcon: {
        height: 24,
        width: 24,
        tintColor: COLORS.black
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionIcon: {
        marginRight: 12,
    },
    chatContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    inputMessageContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        backgroundColor: COLORS.grayscale100,
        paddingVertical: 8,
        marginRight: 12,
        borderRadius: 12,
        alignItems: 'center'
    },
    attachmentIconContainer: {
        marginRight: 12,
    },
    input: {
        color: COLORS.blue2,
        flex: 1,
        paddingHorizontal: 10,
    },
    microContainer: {
        height: 48,
        width: 48,
        borderRadius: 49,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    }
});

export default CustomerService;