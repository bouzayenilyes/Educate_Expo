import { View, Text, StyleSheet, ScrollView, Image, Alert, TouchableOpacity, Modal, TouchableWithoutFeedback, FlatList, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, icons, images } from '../constants';
import Header from '../components/Header';
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import { useTheme } from '../theme/ThemeProvider';

const ForgotPasswordPhoneNumber = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isChecked, setChecked] = useState(false);
    const [areas, setAreas] = useState([]);
    const [selectedArea, setSelectedArea] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const { colors, dark } = useTheme();


    useEffect(() => {
        if (error) {
            Alert.alert('An error occured', error)
        }
    }, [error]);

    // fectch codes from rescountries api
    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then(response => response.json())
            .then(data => {
                let areaData = data.map((item) => {
                    return {
                        code: item.alpha2Code,
                        item: item.name,
                        callingCode: `+${item.callingCodes[0]}`,
                        flag: `https://flagsapi.com/${item.alpha2Code}/flat/64.png`
                    }
                });

                setAreas(areaData);
                if (areaData.length > 0) {
                    let defaultData = areaData.filter((a) => a.code == "US");

                    if (defaultData.length > 0) {
                        setSelectedArea(defaultData[0])
                    }
                }
            })
    }, [])

    // render countries codes modal
    function RenderAreasCodesModal() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: 10,
                        flexDirection: "row"
                    }}
                    onPress={() => {
                        setSelectedArea(item),
                            setModalVisible(false)
                    }}
                >
                    <Image
                        source={{ uri: item.flag }}
                        contentFit='contain'
                        style={{
                            height: 30,
                            width: 30,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ fontSize: 16, color: "#fff" }}>{item.item}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View
                        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                    >
                        <View
                            style={{
                                height: 400,
                                width: SIZES.width * 0.8,
                                backgroundColor: COLORS.primary,
                                borderRadius: 12
                            }}
                        >
                            <FlatList
                                data={areas}
                                renderItem={renderItem}
                                horizontal={false}
                                keyExtractor={(item) => item.code}
                                style={{
                                    padding: 20,
                                    marginBottom: 20
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
                <Header title="Forgot Password" />
                <ScrollView style={{ marginVertical: 54 }} showsVerticalScrollIndicator={false}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={images.logo}
                            resizeMode='contain'
                            style={styles.logo}
                        />
                    </View>
                    <Text style={[styles.title, { 
                        color: dark? COLORS.white : COLORS.black
                    }]}>Enter to Your Phone Number</Text>
                    <View style={[styles.inputContainer, { backgroundColor: dark ? COLORS.dark2 : COLORS.greyscale500 }]}>
                        <TouchableOpacity
                            style={styles.selectFlagContainer}
                            onPress={() => setModalVisible(true)}>
                            <View style={{ justifyContent: "center" }}>
                                <Image
                                    source={icons.down}
                                    resizeMode='contain'
                                    style={styles.downIcon}
                                />
                            </View>
                            <View style={{ justifyContent: "center", marginLeft: 5 }}>
                                <Image
                                    source={{ uri: selectedArea?.flag }}
                                    contentFit="contain"
                                    style={styles.flagIcon}
                                />
                            </View>
                            <View style={{ justifyContent: "center", marginLeft: 5 }}>
                                <Text style={{ color: dark ? COLORS.white : COLORS.black , fontSize: 12 }}>{selectedArea?.callingCode}</Text>
                            </View>
                        </TouchableOpacity>
                        {/* Phone Number Text Input */}
                        <TextInput
                            style={[styles.input, { color: dark ? COLORS.white : COLORS.black }]}
                            placeholder="Enter your phone number"
                            placeholderTextColor={COLORS.gray}
                            selectionColor="#111"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.checkBoxContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isChecked}
                                color={isChecked ? COLORS.primary : dark ? COLORS.primary : "gray"}
                                onValueChange={setChecked}
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.privacy, { 
                                    color: dark? COLORS.white : COLORS.black
                                }]}>Remenber me</Text>
                            </View>
                        </View>
                    </View>
                    <Button
                        title="Reset Password"
                        filled
                        onPress={() => navigation.navigate("OTPVerification")}
                        style={styles.button}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.forgotPasswordBtnText}>Remenber the password?</Text>
                    </TouchableOpacity>
                    <View>
                    </View>
                </ScrollView>
                <View style={styles.bottomContainer}>
                    <Text style={[styles.bottomLeft, { 
                        color: dark ? COLORS.white : COLORS.black
                    }]}>Don't have an account ?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={styles.bottomRight}>{" "}Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {RenderAreasCodesModal()}
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
    logo: {
        width: 100,
        height: 100,
        tintColor: COLORS.primary
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 32
    },
    title: {
        fontSize: 26,
        fontFamily: "bold",
        color: COLORS.black,
        textAlign: "center",
        marginBottom: 22
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
    inputContainer: {
        flexDirection: "row",
        borderColor: COLORS.greyscale500,
        borderWidth: .4,
        borderRadius: 6,
        height: 58,
        width: SIZES.width - 32,
        alignItems: 'center',
        marginVertical: 16,
        backgroundColor: COLORS.greyscale500,
    },
    downIcon: {
        width: 10,
        height: 10,
        tintColor: "#111"
    },
    selectFlagContainer: {
        width: 90,
        height: 50,
        marginHorizontal: 5,
        flexDirection: "row",
    },
    flagIcon: {
        width: 30,
        height: 30
    },
    input: {
        flex: 1,
        marginVertical: 10,
        height: 40,
        fontSize: 14,
        color: "#111"
    }
})

export default ForgotPasswordPhoneNumber