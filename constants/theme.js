import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const COLORS = {
    primary: '#335EF7',
    secondary: '#FFD300',
    tertiary: "#6C4DDA",
    success: "#0ABE75",
    black: "#181A20",
    black2: "#1D272F",
    info: "#246BFD",
    warning: "#FACC15",
    error: "#F75555",
    disabled: "#D8D8D8",
    white: "#FFFFFF",
    secondaryWhite: "#F8F8F8",
    tertiaryWhite: "#F7F7F7",
    greeen: "#0ABE75",
    secondaryWhite: '#F9F9FF',
    tertiaryWhite: '#fafafa',
    gray: "#9E9E9E",
    gray2: "#35383F",
    gray3: "#9E9E9E",
    dark1: "#000000",
    dark2: "#1F222A",
    dark3: "#35383F",
    greyscale900: "#212121",
    greyScale800: "#424242",
    grayscale700: "#616161",
    grayscale400: "#BDBDBD",
    greyscale300: "#E0E0E0",
    greyscale500: "#FAFAFA",
    greyscale600: "#757575",
    grayscale200: "#EEEEEE",
    grayscale100: "#F5F5F5",
    tansparentPrimary: "rgba(51, 94, 247, 0.08)",
    transparentSecondary: "rgba(108,77,218, .15)",
    transparentTertiary: "rgba(51, 94, 247, .1)",
    transparentRed: "rgba(255,62,61, .15)",
    blackTie: "#474747",
    grayTie: '#BCBCBC'
};

export const SIZES = {
    // Global SIZES
    base: 8,
    font: 14,
    radius: 30,
    padding: 8,
    padding2: 12,
    padding3: 16,

    // FONTS Sizes
    largeTitle: 50,
    h1: 36,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // App Dimensions
    width,
    height,
};

export const FONTS = {
    largeTitle: { fontFamily: 'black', fontSize: SIZES.largeTitle, lineHeight: 55, color: "black" },
    h1: { fontFamily: 'bold', fontSize: SIZES.h1, lineHeight: 36, color: "black" },
    h2: { fontFamily: 'bold', fontSize: SIZES.h2, lineHeight: 30, color: "black" },
    h3: { fontFamily: 'bold', fontSize: SIZES.h3, lineHeight: 22, color: "black" },
    h4: { fontFamily: 'bold', fontSize: SIZES.h4, lineHeight: 20 },
    body1: { fontFamily: 'regular', fontSize: SIZES.body1, lineHeight: 36, color: "black" },
    body2: { fontFamily: 'regular', fontSize: SIZES.body2, lineHeight: 30, color: "black" },
    body3: { fontFamily: 'regular', fontSize: SIZES.body3, lineHeight: 22, color: "black" },
    body4: { fontFamily: 'regular', fontSize: SIZES.body4, lineHeight: 20, color: "black" },
};



const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;