import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, TextInput } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, icons, illustrations } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import SectionSubItem from '../components/SectionSubItem';
import CourseSectionCard from '../components/CourseSectionCard';
import Button from '../components/Button';
import { useTheme } from '../theme/ThemeProvider';
import Rating from '../components/Rating';

const CourseDetails = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
                tintColor: dark ? COLORS.white : COLORS.greyscale900
              }]}
            />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: dark ? COLORS.white : COLORS.greyscale900 }]}>
            Intro to UI/UX Design
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.moreCircle}
            resizeMode='contain'
            style={[styles.moreIcon, {
              tintColor: dark ? COLORS.secondaryWhite : COLORS.greyscale900
            }]}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(false)}>
          <View style={[styles.modalContainer]}>
            <View style={[styles.modalSubContainer, {
              backgroundColor: dark ? COLORS.dark2 : COLORS.secondaryWhite
            }]}>
              <View style={styles.backgroundIllustration}>
                <Image
                  source={illustrations.background}
                  resizeMode='contain'
                  style={styles.modalIllustration}
                />
                <Image
                  source={icons.editPencil}
                  resizeMode='contain'
                  style={styles.editPencilIcon}
                />
              </View>
              <Text style={styles.modalTitle}>Course Completed!</Text>
              <Text style={[styles.modalSubtitle, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>
                Please leave a review for your course.
              </Text>
              <Rating
                color={COLORS.primary}
              />
              <TextInput
                placeholder="The courses & mentors are great 🔥"
                placeholderTextColor={ dark ? COLORS.secondaryWhite : COLORS.black}
                style={styles.modalInput}
              />
              <Button
                title="Write Review"
                filled
                onPress={() => {
                  setModalVisible(false)
                  navigation.goBack()
                }}
                style={{
                  width: "100%",
                  marginTop: 12
                }}
              />
              <Button
                title="Cancel"
                onPress={() => {
                  setModalVisible(false)
                }}
                textColor={dark ? COLORS.white : COLORS.primary }
                style={{
                  width: "100%",
                  marginTop: 12,
                  backgroundColor: dark ? COLORS.dark3 : COLORS.transparentTertiary,
                  borderColor: dark ? COLORS.dark3 :  COLORS.transparentTertiary
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
          title="Continue Course"
          style={styles.button}
          filled
          onPress={() => setModalVisible(true)}
        />
      </View>
      {renderModal()}
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
  contentContainer: {
    backgroundColor: COLORS.tertiaryWhite,
    flex: 1,
    paddingHorizontal: 16
  },
  bottomContainer: {
    height: 72,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0
  },
  button: {
    width: SIZES.width - 32
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: "bold",
    color: COLORS.primary,
    textAlign: "center",
    marginVertical: 12
  },
  modalSubtitle: {
    fontSize: 16,
    fontFamily: "regular",
    color: COLORS.black,
    textAlign: "center",
    marginVertical: 12,
    marginHorizontal: 16
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalSubContainer: {
    height: 622,
    width: SIZES.width * 0.86,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  backgroundIllustration: {
    height: 150,
    width: 150,
    marginVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    zIndex: -999
  },
  modalIllustration: {
    height: 150,
    width: 150,
  },
  modalInput: {
    width: "100%",
    height: 52,
    backgroundColor: COLORS.transparentTertiary,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginVertical: 12
  },
  editPencilIcon: {
    width: 42,
    height: 42,
    tintColor: COLORS.white,
    zIndex: 99999,
    position: "absolute",
    top: 54,
    left: 60,
  }
})

export default CourseDetails