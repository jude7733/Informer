import { StatusBar } from 'expo-status-bar';
import {useColorScheme, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <View style={colorScheme === 'light' ? styles.lightContainer : styles.darkContainer}>
      <Text style={colorScheme === 'dark' ? styles.darkText : null}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  darkText: {
    color: '#eee',
  },
});
