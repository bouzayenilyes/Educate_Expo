import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

const SectionSubItem = ({ title, subtitle }) => {
  const { dark } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: dark ? COLORS.secondaryWhite : "gray" }]}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 32,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 8
    },
    title: {
        fontSize: 16,
        fontFamily: 'semiBold',
        color: "gray"
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'semiBold',
        color: COLORS.primary
    }
})

export default SectionSubItem