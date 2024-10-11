// ParentNotificationsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ParentNotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      {/* Notifications component can be added here */}
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

export default ParentNotificationsScreen;
