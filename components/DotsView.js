import { View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const DotsView = ({
    progress,
    dotSize = 10,
    dotSpacing = 5,
    dotColor = 'gray',
    activeDotColor = COLORS.primary,
    numDots = 3,
}) => {
    const dots = []

    for (let i = 0; i < numDots; i++) {
        dots.push(
            <View
                key={i}
                style={[
                    {
                        borderWidth: 1,
                        borderColor: 'transparent',
                    },
                    {
                        width: dotSize,
                        height: dotSize,
                        borderRadius: dotSize / 2,
                        marginHorizontal: dotSpacing / 2,
                    },
                    progress >= i / (numDots - 1)
                        ? {
                            backgroundColor: activeDotColor,
                        }
                        : {
                            backgroundColor: dotColor,
                        },
                ]}
            />
        )
    }
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {dots}
        </View>
    )
}

export default DotsView