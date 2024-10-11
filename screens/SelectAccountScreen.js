// SelectAccountScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SelectAccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Account Type</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Register', { accountType: 'Parent' })}>
        <Text style={styles.buttonText}>Parent</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Register', { accountType: 'Doctor' })}>
        <Text style={styles.buttonText}>Doctor</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.normalText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4AA7FF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  normalText: {
    fontSize: 14,
    color: '#888',
  },
  linkText: {
    fontSize: 14,
    color: '#4AA7FF',
    textDecorationLine: 'underline',
  },
});
