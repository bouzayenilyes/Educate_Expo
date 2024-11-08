import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Video, ResizeMode } from 'expo-av';

const CourseVideoPlay = ({ navigation }) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

  return (
   <SafeAreaView style={styles.area}>
        <View style={styles.container}>
            <StatusBar 
              hideTransitionAnimation="fade"
              style="light"
            />
            <View style={styles.headerContainer}>
                <TouchableOpacity
                 onPress={()=>navigation.goBack()}>
                    <Image
                      source={icons.back}
                      resizeMode='contain'
                      style={styles.arrowBackIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Introduction of Figma</Text>
            </View>
            <Video
                ref={video}
                style={styles.video}
                source={{
                uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
   </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: "black",
    },
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    arrowBackIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.white
    },
    headerTitle: {
      fontSize: 16,
      fontFamily: "bold",
      color: COLORS.white,
      textAlign: "center",
      marginLeft: 16
    },
    headerContainer: {
        position: "absolute",
        top: 16,
        left: 16,
        flexDirection: "row",
        alignItems: "center",
        zIndex: 9999
    },
    video: {
        width: "100%",
        height: "100%"
    }
})

export default CourseVideoPlay