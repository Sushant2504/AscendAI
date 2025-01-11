import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignInScreen() {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.text1}>Welcome Back</Text>
      <Text style={styles.text2}>You can take a test to customize your learning experience. Explore the courses and grab the job.</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIbudNn2WDl1Lc_jAa_B4bwjPyjIJW-fcoQ&s'}} style={styles.socialButtonImage} />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png'}} style={styles.socialButtonImage} />
          <Text style={styles.socialButtonText}>LinkedIn</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#a9a9a9"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#a9a9a9"
        />
      </View>

      <TouchableOpacity style={styles.signInButton} onPress={()=>router.push('/onboard')}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => router.push('/signUp')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.signUpLink} onPress={() => router.push('signUp')}>
        <Text style={styles.signUpLinkText}>Don't have an account? Join Us</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
  },

  text1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
    textAlign: 'center',
    marginBottom: 10,
  },

  text2: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },

  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },

  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  socialButtonImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },

  socialButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343a40',
  },

  inputContainer: {
    marginBottom: 20,
  },

  input: {
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingLeft: 20,
    fontSize: 16,
    color: '#343a40',
  },

  signInButton: {
    backgroundColor: '#28a745',
    borderRadius: 25,
    paddingVertical: 15,
    marginBottom: 20,
    alignItems: 'center',
  },

  signInButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  forgotPasswordText: {
    color: '#007bff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
  },

  signUpLink: {
    alignItems: 'center',
  },

  signUpLinkText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
