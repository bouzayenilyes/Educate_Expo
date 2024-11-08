import { Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export const launchImagePicker = async () => {
    await checkMediaPermissions()

    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    })

    if (!result.canceled) {
        return result.assets[0].uri
    }
}

const checkMediaPermissions = async () => {
    if (Platform.OS !== 'web') {
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (permissionResult === false) {
            return Promise.reject('We need permission to access your photos')
        }
    }

    return Promise.resolve()
}