import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import the icon library
import LoginScreen from './screens/LoginScreen';
import SelectAccountScreen from './screens/SelectAccountScreen';
import RegisterScreen from './screens/RegisterScreen';
import ParentHomeScreen from './screens/ParentHomeScreen';
import ParentChildDetailsScreen from './screens/ParentChildDetailsScreen';
import ParentCalendarScreen from './screens/ParentCalendarScreen';
import ParentChatScreen from './screens/ParentChatScreen';
import ParentNotificationsScreen from './screens/ParentNotificationsScreen';
import ParentProfileScreen from './screens/ParentProfileScreen';
import { AuthProvider } from './AuthContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Home" 
        component={ParentHomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Calendar" 
        component={ParentCalendarScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Chat" 
        component={ParentChatScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Notifications" 
        component={ParentNotificationsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ParentProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SelectAccount" component={SelectAccountScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ title: '' }} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
          <Stack.Screen name="ParentChildDetails" component={ParentChildDetailsScreen} options={{ title: 'Child Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
