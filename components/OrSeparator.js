import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

const OrSeparator = ({ text }) => {
  const { dark } = useTheme();

  return (
    <View style={styles.container}>
       <View style={[styles.line, { backgroundColor: dark ? COLORS.gray2 : COLORS.grayscale200 }]} />
      <Text style={[styles.orText, { color: dark ? COLORS.white : COLORS.black }]}>{text}</Text>
      <View style={[styles.line, { backgroundColor: dark ? COLORS.gray2 : COLORS.grayscale200 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },
  line: {
    flex: 1,
    height: .4,
    backgroundColor: COLORS.grayscale200,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 19.25,
    fontFamily: "medium",
    color: COLORS.black,
    textAlign: "center",
  },
});

export default OrSeparator;