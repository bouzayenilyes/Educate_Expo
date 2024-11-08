import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { ScrollView } from 'react-native-virtualized-view';
import LanguageItem from '../components/LanguageItem';
import { useTheme } from '../theme/ThemeProvider';

const SettingsLanguage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { colors, dark } = useTheme();

  const handleCheckboxPress = (itemTitle) => {
    if (selectedItem === itemTitle) {
      // If the clicked item is already selected, deselect it
      setSelectedItem(null);
    } else {
      // Otherwise, select the clicked item
      setSelectedItem(itemTitle);
    }
  };
  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header title="Language & Region" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.title, { color: dark ? COLORS.white : COLORS.black }]}>Suggested</Text>
          <View style={{ marginTop: 12 }}>
            <LanguageItem
              checked={selectedItem === 'English (US)'}
              name="English (US)"
              onPress={() => handleCheckboxPress('English (US)')}
            />
            <LanguageItem
              checked={selectedItem === 'English (UK)'}
              name="English (UK)"
              onPress={() => handleCheckboxPress('English (UK)')}
            />
          </View>
          <Text style={[styles.title, { color: dark ? COLORS.white : COLORS.black }]}>Others</Text>
          <LanguageItem
            checked={selectedItem === 'Mandarin'}
            name="Mandarin"
            onPress={() => handleCheckboxPress('Mandarin')}
          />
          <LanguageItem
            checked={selectedItem === 'Hindi'}
            name="Hindi"
            onPress={() => handleCheckboxPress('Hindi')}
          />
          <LanguageItem
            checked={selectedItem === 'Spanish'}
            name="Spanish"
            onPress={() => handleCheckboxPress('Spanish')}
          />
          <LanguageItem
            checked={selectedItem === 'French'}
            name="French"
            onPress={() => handleCheckboxPress('French')}
          />
          <LanguageItem
            checked={selectedItem === 'Arabic'}
            name="Arabic"
            onPress={() => handleCheckboxPress('Arabic')}
          />
          <LanguageItem
            checked={selectedItem === 'Bengali'}
            name="Bengali"
            onPress={() => handleCheckboxPress('Bengali')}
          />
          <LanguageItem
            checked={selectedItem === 'Russian'}
            name="Russian"
            onPress={() => handleCheckboxPress('Russian')}
          />
          <LanguageItem
            checked={selectedItem === 'Indonesia'}
            name="Indonesia"
            onPress={() => handleCheckboxPress('Indonesia')}
          />
          <LanguageItem
            checked={selectedItem === 'Chinese'}
            name="Chinese"
            onPress={() => handleCheckboxPress('Chinese')}
          />
          <LanguageItem
            checked={selectedItem === 'Vietnamese'}
            name="Vietnamese"
            onPress={() => handleCheckboxPress('Vietnamese')}
          />
          <LanguageItem
            checked={selectedItem === 'Marathi'}
            name="Marathi"
            onPress={() => handleCheckboxPress('Marathi')}
          />
          <LanguageItem
            checked={selectedItem === 'Yue Chinese (Cantonese)'}
            name="Yue Chinese (Cantonese)"
            onPress={() => handleCheckboxPress('Yue Chinese (Cantonese)')}
          />
          <LanguageItem
            checked={selectedItem === 'Southern Min (Hokkien)'}
            name="Southern Min (Hokkien)"
            onPress={() => handleCheckboxPress('Southern Min (Hokkien)')}
          />
          <LanguageItem
            checked={selectedItem === 'Persian (Farsi)'}
            name="Persian (Farsi)"
            onPress={() => handleCheckboxPress('Persian (Farsi)')}
          />
          <LanguageItem
            checked={selectedItem === 'Polish'}
            name="Polish"
            onPress={() => handleCheckboxPress('Polish')}
          />
          <LanguageItem
            checked={selectedItem === 'Kannada'}
            name="Kannada"
            onPress={() => handleCheckboxPress('Kannada')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16
  },
  title: {
    fontSize: 20,
    fontFamily: "bold",
    color: COLORS.black,
    marginVertical: 16
  }
})

export default SettingsLanguage