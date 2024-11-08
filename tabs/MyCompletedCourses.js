import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { myCompletedCourses } from '../data';
import { COLORS, SIZES } from '../constants';
import CourseProgressCircleBar from '../components/CourseProgressCircleBar';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';

const MyCompletedCourses = () => {
  const navigation = useNavigation();
  const { colors, dark } = useTheme();

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("CourseDetailsLessons")}
        style={[styles.cardContainer, { 
          backgroundColor: dark? COLORS.dark2 : COLORS.white,
          shadowColor: dark? COLORS.black :  "#FAFAFA",
          shadowOpacity: dark ? 0 : 0.2 ,
          shadowRadius: dark ? 0 : 4,
          elevation: dark ? 0 : 1,
        }]}
        key={index}>
        <View style={styles.cardLeft}>
          <Image
            source={item.image}
            resizeMode='cover'
            style={styles.image}
          />
          <View style={styles.courseInfo}>
            <Text style={[styles.courseName,  { 
            color: dark? COLORS.white : COLORS.black
          }]}>{item.name}</Text>
            <Text style={styles.courseDuration}>{item.duration}</Text>
          </View>
        </View>
        <View style={styles.cardRight}>
          <CourseProgressCircleBar
            numberOfCourseCompleted={item.numberOfVideosCompleted}
            totalNumberOfCourses={item.numberOfVideos}
          />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={[styles.container,{ 
      backgroundColor: dark ? COLORS.dark1 : COLORS.tertiaryWhite
    }]}>
      <FlatList
        data={myCompletedCourses}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiaryWhite,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: SIZES.width - 32,
    height: 112,
    marginVertical: 6,
    borderRadius: 12,
    paddingHorizontal: 12,
    elevation: 1,
    shadowColor: "#FAFAFA",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    height: 84,
    width: 84,
    borderRadius: 16,
    marginRight: 12
  },
  courseName: {
    fontSize: 16,
    fontFamily: 'bold',
    color: COLORS.black,
    marginTop: 12,
    marginBottom: 12
  },
  courseDuration: {
    fontSize: 12,
    color: "gray",
    marginTop: 4
  },
  courseInfo: {
    width: SIZES.width - 230
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: 'center',
    flex: 1
  },
  cardRight: {
    marginLeft: 16,
    flexDirection: "row",
    alignItems: 'center'
  }
})

export default MyCompletedCourses