import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-virtualized-view';
import { mentorInfo } from '../data';
import ReviewCard from '../components/ReviewCard';
import { COLORS } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

const ProfileReviews = () => {
    const { colors } = useTheme();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={[styles.scrollView, { backgroundColor: colors.background }]}>
            <FlatList
                data={mentorInfo.reviews}
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
    scrollView: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingVertical: 16
    }
})

export default ProfileReviews