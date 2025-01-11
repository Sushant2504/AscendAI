import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router/stack';
import NavBar from '../components/Navbar'; // Assuming NavBar component is located here

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack initialRouteName="signUp">
        <Stack.Screen
          name="signUp"
          options={{ headerShown: false }} // Hide NavBar for signUp
        />

        {/* Onboarding Screen: No NavBar */}
        <Stack.Screen
          name="onboard"
          options={{
            headerShown: false,
          }}
        />

        {/* Tab Screen: NavBar shown */}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            header: () => <NavBar />, // Show NavBar for tabs screen
          }}
        />

        {/* Other Screens */}
        <Stack.Screen
          name="quiz"
          options={{
            headerShown: true,
            header: () => <NavBar />, // Show NavBar for quiz
          }}
        />
        <Stack.Screen
          name="skills"
          options={{
            headerShown: true,
            header: () => <NavBar />, // Show NavBar for skills
          }}
        />
        <Stack.Screen
          name="learn"
          options={{
            headerShown: true,
            header: () => <NavBar />, // Show NavBar for learn
          }}
        />

        {/* SignIn Screen: No NavBar */}
        <Stack.Screen
          name="signIn"
          options={{
            headerShown: false,
          }}
        />

        {/* Chat Screen: NavBar shown */}
        <Stack.Screen
          name="chat"
          options={{
            headerShown: true,
            header: () => <NavBar />, // Show NavBar for chat
          }}
        />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
