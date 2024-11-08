import { StyleSheet } from 'react-native';
import React from 'react';
import SectionSubItem from '../components/SectionSubItem';
import CourseSectionCard from '../components/CourseSectionCard';
import { COLORS } from '../constants';
import { ScrollView } from 'react-native-virtualized-view';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';

const Lessons = () => {
    const navigation = useNavigation();
    const { colors, dark } = useTheme();
    
  return (
        <ScrollView
          showsVerticalScrollIndicator={false} 
          style={[styles.contentContainer, { 
            backgroundColor: dark ? COLORS.dark1 : COLORS.tertiaryWhite
          }]}>
                <SectionSubItem
                    title="Section 1 - Introduction"
                    subtitle="15 mins"
                />
                <CourseSectionCard
                    num="01"
                    title="Why using 3D Belnder"
                    duration="10 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={true}
                />
                <CourseSectionCard
                    num="02"
                    title="3D Belnder Installation"
                    duration="5 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={true}
                />
                <SectionSubItem
                    title="Section 2 - Blender 3D Modelling"
                    subtitle="15 mins"
                />
                <CourseSectionCard
                    num="03"
                    title="Take a look Blender interface"
                    duration="5 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={true}
                />
                <CourseSectionCard
                    num="04"
                    title="Working with Shaders"
                    duration="10 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={true}
                />
                <CourseSectionCard
                    num="05"
                    title="The Basic of 3D Modelling"
                    duration="10 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={true}
                />
                <CourseSectionCard
                    num="06"
                    title="Using Blender Plugins"
                    duration="7 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={true}
                />
                <SectionSubItem
                    title="Section 3 - 3D advanced"
                    subtitle="15 mins"
                />
                 <CourseSectionCard
                    num="07"
                    title="Starting using Solidworks"
                    duration="10 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={true}
                />
                <CourseSectionCard
                    num="08"
                    title="Design system with Solidworks"
                    duration="10 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={true}
                />
                 <CourseSectionCard
                    num="09"
                    title="Solidworks & Blender - Part 1"
                    duration="20 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={true}
                />
                 <CourseSectionCard
                    num="10"
                    title="Solidworks & Blender - Part 2"
                    duration="20 mins"
                    onPress={() => navigation.navigate("CourseVideoPlay")}
                    isCompleted={true}
                />
            </ScrollView>
  )
};

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: COLORS.tertiaryWhite,
        flex: 1,
        paddingHorizontal: 16
    },
})

export default Lessons