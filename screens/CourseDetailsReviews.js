import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import ReviewCard from '../components/ReviewCard';
import { Fontisto } from "@expo/vector-icons";
import { courseReviews } from '../data';
import { useTheme } from '../theme/ThemeProvider';

const CourseDetailsReviews = ({ navigation }) => {
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
                    4.8 (4,479 reviews)
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

    /*
    ** render content
    */
   const renderContent = ()=>{
    const [selectedRating, setSelectedRating] = useState("All");
  
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
   }
  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {renderHeader()}
            {renderContent()}
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
        marginVertical: 12
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

export default CourseDetailsReviews