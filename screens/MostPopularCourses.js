import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { category, mostPopularCourses } from '../data';
import CourseCard from '../components/CourseCard';
import { ScrollView } from 'react-native-virtualized-view';
import { useTheme } from '../theme/ThemeProvider';

const MostPopularCourses = ({ navigation }) => {
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
                <Text style={[styles.headerTitle, { 
                  color: dark? COLORS.white : COLORS.greyscale900
                }]}>
                   Most Popular Courses
                </Text>
            </View>
            <TouchableOpacity>
                <Image
                    source={icons.search3}
                    resizeMode='contain'
                    style={[styles.searchIcon, { 
                       tintColor: dark? COLORS.white : COLORS.greyscale900
                    }]}
                />
            </TouchableOpacity>
        </View>
        )
    }
   /**
   * Render popular courses
   */
  const renderPopularCourses = () =>{
    const [selectedCategories, setSelectedCategories] = useState(["1"]);

    const filteredCourses = mostPopularCourses.filter(course => selectedCategories.includes("1") || selectedCategories.includes(course.categoryId));

   // Category item
   const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: selectedCategories.includes(item.id) ? COLORS.primary : "transparent",
        padding: 10,
        marginVertical: 5,
        borderColor: COLORS.primary,
        borderWidth: 1.3,
        borderRadius: 24,
        marginRight: 12,
      }}
      onPress={() => toggleCategory(item.id)}>
      <Text style={{
        color: selectedCategories.includes(item.id) ? COLORS.white : COLORS.primary
      }}>{item.name}</Text>
    </TouchableOpacity>
  );

     // Toggle category selection
      const toggleCategory = (categoryId) => {
        const updatedCategories = [...selectedCategories];
        const index = updatedCategories.indexOf(categoryId);

        if (index === -1) {
          updatedCategories.push(categoryId);
        } else {
          updatedCategories.splice(index, 1);
        }

        setSelectedCategories(updatedCategories);
      };

    return (
      <View>
        <FlatList
          data={category}
          keyExtractor={item=>item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={renderCategoryItem}
        />
        <FlatList
          data={filteredCourses}
          keyExtractor={item=>item.id}
          renderItem={({ item })=>{
            return (
              <CourseCard
                name={item.name}
                image={item.image}
                category={item.category}
                price={item.price}
                isOnDiscount={item.isOnDiscount}
                oldPrice={item.oldPrice}
                rating={item.rating}
                numStudents={item.numStudents}
                onPress={()=>navigation.navigate("CourseDetailsMore")}
                categoryId={item.categoryId} 
              />
            )
          }}
        />
      </View>
    )
  }
  return (
     <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {renderHeader()}
            <ScrollView showsVerticalScrollIndicator={false}>
            {renderPopularCourses()}
            </ScrollView>
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
    searchIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.black
    }
})

export default MostPopularCourses