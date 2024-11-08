import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, icons, images } from '../constants';
import { ScrollView } from 'react-native-virtualized-view';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';

const CourseAbout = () => {
  const navigation = useNavigation();
  const { colors, dark } = useTheme();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const description = "In this course, you'll learn everything you need to know about creating user-friendly and visually appealing digital experiences. Using Figma, a popular design tool, you'll discover how to turn your ideas into interactive prototypes and polished designs. Whether you're new to design or already have some experience, we'll cover all the basics and advanced techniques. From planning layouts to adding the final touches, we'll guide you through each step of the design process. By the end, you'll have the skills to design websites, apps, and more with confidence.";

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = showFullDescription ? description : description.slice(0, 150);

  return (
    <ScrollView  
        showsVerticalScrollIndicator={false} 
        style={[styles.container, { backgroundColor: colors.background }]}>
       <Text style={[styles.title, { 
        color: dark ? COLORS.white : COLORS.greyscale900
       }]}>Mentor</Text>
       <View style={styles.mentorCardContainer}>
            <View style={styles.mentorCardLeft}>
                <TouchableOpacity
                onPress={()=>navigation.navigate("MentorProfile")}>  
                <Image
                    source={images.user4}
                    resizeMode='contain'
                    style={styles.avatarImage}
                />
                </TouchableOpacity>
                <View>
                  <Text style={[styles.userFullname, { 
                    color: dark? COLORS.white : COLORS.greyscale900
                  }]}>Jonathan Williams</Text>
                  <Text style={styles.position}>Senior UI/UX Designer at Google</Text>
                </View>
            </View>
            <TouchableOpacity
              onPress={()=>navigation.navigate("Inbox")}>
              <Image
                 source={icons.chatBubble2Outline}
                 resizeMode='contain'
                 style={styles.chatBubbleIcon}
              />
            </TouchableOpacity>
       </View>
       <Text style={[styles.title, { 
         color: dark ? COLORS.white : COLORS.greyscale900
       }]}>About Course</Text>
       <View>
          <Text style={styles.description}>{truncatedDescription}</Text>
          {description.length > 150 && (
            <TouchableOpacity onPress={toggleDescription}>
              <Text style={{ color: COLORS.primary, marginTop: 10 }}>
                {showFullDescription ? 'Read Less' : 'Read More'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
       <Text style={[styles.title, { 
         color: dark ? COLORS.white : COLORS.greyscale900
       }]}>Tools</Text>
       <View style={styles.toolContainer}>
            <Image
              source={icons.figma}
              resizeMode='contain'
              style={styles.toolIcon}
            />
            <Text style={styles.toolName}>Figma</Text>
       </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 96
  },
  title: {
    fontSize: 20,
    fontFamily: "bold",
    color: COLORS.black,
    marginVertical: 12
  },
  mentorCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  mentorCardLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatarImage: {
    width: 48,
    height: 48,
    borderRadius: 999,
    marginRight: 16
  },
  userFullname: {
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
  chatBubbleIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.primary
  },
  description: {
    fontSize: 14,
    fontFamily: "regular",
    color: "gray"
  },
  toolContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8
  },
  toolIcon: {
    width: 32,
    height: 32,
    marginRight: 16
  },
  toolName: {
    fontSize: 18,
    fontFamily: "semiBold",
    color: COLORS.black
  }
})

export default CourseAbout