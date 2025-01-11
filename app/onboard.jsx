import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons'; // For FontAwesome icon

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const images = [
    require('./../assets/images/onboard (1).png'),
    require('./../assets/images/onboard (2).png'),
    require('./../assets/images/onboard (3).png'),
    require('./../assets/images/onboard (4).png'),
  ];

  const titles = [
    "Welcome to Ascend AI!",
    "Track Your Progress",
    "Enhance Your Skills",
    "Ready to Start Your Journey"
  ];

  const descriptions = [
    "Let's start by introducing you to our app. Learn new skills, track your progress, and achieve great things!",
    "Keep track of your growth with personalized insights and tips.",
    "Upgrade your skills and learn cutting-edge technologies.",
    "You are now ready to begin your journey with Ascend AI. Let's make it happen!"
  ];

  const colors = [
    '#F2F7FC', // Light Blue
    '#FFF1E6', // Peach
    '#E6F9F9', // Light Cyan
    '#F9E6E6', // Light Pink
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push('/skills'); 
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors[currentStep] }]}>
      <View style={styles.overlay}>
        {/* Title at the top */}
        <Text style={styles.title}>{titles[currentStep]}</Text>
        
        {/* Image */}
        <Image source={images[currentStep]} style={styles.backgroundImage} />
        
        {/* Description Text */}
        <Text style={styles.description}>{descriptions[currentStep]}</Text>

        {/* Dotted Status Bar */}
        <View style={styles.statusBar}>
          {Array.from({ length: 4 }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor: index === currentStep ? 'white' : '#BDBDBD', // White for current step
                  borderColor: index === currentStep ? 'white' : '#BDBDBD',
                },
              ]}
            />
          ))}
        </View>

        {/* Next Button with FontAwesome Icon */}
        <TouchableOpacity
          style={styles.circleButton}
          onPress={handleNext}
        >
          <FontAwesome name="arrow-right" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    width: '80%', // Make image smaller
    height: '50%', // Make image smaller and proportional
    resizeMode: 'contain',
    marginBottom: 30, // Space between image and text
  },

  overlay: {
    position: 'absolute',
    top: '0%', // Title at the top, make sure there is space for it
    width: '100%',
    height:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333333', // Dark text for contrast
    textAlign: 'center',
    marginBottom: 20,
  },

  description: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 40,
  },

  // Dotted Status Bar
  statusBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 60, // Place it higher from the bottom
    left: 20,
    alignItems: 'center',
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 5,
    borderWidth: 2,
  },

  // Circular Button for Next with FontAwesome Icon at Bottom Right
  circleButton: {
    position: 'absolute',
    bottom: 30, // Adjusted position for better spacing
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
});
