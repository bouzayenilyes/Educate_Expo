import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

const InviteFriendCard = ({ name, phoneNumber, avatar }) => {
    const [isInvite, setIsInvite] = useState(false);
    const { colors, dark } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image
                    source={avatar}
                    resizeMode='contain'
                    style={styles.avatar}
                />
                <View style={styles.viewContainer}>
                    <Text style={[styles.name, { 
                        color: dark ? COLORS.secondaryWhite : COLORS.greyscale900
                    }]}>{name}</Text>
                    <Text style={styles.phoneNumber}>{phoneNumber}</Text>
                </View>
            </View>
            {
                dark ? (
                    <TouchableOpacity
                    onPress={() => setIsInvite(!isInvite)}
                    style={[styles.btn, {
                        backgroundColor: isInvite ? "transparent" : COLORS.primary,
                        borderColor: isInvite ? COLORS.primary : COLORS.white,
                        borderWidth: isInvite ? 1 : 0
                    }]}>
                    <Text style={[styles.btnText, {
                        color: isInvite ? COLORS.primary : COLORS.white
                    }]}>Invite</Text>
                </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                    onPress={() => setIsInvite(!isInvite)}
                    style={[styles.btn, {
                        backgroundColor: isInvite ? COLORS.white : COLORS.primary,
                        borderColor: isInvite ? COLORS.primary : COLORS.white,
                        borderWidth: 1
                    }]}>
                    <Text style={[styles.btnText, {
                        color: isInvite ? COLORS.primary : COLORS.white
                    }]}>Invite</Text>
                </TouchableOpacity>
                )   
            }
          
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
       flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: SIZES.width - 32,
        marginVertical: 12
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    avatar: {
        height: 52,
        width: 52,
        borderRadius: 999
    },
    name: {
        fontSize: 16,
        fontFamily: "bold",
        color: COLORS.black,
        marginBottom: 6
    },
    phoneNumber: {
        fontSize: 12,
        fontFamily: "regular",
        color: COLORS.grayscale700
    },
    viewContainer: {
        marginLeft: 16
    },
    btn: {
        width: 72,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 16
    },
    btnText: {
        fontFamily: "medium",
        color: COLORS.white,
        fontSize: 12
    }
})

export default InviteFriendCard