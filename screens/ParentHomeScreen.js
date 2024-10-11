import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useAuth } from '../AuthContext';

const ParentHomeScreen = ({ navigation }) => {
  const { currentUser } = useAuth();
  
  const upcomingEvents = [
    { date: '2024-10-10', description: 'Appointment Day!' },
    { date: '2024-10-15', description: 'Vaccination Day!' },
    { date: '2024-11-01', description: 'Appointment Day!' },
    { date: '2024-11-05', description: 'Vaccination Day!' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profileSection}>
          <Image 
            source={require('../assets/mb.jpg')}
            style={styles.profilePicture}
          />
          <Text style={styles.greeting}>Hello there, {currentUser ? currentUser.name : 'User'}</Text>
        </View>

        <View style={styles.childDetails}>
          <Text style={styles.sectionTitle}>Information of the Child</Text>
          <TouchableOpacity 
            style={styles.detailsButton} 
            onPress={() => navigation.navigate('ParentChildDetails', { childDetails: {} })}>
            <Text style={styles.buttonText}>See Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.eventsSection}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {upcomingEvents.map((event, index) => (
              <View key={index} style={styles.eventCard}>
                <Text>{event.date}</Text>
                <Text>{event.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  childDetails: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsButton: {
    marginTop: 10,
    backgroundColor: '#4AA7FF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  eventsSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  eventCard: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    width: 150,
  },
});

export default ParentHomeScreen;
