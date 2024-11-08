import { View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons, images } from "../constants";
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ProfileCourses, ProfileReviews, ProfileStudents } from '../tabs';
import { mentorInfo } from '../data';
import { useTheme } from '../theme/ThemeProvider';

const renderScene = SceneMap({
  first: ProfileCourses,
  second: ProfileStudents,
  third: ProfileReviews
});


const MentorProfile = ({ navigation }) => {
  const layout = useWindowDimensions();
  const { colors, dark } = useTheme();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Courses' },
    { key: 'second', title: 'Students' },
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
  /**
   * render header
   */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.back} 
               style={[styles.backIcon, { 
                tintColor: dark ? COLORS.white : COLORS.greyscale900
               }]} />
          </TouchableOpacity>
        </View>
        <View style={styles.moreIcon}>
          <Image source={icons.moreCircle} 
              style={[styles.moreIcon, { 
                tintColor: dark? COLORS.white : COLORS.greyscale900
              }]} />
        </View>
      </View>
    )
  }

  /**
   * render content
   */
  const renderContent = () => {
    return (
      <View>
        <View style={styles.instructorInfoContainer}>
          <Image
            source={images.user3}
            resizeMode='contain'
            style={styles.instructorAvatar}
          />
          <View style={styles.instructorView}>
            <Text style={[styles.instructorName, { 
              color: dark? COLORS.white : COLORS.greyscale900
            }]}>Jonathan Williams</Text>
            <Text style={[styles.instructorPosition, { 
              color: dark? COLORS.secondaryWhite : COLORS.greyscale900
            }]}>Senior UI/UX Designer at Google</Text>
          </View>


          <View style={styles.viewContainer}>
            <View style={styles.view}>
              <Text style={[styles.viewNum, { 
                color: dark? COLORS.white : COLORS.greyscale900
              }]}>{mentorInfo.courses.length}</Text>
              <Text style={[styles.viewText, { 
                color: dark? COLORS.secondaryWhite : COLORS.greyscale900
              }]}>Courses</Text>
            </View>
            <View style={styles.view}>
              <Text style={[styles.viewNum, { 
                color: dark? COLORS.white : COLORS.greyscale900
              }]}>{mentorInfo.students.length}</Text>
              <Text style={[styles.viewText, { 
                color: dark? COLORS.secondaryWhite : COLORS.greyscale900
              }]}>Students</Text>
            </View>
            <View style={styles.viewLeft}>
              <Text style={[styles.viewNum, {
                 color: dark ?  COLORS.white : COLORS.greyscale900
               }]}>{mentorInfo.reviews.length}</Text>
              <Text style={[styles.viewText, { 
                color: dark? COLORS.secondaryWhite : COLORS.greyscale900
              }]}>Reviews</Text>
            </View>
          </View>

          <View style={styles.buttonActionContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Inbox")}
              style={styles.buttonAction}>
              <Image
                source={icons.chat}
                resizeMode='contain'
                style={styles.buttonActionIcon}
              />
              <Text style={styles.buttonActionText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonActionRight}>
              <Image
                source={icons.explore}
                resizeMode='contain'
                style={styles.buttonActionIconRight}
              />
              <Text style={styles.buttonActionTextRight}>Website</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.separateLine} />
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        <View style={{ flex: 1 }}>
          {renderContent()}
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
    padding: 16
  },
  headerContainer: {
    flexDirection: "row",
    width: SIZES.width - 32,
    justifyContent: "space-between",
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
  instructorInfoContainer: {
    alignItems: "center",
    width: SIZES.width - 32
  },
  instructorAvatar: {
    width: 120,
    height: 120,
    borderRadius: 999
  },
  instructorName: {
    fontSize: 20,
    fontFamily: "bold",
    color: COLORS.black
  },
  instructorPosition: {
    fontSize: 14,
    fontFamily: "regular",
    color: COLORS.black,
    marginVertical: 4
  },
  instructorView: {
    marginVertical: 12,
    alignItems: "center"
  },
  viewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12
  },
  view: {
    width: (SIZES.width - 32) / 3,
    alignItems: "center",
    borderRightColor: COLORS.gray,
    borderRightWidth: .3
  },
  viewNum: {
    fontSize: 20,
    fontFamily: "bold",
    color: COLORS.black
  },
  viewText: {
    fontSize: 14,
    fontFamily: "regular",
    color: COLORS.black,
    marginVertical: 4
  },
  viewLeft: {
    width: (SIZES.width - 32) / 3,
    alignItems: "center"
  },
  buttonActionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
    width: SIZES.width - 32
  },
  buttonAction: {
    width: (SIZES.width - 32) / 2 - 8,
    backgroundColor: COLORS.primary,
    borderRadius: 32,
    borderWidth: 1.4,
    borderColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 42
  },
  buttonActionIcon: {
    width: 16,
    height: 16,
    tintColor: COLORS.white,
    marginRight: 8
  },
  buttonActionText: {
    fontSize: 18,
    fontFamily: "semiBold",
    color: COLORS.white
  },
  buttonActionRight: {
    width: (SIZES.width - 32) / 2 - 8,
    borderRadius: 32,
    borderWidth: 1.4,
    borderColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 42
  },
  buttonActionIconRight: {
    width: 16,
    height: 16,
    tintColor: COLORS.primary,
    marginRight: 8
  },
  buttonActionTextRight: {
    fontSize: 18,
    fontFamily: "semiBold",
    color: COLORS.primary
  },
  separateLine: {
    width: SIZES.width - 32,
    height: .1,
    backgroundColor: COLORS.gray,
  }
})
export default MentorProfile