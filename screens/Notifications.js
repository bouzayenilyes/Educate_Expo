import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import NotificationCard from '../components/NotificationCard';
import { notifications } from '../data';
import { useTheme } from '../theme/ThemeProvider';

const Notifications = ({ navigation }) => {
  const { colors, dark } = useTheme();

  /**
   * Render Header
   */
  const renderHeader = ()=>{
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity 
          onPress={()=>navigation.goBack()}
          style={[styles.headerIconContainer, { 
            borderColor: dark ? COLORS.dark3 : COLORS.grayscale200
          }]}>
            <Image
              source={icons.back}
              resizeMode='contain'
              style={[styles.arrowBackIcon, {
                tintColor: dark? COLORS.white : COLORS.greyscale900
              }]}
            />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { 
          color: dark? COLORS.white : COLORS.greyscale900
        }]}>Notifications</Text>
        <Text>{" "}</Text>
      </View>
    )
  }
  return (
   <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerNoti}>
              <View style={styles.headerNotiLeft}>
                  <Text style={[styles.notiTitle,{ 
                    color: dark? COLORS.white : COLORS.greyscale900
                  }]}>Recent</Text>
                  <View style={styles.headerNotiView}>
                      <Text style={styles.headerNotiTitle}>4</Text>
                  </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.clearAll}>Clear All</Text>
              </TouchableOpacity>
          </View>
          <FlatList
            data={notifications}
            keyExtractor={item=>item.id}
            renderItem={({ item })=>(
              <NotificationCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                date={item.date}
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
    padding: 16
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  headerIconContainer: {
    height: 46,
    width: 46,
    borderWidth: 1,
    borderColor: COLORS.grayscale200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999
  },
  arrowBackIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "bold",
    color: COLORS.black
  },
  headerNoti: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12
  },
  headerNotiLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  notiTitle: {
    fontSize: 16,
    fontFamily: "bold",
    color: COLORS.black
  },
  headerNotiView: {
    height: 16,
    width: 16,
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4
  },
  headerNotiTitle: {
    fontSize: 10,
    fontFamily: "bold",
    color: COLORS.white
  },
  clearAll: {
    fontSize: 14,
    color: COLORS.primary,
    fontFamily: "medium"
  }
})

export default Notifications