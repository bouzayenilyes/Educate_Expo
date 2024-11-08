import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { useTheme } from '../theme/ThemeProvider';
import { useNavigation } from '@react-navigation/native';

const MentorCard = ({ avatar, fullName, position, onPress }) => {
    const { dark } = useTheme();
    const navigation = useNavigation();

    return (
        <View style={styles.mentorContainer}>
            <View style={styles.chatLeftContainer}>
                <TouchableOpacity
                  onPress={()=>navigation.navigate("MentorProfile")}
                >
                <Image
                    source={avatar}
                    resizeMode='cover'
                    style={styles.avatarImage}
                />
                </TouchableOpacity>
                <View style={styles.userInfoContainer}>
                    <Text style={[styles.fullName, { 
                        color: dark ? COLORS.white : COLORS.greyscale900
                    }]}>{fullName}</Text>
                    <Text style={styles.position}>{position}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onPress}>
                <Image
                    source={icons.chatBubble2Outline}
                    resizeMode='contain'
                    style={styles.chatIcon}
                />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    mentorContainer: {
        width: SIZES.width - 32,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical: 8
    },
    avatarImage: {
        width: 64,
        height: 64,
        borderRadius: 999
    },
    fullName: {
        fontSize: 18,
        fontFamily: "bold",
        color: COLORS.black,
        marginBottom: 4
    },
    position: {
        fontSize: 13,
        fontFamily: "medium",
        color:  "gray"
    },
    chatIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.primary
    },
    chatLeftContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    userInfoContainer: {
        marginLeft: 12
    }
})

export default MentorCard