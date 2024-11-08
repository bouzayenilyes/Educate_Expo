import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';

const CourseCard = ({
    name,
    image,
    category,
    price,
    isOnDiscount,
    oldPrice,
    rating,
    numStudents,
    onPress
}) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const { colors, dark } = useTheme();

    return (
        <TouchableOpacity 
           onPress={onPress} 
            style={[styles.container, { 
                backgroundColor: dark ? COLORS.dark2 : COLORS.white
            }]}>
            <Image
                source={image}
                resizeMode='cover'
                style={styles.courseImage}
            />
            <View style={{ flex: 1 }}>
                <View style={styles.topContainer}>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryName}>{category}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setIsBookmarked(!isBookmarked)}>
                        <Image
                            source={isBookmarked ? icons.bookmark2 : icons.bookmark2Outline}
                            resizeMode='contain'
                            style={[styles.bookmarkIcon, {
                                tintColor: isBookmarked ? COLORS.primary : COLORS.primary
                            }]}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.name, { 
                    color: dark  ? COLORS.white : COLORS.greyscale900
                }]}>{name}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>${price}</Text>
                    {
                        isOnDiscount && <Text style={styles.oldPrice}>{"   "}${oldPrice}</Text>
                    }
                </View>
                <View style={styles.ratingContainer}>
                    <FontAwesome name="star-half-empty" size={20} color="orange" />
                    <Text style={styles.rating}> {" "}{rating}</Text>
                    <Text style={styles.numStudents}> |  {numStudents} students</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 32,
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems:"center",
        height: 148,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 0,
        marginVertical: 8
    },
    courseImage: {
        width: 124,
        height: 124,
        borderRadius: 16,
        marginRight: 16,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    categoryContainer: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        backgroundColor: COLORS.transparentTertiary,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryName: {
        fontSize: 14,
        fontFamily: 'semiBold',
        color: COLORS.primary
    },
    bookmarkIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.primary
    },
    name: {
        fontSize: 16,
        fontFamily: 'bold',
        color: COLORS.black,
        marginVertical: 10,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6
    },
    price: {
        fontSize: 18,
        fontFamily: 'bold',
        color: COLORS.primary,
    },
    oldPrice: {
        fontSize: 14,
        fontFamily: 'medium',
        color: COLORS.gray,
        textDecorationLine: 'line-through',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: 14,
        fontFamily: 'medium',
        color: COLORS.gray,
    },
    numStudents: {
        fontSize: 14,
        fontFamily: 'medium',
        color: COLORS.gray,
        marginLeft: 8,
    }
})

export default CourseCard