import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { COLORS, icons } from '../constants';
import { ScrollView } from 'react-native-virtualized-view';
import { courseReviews } from '../data';
import ReviewCard from '../components/ReviewCard';
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';

const CourseReviews = () => {
  const navigation = useNavigation();
  const [selectedRating, setSelectedRating] = useState("All");
  const { colors, dark } = useTheme();

  const renderRatingButton = (rating) => (
    <TouchableOpacity
      key={rating}
      style={[styles.ratingButton, selectedRating === rating && styles.selectedRatingButton]}
      onPress={() => setSelectedRating(rating)}
    >
      <Fontisto name="star" size={12} color={selectedRating === rating ? COLORS.white : COLORS.primary} />
      <Text style={[styles.ratingButtonText, selectedRating === rating && styles.selectedRatingButtonText]}>{rating}</Text>
    </TouchableOpacity>
  );

  const filteredReviews = selectedRating === "All" ? courseReviews : courseReviews.filter(review => review.avgRating === selectedRating);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.reviewHeaderContainer}>
        <View style={styles.reviewHeaderLeft}>
          <Image
            source={icons.star2}
            resizeMode='contain'
            style={styles.starIcon}
          />
          <Text style={[styles.starTitle, { 
            color: dark? COLORS.white : COLORS.black2
          }]}>{"  "}4.8 (4,479 reviews)</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("CourseDetailsReviews")}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* Horizontal FlatList for rating buttons */}
      <FlatList
        horizontal
        data={["All", 5, 4, "3", "2", "1"]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => renderRatingButton(item)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.ratingButtonContainer}
      />
      <FlatList
        data={filteredReviews}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <ReviewCard
            avatar={item.avatar}
            name={item.name}
            description={item.description}
            avgRating={item.avgRating}
            date={item.date}
            numLikes={item.numLikes}
          />
        )}
      />
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  reviewHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12
  },
  reviewHeaderLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  starIcon: {
    width: 16,
    height: 16,
  },
  starTitle: {
    fontSize: 16,
    fontFamily: "bold",
    color: COLORS.black2
  },
  seeAll: {
    fontSize: 16,
    fontFamily: "semiBold",
    color: COLORS.primary
  },
  // Styles for rating buttons
  ratingButtonContainer: {
    paddingVertical: 10,
  },
  ratingButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.4,
    borderColor: COLORS.primary,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  selectedRatingButton: {
    backgroundColor: COLORS.primary,
  },
  ratingButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    marginLeft: 10,
  },
  selectedRatingButtonText: {
    color: COLORS.white,
  },
})

export default CourseReviews