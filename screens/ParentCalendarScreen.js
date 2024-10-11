// ParentCalendarScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ParentCalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      {/* Calendar component can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ParentCalendarScreen;
