import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../AuthContext';

const ParentChildDetailsScreen = ({ navigation }) => {
  const { childDetails, setChildDetails } = useAuth(); // Use context for child details

  const [localChildDetails, setLocalChildDetails] = useState({
    name: childDetails?.name || '',
    gender: childDetails?.gender || '',
    age: childDetails?.age || '',
    weight: childDetails?.weight || '',
  });

  useEffect(() => {
    // If childDetails is updated in context, update local state
    if (childDetails) {
      setLocalChildDetails(childDetails);
    }
  }, [childDetails]);

  const handleChange = (field, value) => {
    setLocalChildDetails({ ...localChildDetails, [field]: value });
  };

  const saveChildDetails = () => {
    if (!localChildDetails.name || !localChildDetails.gender || !localChildDetails.age || !localChildDetails.weight) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    setChildDetails(localChildDetails); // Save to context

    Alert.alert('Success', 'Child details saved successfully!', [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('HomeTabs');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Child Details</Text>
      <TextInput 
        placeholder="Child's Name" 
        value={localChildDetails.name} 
        onChangeText={(value) => handleChange('name', value)} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Gender (Male/Female)" 
        value={localChildDetails.gender} 
        onChangeText={(value) => handleChange('gender', value)} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Age" 
        keyboardType="numeric" 
        value={localChildDetails.age} 
        onChangeText={(value) => handleChange('age', value)} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Weight (kg)" 
        keyboardType="numeric" 
        value={localChildDetails.weight} 
        onChangeText={(value) => handleChange('weight', value)} 
        style={styles.input} 
      />

      <TouchableOpacity style={styles.saveButton} onPress={saveChildDetails}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#010003',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#4AA7FF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ParentChildDetailsScreen;
