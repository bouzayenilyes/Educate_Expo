import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, illustrations } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

const NotFoundCard = () => {
  const { colors, dark } = useTheme();

  return (
    <View style={styles.container}>
       <Image
         source={illustrations.notFound}
         resizeMode='contain'
         style={styles.illustration}
       />
       <Text style={[styles.title, { 
        color: dark ? COLORS.white : COLORS.black
       }]}>Not Found</Text>
       <Text style={[styles.subtitle, { 
        color: dark? COLORS.white : COLORS.black
       }]}>Sorry, the keyword you entered cannot be found, 
        please check again or search with another keyword.</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 32,
        alignItems: "center",
        justifyContent: "center"
    },
    illustration: {
        width: 340,
        height: 250,
        marginVertical: 32
    },
    title: {
        fontSize: 24,
        fontFamily: "bold",
        color: COLORS.black,
        marginVertical: 16
    },
    subtitle: {
        fontSize: 16,
        fontFamily: "regular",
        color: COLORS.grayscale700,
        textAlign: "center"
    }
})

export default NotFoundCard