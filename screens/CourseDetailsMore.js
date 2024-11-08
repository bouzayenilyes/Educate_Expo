import { View, Text, StyleSheet, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, icons, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { CourseAbout, CourseLessons, CourseReviews } from '../tabs';
import Button from '../components/Button';
import { useTheme } from '../theme/ThemeProvider';

const renderScene = SceneMap({
    first: CourseAbout,
    second: CourseLessons,
    third: CourseReviews
});


const CourseDetailsMore = ({ navigation }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const layout = useWindowDimensions();
    const { colors, dark } = useTheme();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'About' },
        { key: 'second', title: 'Lessons' },
        { key: 'third', title: 'Reviews' },
    ]);

    const renderTabBar = (props) => (
        <TabBar
            {...props}
            indicatorStyle={{
                backgroundColor: COLORS.primary,
            }}
            style={{
                backgroundColor: colors.background,
            }}
            renderLabel={({ route, focused }) => (
                <Text style={[{
                    color: focused ? COLORS.primary : "gray",
                    fontSize: 16,
                    fontFamily: "semiBold"
                }]}>
                    {route.title}
                </Text>
            )}
        />
    )

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <StatusBar hidden />
            <TouchableOpacity
                onPress={()=>navigation.goBack()}
                style={styles.headerContainer}>
                <Image
                    source={icons.back}
                    resizeMode='contain'
                    style={styles.backIcon}
                />
            </TouchableOpacity>
            <Image
                source={images.course1}
                resizeMode='cover'
                style={styles.courseImage}
            />

            {/* course info */}
            <View style={styles.courseInfoContainer}>
                <View style={styles.titleContainer}>
                    <Text style={[styles.courseName, { 
                        color: dark? COLORS.white : COLORS.greyscale900
                    }]}>Intro to UI/UX Design</Text>
                    <TouchableOpacity
                        onPress={() => setIsBookmarked(!isBookmarked)}>
                        <Image
                            source={isBookmarked ? icons.bookmark2 : icons.bookmark2Outline}
                            resizeMode='contain'
                            style={styles.bookmarkIcon}
                        />
                    </TouchableOpacity>
                </View>
                {/* Reviews and rating container */}
                <View style={styles.ratingContainer}>
                    <TouchableOpacity style={styles.categoryContainer}>
                        <Text style={styles.categoryName}>UI/UX Design</Text>
                    </TouchableOpacity>
                    <View style={styles.starContainer}>
                        <Image
                            source={icons.star2}
                            resizeMode='contain'
                            style={styles.starIcon}
                        />
                        <Text style={[styles.starTitle, { 
                            color: dark? COLORS.secondaryWhite : COLORS.greyscale900
                        }]}>{"   "}4.8 (4,479 reviews)</Text>
                    </View>
                </View>
                {/* Price container */}
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>$40</Text>
                    <Text style={styles.oldPrice}>$75</Text>
                </View>

                {/* course resume container */}
                <View style={styles.courseResumeContainer}>
                    <View style={styles.courseViewContainer}>
                        <Image
                            source={icons.users}
                            resizeMode='contain'
                            style={styles.courseViewIcon}
                        />
                        <Text style={[styles.courseViewTitle, { 
                            color: dark? COLORS.secondaryWhite : COLORS.greyscale900
                        }]}>9,839 Students</Text>
                    </View>
                    <View style={styles.courseViewContainer}>
                        <Image
                            source={icons.time}
                            resizeMode='contain'
                            style={styles.courseViewIcon}
                        />
                        <Text style={[styles.courseViewTitle, { 
                             color: dark? COLORS.secondaryWhite : COLORS.greyscale900
                        }]}>2,5 Hours</Text>
                    </View>
                    <View style={styles.courseViewContainer}>
                        <Image
                            source={icons.document2}
                            resizeMode='contain'
                            style={styles.courseViewIcon}
                        />
                        <Text style={[styles.courseViewTitle, { 
                             color: dark? COLORS.secondaryWhite : COLORS.greyscale900
                        }]}>Certificate</Text>
                    </View>
                </View>
                <View style={styles.separateLine} />
            </View>

            <View style={styles.tabContainer}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={renderTabBar}
                />
            </View>

            <View style={[styles.bottomContainer, { 
                backgroundColor: colors.background,
                borderTopColor: dark ? COLORS.dark3 : COLORS.gray,
                borderWidth: dark ? 1 : .2
                }]}>
                <Button
                    title="Enroll Course - $40"
                    filled
                    style={styles.bottomBtn}
                    onPress={() => navigation.navigate("SelectPaymentMethods")}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    courseImage: {
        width: SIZES.width,
        height: SIZES.width * 0.625
    },
    headerContainer: {
        position: "absolute",
        top: 16,
        left: 16,
        zIndex: 999
    },
    backIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.white
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    courseName: {
        fontSize: 26,
        fontFamily: "bold",
        color: COLORS.black
    },
    courseInfoContainer: {
        padding: 16
    },
    bookmarkIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.primary
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12
    },
    categoryContainer: {
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 6,
        backgroundColor: COLORS.transparentTertiary
    },
    categoryName: {
        fontSize: 12,
        fontFamily: "medium",
        color: COLORS.primary
    },
    starIcon: {
        width: 16,
        height: 16
    },
    starContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 22
    },
    starTitle: {
        fontSize: 14,
        fontFamily: "medium",
        color: COLORS.black
    },
    priceContainer: {
        marginVertical: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    price: {
        fontSize: 28,
        fontFamily: "bold",
        color: COLORS.primary
    },
    oldPrice: {
        fontSize: 18,
        fontFamily: "bold",
        color: COLORS.gray,
        textDecorationLine: 'line-through',
        marginLeft: 10
    },
    courseResumeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    courseViewContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    courseViewIcon: {
        width: 16,
        height: 16,
        tintColor: COLORS.primary
    },
    courseViewTitle: {
        fontSize: 16,
        fontFamily: "regular",
        color: COLORS.black,
        marginLeft: 6
    },
    separateLine: {
        width: SIZES.width,
        height: .4,
        backgroundColor: COLORS.gray,
        marginTop: 16
    },
    tabContainer: {
        flex: 1,
        paddingHorizontal: 16
    },
    bottomContainer: {
        position: "absolute",
        bottom: 0,
        height: 96,
        width: SIZES.width,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24
    },
    bottomBtn: {
        width: SIZES.width - 32
    }
})

export default CourseDetailsMore