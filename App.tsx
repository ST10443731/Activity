import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Hello, I'm Bonang!</Text>
        <Text style={styles.paragraph}>My favorite color is yellow.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light gray background for a modern look
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 40, // Large font size for header
    fontWeight: '700', // Bold font weight for prominence
    color: '#333', // Darker text color for better readability
    marginBottom: 20, // More space below the header
  },
  paragraph: {
    fontSize: 24, // Large font size for paragraph
    color: '#ffcc00', // Yellow text color
    textAlign: 'center', // Center-align the text
  },
});
