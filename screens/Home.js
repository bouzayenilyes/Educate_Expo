import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, icons, images } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import SectionHeader from '../components/SectionHeader';
import { banners, category, mostPopularCourses, topMentors } from '../data';
import CourseCard from '../components/CourseCard';
import { useTheme } from '../theme/ThemeProvider';

const Home = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { colors, dark } = useTheme();

  const renderBannerItem = ({ item }) => (
    <View style={styles.bannerContainer}>
      <View style={styles.bannerTopContainer}>
        <View>
          <Text style={styles.bannerDicount}>{item.discount} OFF</Text>
          <Text style={styles.bannerDiscountName}>{item.discountName}</Text>
        </View>
        <Text style={styles.bannerDiscountNum}>{item.discount}</Text>
      </View>
      <View style={styles.bannerBottomContainer}>
        <Text style={styles.bannerBottomTitle}>{item.bottomTitle}</Text>
        <Text style={styles.bannerBottomSubtitle}>{item.bottomSubtitle}</Text>
      </View>
    </View>
  );

  const keyExtractor = (item) => item.id.toString();

  const handleEndReached = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const renderDot = (index) => {
    return (
      <View
        style={[styles.dot, index === currentIndex ? styles.activeDot : null]}
        key={index}
      />
    );
  };

  /**
   * render header
   */
  const renderHeader = ()=>{
    return (
      <View style={styles.headerContainer}>
          <View style={styles.viewLeft}>
            <Image
              source={images.user1}
              resizeMode='contain'
              style={styles.userIcon}
            />
            <View style={styles.viewNameContainer}>
               <Text style={styles.greeeting}>Good Morning👋</Text>
               <Text style={[styles.title, { 
                color: dark ? COLORS.white : COLORS.greyscale900
               }]}>Andrew Ainsley</Text>
            </View>
          </View>
          <View style={styles.viewRight}>
            <TouchableOpacity
             onPress={()=>navigation.navigate("Notifications")}>
              <Image
                source={icons.notificationBell2}
                resizeMode='contain'
                style={[styles.bellIcon, { tintColor: dark ? COLORS.white : COLORS.greyscale900 }]}
              />
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>navigation.navigate("MyBookmark")}>
              <Image
                source={icons.bookmarkOutline}
                resizeMode='contain'
                style={[styles.bookmarkIcon, { tintColor: dark ? COLORS.white : COLORS.greyscale900 }]}
              />
            </TouchableOpacity>
          </View>
      </View>
    )
  }
  /**
   * Render search bar
   */
  const renderSearchBar = ()=>{

    const handleInputFocus = () => {
      // Redirect to another screen
      navigation.navigate('Search');
    };

    return (
      <TouchableOpacity
        onPress={()=>navigation.navigate("Search")}
        style={[styles.searchBarContainer, { 
          backgroundColor: dark ? COLORS.dark2 : COLORS.secondaryWhite
          }]}>
        <TouchableOpacity>
          <Image
            source={icons.search2}
            resizeMode='contain'
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TextInput
          placeholder='Search'
          placeholderTextColor={COLORS.gray}
          style={styles.searchInput}
          onFocus={handleInputFocus}
        />
        <TouchableOpacity>
          <Image
            source={icons.filter}
            resizeMode='contain'
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
  /**
   * Render banner
   */
  const renderBanner = ()=>{
    return (
      <View style={styles.bannerItemContainer}>
      <FlatList
        data={banners}
        renderItem={renderBannerItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / SIZES.width
          );
          setCurrentIndex(newIndex);
        }}
      />
      <View style={styles.dotContainer}>
        {banners.map((_, index) => renderDot(index))}
      </View>
    </View>
    )
  }

  /**
   * Render Top Mentors
   */
  const renderTopMentors = ()=>{

    const renderItem = ({ item, index }) => (
      <TouchableOpacity 
            onPress={()=>navigation.navigate("MentorProfile")}
            style={styles.mentorContainer}
            key={index}>
          <Image
            source={item.avatar}
            resizeMode='cover'
            style={styles.userAvatar}
          />
        <Text style={[styles.firstName, { 
          color: dark? COLORS.white : COLORS.greyscale900
        }]}>{item.firstName}</Text>
      </TouchableOpacity>
    )

    return (
      <View>
        <SectionHeader
          title="Top Mentors"
          subtitle="See All"
          onPress={()=>navigation.navigate("TopMentors")}
        />
        <FlatList
          data={topMentors}
          keyExtractor={item=>item.id}
          horizontal
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
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
        <SectionHeader
          title="Popular Courses"
          subtitle="See All"
          onPress={()=>navigation.navigate("MostPopularCourses")}
        />
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
        {renderSearchBar()}
        {renderBanner()}
        {renderTopMentors()}
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
  container:{
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16
  },
  headerContainer: {
    flexDirection: "row",
    width: SIZES.width - 32,
    justifyContent: "space-between",
    alignItems: "center"
  },
  userIcon: {
    width: 48,
    height: 48,
    borderRadius: 32
  },
  viewLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  greeeting: {
    fontSize: 12,
    fontFamily: "regular",
    color: "gray",
    marginBottom: 4
  },
  title: {
    fontSize: 20,
    fontFamily: "bold",
    color: COLORS.greyscale900
  },
  viewNameContainer: {
    marginLeft: 12
  },
  viewRight: {
    flexDirection: "row",
    alignItems: "center"
  },
  bellIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black,
    marginRight: 8
  },
  bookmarkIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black
  },
  searchBarContainer: {
    width: SIZES.width - 32,
    backgroundColor: COLORS.secondaryWhite,
    padding: 16,
    borderRadius: 12,
    height: 52,
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  searchIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.gray
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "regular",
    marginHorizontal: 8
  },
  filterIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.primary
  },
  bannerContainer: {
    width :SIZES.width - 32,
    height: 154 ,
    paddingHorizontal: 28,
    paddingTop: 28,
    borderRadius: 32,
    backgroundColor: COLORS.primary
  },
  bannerTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bannerDicount: {
    fontSize: 12,
    fontFamily: "medium",
    color: COLORS.white,
    marginBottom: 4
  },
  bannerDiscountName: {
    fontSize: 16,
    fontFamily: "bold",
    color: COLORS.white
  },
  bannerDiscountNum: {
    fontSize: 46,
    fontFamily: "bold",
    color: COLORS.white
  },
  bannerBottomContainer: {
    marginTop: 8
  },
  bannerBottomTitle: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.white
  },
  bannerBottomSubtitle: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.white,
    marginTop: 4
  },
  mentorContainer: {
    marginRight: 10,
    alignItems: "center"
  },
  userAvatar: {
    width: 64,
    height: 64,
    borderRadius: 999
  },
  firstName: {
    fontSize: 16,
    fontFamily: "semiBold",
    color: COLORS.dark2,
    marginTop: 6
  },
  bannerItemContainer: {
    width: "100%",
    paddingBottom: 10,
    backgroundColor: COLORS.primary,
    height: 170,
    borderRadius: 32,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: COLORS.white,
  },
})

export default Home