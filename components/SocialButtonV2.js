import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import { useTheme } from '../theme/ThemeProvider'

const SocialButtonV2 = ({ title, icon, onPress, iconStyles }) => {
  const { dark } = useTheme();
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[styles.container, {
          backgroundColor: dark ? COLORS.dark2 : COLORS.white,
          borderColor: dark? COLORS.dark2 : "gray",
        }]}>
        <Image
          source={icon}
          resizeMode='contain'
          style={[styles.icon, iconStyles ]}
        />
        <Text style={[styles.title, { 
          color: dark? COLORS.white : COLORS.black
        }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 32,
        height: 54,
        alignItems: 'center',
        paddingHorizontal: 22,
        borderRadius: 16,
        borderColor: "gray",
        borderWidth: 1,
        flexDirection: "row",
        marginTop: 12
    },
    icon: {
        height: 24,
        width: 24,
        marginRight: 32
    },
    title: {
        fontSize: 14,
        fontFamily: "semiBold",
        color: COLORS.black
    }
})

export default SocialButtonV2