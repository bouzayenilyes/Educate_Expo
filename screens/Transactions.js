import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { COLORS, icons, images } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { transactions } from '../data';
import TransactionCard from '../components/TransactionCard';
import { useTheme } from '../theme/ThemeProvider';

const Transactions = ({ navigation }) => {
  const { dark, colors } = useTheme();

  /**
   * Render Header
   */
  const renderHeader = ()=>{
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
            <Image
              source={images.logo}
              resizeMode='contain'
              style={styles.logo}
            />
            <Text style={[styles.headerTitle, { 
              color: dark? COLORS.white : COLORS.greyscale900
            }]}>Transactions</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image
              source={icons.search2}
              resizeMode='contain'
              style={[styles.searchIcon, { 
                tintColor: dark? COLORS.secondaryWhite : COLORS.greyscale900
              }]}
            />
          </TouchableOpacity>
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
      </View>
    )
  }
  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        <ScrollView style={[styles.scrollView, { 
          backgroundColor: dark ? COLORS.dark1 : COLORS.tertiaryWhite 
        }]} showsVerticalScrollIndicator={false}>
          <FlatList
            data={transactions}
            keyExtractor={item=>item.id}
            renderItem={({ item })=>(
              <TransactionCard
                name={item.name}
                image={item.image}
                status={item.status}
                onPress={()=>navigation.navigate("TransactionDetails")}
              />
            )}
          />
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
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingTop: 16
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  logo: {
    height: 32,
    width: 32,
    tintColor: COLORS.primary
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "bold",
    color: COLORS.black,
    marginLeft: 16
  },
  headerRight: {
    flexDirection: "row",
    alignContent: "center"
  },
  searchIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black
  },
  moreIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black,
    marginLeft: 12
  },
  scrollView: {
    paddingVertical: 16,
    backgroundColor: COLORS.tertiaryWhite,
    paddingHorizontal: 16
  }
})

export default Transactions