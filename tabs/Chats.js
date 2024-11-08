import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { messsagesData } from '../data';
import { COLORS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';

const Chats = () => {
    const navigation = useNavigation();
    const { colors, dark } = useTheme();

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            key={index}
            onPress={() =>
                navigation.navigate('Chat', {
                    userName: item.fullName,
                })
            }
            style={[
                styles.userContainer, {
                    borderBottomWidth: dark ? 0 : 1,
                },
                index % 2 !== 0 ? {
                    backgroundColor: dark ? COLORS.dark1 : COLORS.tertiaryWhite,
                    borderBottomWidth: dark ? 0 : 1,
                    borderTopWidth: dark ? 0 : 0
                } : null,
            ]}
        >
            <View style={styles.userImageContainer}>
                {item.isOnline && item.isOnline === true && (
                    <View style={styles.onlineIndicator} />
                )}

                <Image
                    source={item.userImg}
                    resizeMode="contain"
                    style={styles.userImage}
                />
            </View>
            <View style={{ flexDirection: "row", width: SIZES.width - 104 }}>
                <View style={[styles.userInfoContainer]}>
                    <Text style={[styles.userName, { 
                        color: dark ? COLORS.white : COLORS.black
                    }]}>{item.fullName}</Text>
                    <Text style={styles.lastSeen}>{item.lastMessage}</Text>
                </View>
                <View style={{
                    position: "absolute",
                    right: 4,
                    alignItems: "center"
                }}>
                    <Text style={[styles.lastMessageTime, { 
                        color: dark? COLORS.white : COLORS.black
                    }]}>{item.lastMessageTime}</Text>
                    <View>
                        {
                            item.messageInQueue > 0 && (
                                <TouchableOpacity style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 999,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: item.messageInQueue ? COLORS.primary : "transparent",
                                    marginTop: 12
                                }}>
                                    <Text style={[styles.messageInQueue]}>{`${item.messageInQueue}`}</Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );


    return (
        <View>
            <FlatList
                data={messsagesData}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    iconBtnContainer: {
        height: 40,
        width: 40,
        borderRadius: 999,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center"
    },
    notiContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: 16,
        width: 16,
        borderRadius: 999,
        backgroundColor: COLORS.red,
        position: "absolute",
        top: 1,
        right: 1,
        zIndex: 999,
    },
    notiText: {
        fontSize: 10,
        color: COLORS.white,
        fontFamily: "medium"
    },
    headerTitle: {
        fontSize: 22,
        fontFamily: "bold",
        color: COLORS.black
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        height: 50,
        marginVertical: 22,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    searchInput: {
        width: '100%',
        height: '100%',
        marginHorizontal: 12,
    },
    flatListContainer: {
        paddingBottom: 100,
    },
    userContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: COLORS.secondaryWhite,
        borderBottomWidth: 1,
    },
    oddBackground: {
        backgroundColor: COLORS.tertiaryWhite,
    },
    userImageContainer: {
        paddingVertical: 15,
        marginRight: 22,
    },
    onlineIndicator: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: COLORS.primary,
        borderColor: COLORS.white,
        borderWidth: 2,
        position: 'absolute',
        top: 14,
        right: 2,
        zIndex: 1000,
    },
    userImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    userInfoContainer: {
        flexDirection: 'column',
    },
    userName: {
        fontSize: 14,
        color: COLORS.black,
        fontFamily: "bold",
        marginBottom: 4,
    },
    lastSeen: {
        fontSize: 14,
        color: "gray",
    },
    lastMessageTime: {
        fontSize: 12,
        fontFamily: "regular"
    },
    messageInQueue: {
        fontSize: 12,
        fontFamily: "regular",
        color: COLORS.white
    }
});

export default Chats