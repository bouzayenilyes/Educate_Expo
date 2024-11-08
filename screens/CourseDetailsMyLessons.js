import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { ScrollView } from 'react-native-virtualized-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import SectionSubItem from '../components/SectionSubItem';
import CourseSectionCard from '../components/CourseSectionCard';
import Button from '../components/Button';
import { useTheme } from '../theme/ThemeProvider';

const CourseDetailsMyLessons = ({ navigation }) => {
    const { colors, dark } = useTheme();
    /**
    * Render header
    */
    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image
                            source={icons.back}
                            resizeMode='contain'
                            style={[styles.backIcon, { 
                                tintColor: dark? COLORS.white : COLORS.greyscale900
                            }]}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.headerTitle, { 
                        color: dark? COLORS.white : COLORS.greyscale900
                    }]}>
                        Lessons
                    </Text>
                </View>
                <TouchableOpacity>
                    <Image
                        source={icons.moreCircle}
                        resizeMode='contain'
                        style={[styles.moreIcon, { 
                            tintColor: dark? COLORS.secondaryWhite : COLORS.greyscale900
                        }]}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    /**
     * Render content
     */
    const renderContent = () => {
        return (
            <View style={[styles.contentContainer, { backgroundColor: colors.background }]}>
                <SectionSubItem
                    title="Section 1 - Introduction"
                    subtitle="15 mins"
                />
                <CourseSectionCard
                    num="01"
                    title="Why using Figma"
                    duration="10 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={true}
                />
                <CourseSectionCard
                    num="02"
                    title="Set up Your Figma Account"
                    duration="5 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={true}
                />
                <SectionSubItem
                    title="Section 2 - Figma Basic"
                    subtitle="15 mins"
                />
                <CourseSectionCard
                    num="03"
                    title="Take a look Figma interface"
                    duration="5 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={true}
                />
                <CourseSectionCard
                    num="04"
                    title="Working with Frame & Layer"
                    duration="10 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={false}
                />
                <CourseSectionCard
                    num="05"
                    title="Working with Text & Grid"
                    duration="10 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={false}
                />
                <CourseSectionCard
                    num="06"
                    title="Using Figma Plugins"
                    duration="7 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={false}
                />
                <SectionSubItem
                    title="Section 3 - Figam advanced"
                    subtitle="15 mins"
                />
                <CourseSectionCard
                    num="07"
                    title="Starting UX with Figma"
                    duration="10 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={false}
                />
                <CourseSectionCard
                    num="08"
                    title="Design system with Figma"
                    duration="10 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={false}
                />
                <CourseSectionCard
                    num="09"
                    title="Building UI Kit with Figma - Part 1"
                    duration="20 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={false}
                />
                <CourseSectionCard
                    num="10"
                    title="Building UI Kit with Figma - Part 2"
                    duration="20 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={false}
                />
            </View>
        )
    }
    return (
        <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                {renderHeader()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {renderContent()}
                </ScrollView>
            </View>
            <View style={[styles.bottomContainer, { backgroundColor: colors.background }]}>
                <Button
                    title="Enroll Course - $40"
                    filled
                    style={styles.bottomBtn}
                    onPress={() => navigation.navigate("SelectPaymentMethods")}
                />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 16
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    headerContainer: {
        flexDirection: "row",
        width: SIZES.width - 32,
        justifyContent: "space-between",
        marginBottom: 16
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center"
    },
    backIcon: {
        height: 24,
        width: 24,
        tintColor: COLORS.black
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'bold',
        color: COLORS.black,
        marginLeft: 16
    },
    moreIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.black
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
    },
    contentContainer: {
        backgroundColor: COLORS.tertiaryWhite,
        flex: 1,
    },
})

export default CourseDetailsMyLessons