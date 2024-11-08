import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import { ScrollView } from 'react-native-virtualized-view';
import SectionSubItem from '../components/SectionSubItem';
import CourseSectionCard from '../components/CourseSectionCard';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';

const CourseLessons = () => {
  const navigation = useNavigation();
  const { colors, dark } = useTheme();
  
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={styles.subHeaderContainer}>
        <Text style={[styles.subHeaderLeft, { 
          color: dark? COLORS.white : COLORS.greyscale900
        }]}>124 Lessons</Text>
        <TouchableOpacity
          onPress={()=>navigation.navigate("CourseDetailsMyLessons")}
         >
          <Text style={styles.subHeaderRight}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.contentContainer, { 
        backgroundColor: dark ? COLORS.dark1 : COLORS.tertiaryWhite,
      }]}>
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
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  subHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12
  },
  subHeaderLeft: {
    fontSize: 18,
    fontFamily: "bold",
    color: COLORS.black,
    marginRight: 16
  },
  subHeaderRight: {
    fontSize: 14,
    fontFamily: "bold",
    color: COLORS.primary
  },
  contentContainer: {
    backgroundColor: COLORS.tertiaryWhite,
    flex: 1,
  },
})

export default CourseLessons