import { StyleSheet } from "react-native"
import { FONTS, COLORS, SIZES } from "../constants"

export const commonStyles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 4
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 22,
        paddingVertical: 30
    },
    headerTitle: {
        ...FONTS.h2,
        color: COLORS.white
    },
    subHeaderTitle: {
        ...FONTS.body4,
        color: COLORS.white,
        marginVertical: SIZES.padding,
        textAlign: 'center'
    },
    subHeaderTitleBold: {
        fontSize: 14,
        fontFamily: 'bold',
        color: COLORS.white,
        textAlign: 'center'
    },
    inputHeader: {
        ...FONTS.body4,
        marginVertical: 4,
        fontFamily: "semiBold",
    },
    checkBoxContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 18
    },
    checkbox: {
        marginRight: 8,
        height: 16,
        width: 16,
    },
    btn: {
        width: SIZES.width - 44,
        marginBottom: SIZES.padding,
    },
    btn1: {
        width: SIZES.width - 44,
        marginVertical: SIZES.padding,
    },
    center: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8
    },
    socialContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SIZES.padding2
    },
    socialLogo: {
        height: 62,
        width: 62
    },
    socialIconContainer: {
        marginHorizontal: SIZES.padding
    },
    backIcon: {
        position: "absolute",
        top: 10,
        left: 20,
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    OTPStyle: {
        backgroundColor: COLORS.gray,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 10,
        height: 58,
        width: 58,
        borderBottomWidth: 1,
    },
    header1Icon: {
        height: 45,
        width: 45,
        borderRadius: 22.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.gray
    },
    header2Icon: {
        height: 45,
        width: 45,
        borderRadius: 22.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white
    },
    header3Icon: {
        height: 45,
        width: 45,
        borderRadius: 22.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    header1: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 20,
    }
})