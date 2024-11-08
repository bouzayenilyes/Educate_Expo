import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, icons, images } from "../constants";
import SocialButtonV2 from "../components/SocialButtonV2";
import { useTheme } from "../theme/ThemeProvider";

const Welcome = ({ navigation }) => {
  const { colors, dark } = useTheme();

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Image source={images.logo} resizeMode="contain" style={styles.logo} />
        <Text style={[styles.title, { color: colors.text }]}>Welcome Back!</Text>
        <Text style={[styles.subtitle, { color: dark ? COLORS.white : "black" }]}>
          Hello there, Continue with and listen the stories from around the world.
        </Text>
        <View style={{ marginVertical: 32 }}>
          <SocialButtonV2 title="Continue with Apple" icon={icons.appleLogo} onPress={() => navigation.navigate("Signup")} 
          iconStyles={{ tintColor: dark ? COLORS.white : COLORS.black }} />
          <SocialButtonV2 title="Continue with Google" icon={icons.google} onPress={() => navigation.navigate("Signup")} />
          <SocialButtonV2 title="Continue with Email" icon={icons.email2} onPress={() => navigation.navigate("Signup")} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.loginTitle, {
            color: dark ? COLORS.white : "black"
          }]}>Already have account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginSubtitle}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={[styles.bottomTitle, {
          color: dark ? COLORS.white : COLORS.black
        }]}>
          By continuing, you accept the Terms Of Use and
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={[styles.bottomSubtitle, {
            color: dark ? COLORS.white : COLORS.black
          }]}>Privacy Policy.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 22,
    marginTop: -22,
    tintColor: COLORS.primary
  },
  title: {
    fontSize: 28,
    fontFamily: "bold",
    color: COLORS.black,
    marginVertical: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "regular",
    color: "black",
    textAlign: "center",
    paddingHorizontal: 16,
  },
  loginTitle: {
    fontSize: 14,
    fontFamily: "regular",
    color: "black",
  },
  loginSubtitle: {
    fontSize: 14,
    fontFamily: "semiBold",
    color: COLORS.primary,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 32,
    right: 0,
    left: 0,
    width: SIZES.width - 32,
    alignItems: "center",
  },
  bottomTitle: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.black,
  },
  bottomSubtitle: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.black,
    textDecorationLine: "underline",
    marginTop: 2,
  },
});

export default Welcome;