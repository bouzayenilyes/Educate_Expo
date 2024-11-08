import { View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Certificates, Lessons } from '../tabs';
import { useTheme } from '../theme/ThemeProvider';

const renderScene = SceneMap({
    first: Lessons,
    second: Certificates,
});
  

const CourseDetailsLessons = ({ navigation }) => {
    const layout = useWindowDimensions();
    const { colors, dark } = useTheme();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Lessons' },
        { key: 'second', title: 'Certificates' },
    ]);

    const renderTabBar = (props) => (
        <TabBar
            {...props}
            indicatorStyle={{
                backgroundColor: COLORS.primary,
            }}
            style={{
                backgroundColor: dark ? COLORS.dark1 : COLORS.white,
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
                        3D Design Illustrations
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
  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {renderHeader()}
            <View style={styles.tabContainer}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={renderTabBar}
                />
            </View>
        </View>
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
        backgroundColor: COLORS.white,
    },
    tabContainer: {
       flex: 1,
       marginTop: 8
    },
    headerContainer: {
        flexDirection: "row",
        width: SIZES.width - 32,
        justifyContent: "space-between",
        margin: 16
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
})

export default CourseDetailsLessons