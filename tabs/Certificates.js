import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons, images } from '../constants';
import Button from '../components/Button';
import { useTheme } from '../theme/ThemeProvider';

const Certificates = () => {
    const { dark, colors } = useTheme();
  return (
    <View style={styles.container}>
        <View style={{ 
            alignItems: 'center',
            borderWidth: 12,
            alignItems: "center",
            borderColor: dark ? COLORS.dark1 : "#181a20",
            flex: 1,
            backgroundColor: dark ? COLORS.dark2 : COLORS.white
            }}>
       <Image
         source={images.logo}
         resizeMode='contain'
         style={styles.logoIcon}
       />
       <Text style={[styles.title, { 
         color: dark? COLORS.white : COLORS.greyscale900
       }]}>
        Certificate of Completion
       </Text>
       <Text style={styles.subtitle}>Presented to</Text>
        <Text style={styles.fullName}>Andrew Ainsley</Text>
        <Text style={styles.completion}>For the successful completion of</Text>
        <Text style={[styles.courseName, { 
            color: dark? COLORS.white : COLORS.greyscale900
        }]}>3D Design Illustration Course</Text>
        <Text style={styles.date}>Issued on December 20, 2024</Text>
        <Text style={styles.certificateNum}>ID: SKI237376646</Text>
        <Image
          source={icons.signature}
          resizeMode='contain'
          style={styles.signatureIcon}
        />
        <Text style={styles.managerName}>James Anderson Lawren</Text>
        <View style={styles.separateLine} />
        <Text style={styles.courseManager}>Educate Courses Manager</Text>
        </View>
        <View style={styles.bottomContainer}>
           <Button
             title="Download Certificate"
             filled
             style={styles.button}
           />
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoIcon: {
        width: 54,
        height: 54,
        tintColor: COLORS.primary,
        marginTop: 22,
        marginBottom: 12
    },
    title: {
        fontSize: 20,
        fontFamily: "bold",
        color: COLORS.black,
        textAlign: "center",
        marginBottom: 16
    },
    subtitle: {
        fontSize: 12,
        fontFamily: "regular",
        color: "gray"
    },
    fullName: {
        fontSize: 20,
        fontFamily: "bold",
        color: COLORS.primary,
        textAlign: "center",
        marginVertical: 22
    },
    completion: {
        fontSize: 12,
        fontFamily: "regular",
        color: "gray"
    },
    courseName: {
        fontSize: 18,
        fontFamily: "bold",
        color: COLORS.black,
        textAlign: "center",
        marginVertical: 16
    },
    date: {
        fontSize: 12,
        fontFamily: "regular",
        color: "gray"
    },
    certificateNum: {
        fontSize: 12,
        fontFamily: "regular",
        color: "gray",
        marginVertical: 16
    },
    signatureIcon: {
        width: 70,
        height: 70,
        tintColor: COLORS.primary
    },
    managerName: {
        fontSize: 16,
        fontFamily: "bold",
        color: COLORS.primary,
        marginTop: 22,
        marginBottom: 12
    },
    separateLine: {
        width: SIZES.width - 112,
        height: .3,
        borderColor: "rgba(0, 0, 0, .1)",
        borderWidth: .3,
    },
    courseManager: {
        fontSize: 12,
        fontFamily: "regular",
        color: "gray",
        marginTop: 12
    },
    bottomContainer: {
        height: 82,
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: SIZES.width - 31
    }
})

export default Certificates