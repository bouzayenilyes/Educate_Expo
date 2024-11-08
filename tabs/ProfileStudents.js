import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import { ScrollView } from 'react-native-virtualized-view';
import { mentorInfo } from '../data';
import StudentCard from '../components/StudentCard';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';

const ProfileStudents = () => {
   const navigation = useNavigation();
   const { colors, dark } = useTheme();

  return (
    <ScrollView 
      style={[styles.scrollView, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}>
        <FlatList
          data={mentorInfo.students}
          keyExtractor={item=>item.id}
          renderItem={({ item, index })=>(
            <StudentCard
              avatar={item.avatar}
              fullName={item.fullName}
              position={item.position}
              onPress={()=>navigation.navigate("Inbox")}
            />
          )}
        />
    </ScrollView>
  )
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})

export default ProfileStudents