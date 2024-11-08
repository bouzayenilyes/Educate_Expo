import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { topMentors } from '../data';
import MentorCard from '../components/MentorCard';
import { useTheme } from '../theme/ThemeProvider';

const TopMentors = ({ navigation }) => {
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
                        style={[styles.backIcon,{ 
                            tintColor: dark ? COLORS.white : COLORS.greyscale900
                        }]}
                    />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { 
                    color: dark ? COLORS.white : COLORS.greyscale900
                }]}>
                   Top Mentors
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
     * Render top mentors
     */
    const renderContent = ()=>{

        return (
            <View>
                <FlatList
                  data={topMentors}
                  keyExtractor={item=>item.id}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item, index })=>(
                    <MentorCard
                        avatar={item.avatar} 
                        fullName={item.fullName} 
                        position={item.position} 
                        onPress={()=>navigation.navigate("Inbox")}
                    />
                  )}
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
        tintColor: COLORS.greyscale900
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'bold',
        color: COLORS.greyscale900,
        marginLeft: 16
    },
    searchIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.greyscale900
    }
})

export default TopMentors