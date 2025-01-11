import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignUpScreen() {
  const router = useRouter();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [learning, setLearning] = useState('');

  return (
    <View>

      <Text style={styles.text1}>Just Join us to be Skillful</Text>

      <Text style={styles.text2}>You can take a test to customise your learning experience. Explore the courses and grab the job</Text>

      <View style={styles.row}>
        <View style={[styles.button, styles.row]}>
          <TouchableOpacity style={[styles.text3]}>
            <Image source={require('./../assets/images/favicon.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.button, styles.row]}>
          <TouchableOpacity style={[styles.text3]}>
            <Image source={require('./../assets/images/favicon.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Name" 
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email" 
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password" 
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={role}
            onChangeText={setRole}
            placeholder="Role" 
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={learning}
            onChangeText={setLearning}
            placeholder="Learning" 
          />
        </View>

      </View>

      <View>
        <TouchableOpacity style={styles.container1}>
          <Text style={styles.text4}>SignUp</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('signIn')}>
          <Text style={styles.text5}>Have an account? Log in</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    padding: 16,
    textAlign: "center",
  },
  text2: {
    fontSize: 16,
    color: 'black',
    padding: 8,
    textAlign: "center",
  },
  text3: {
    flex:1,
    flexDirection:"row",
    gap:4,
    fontSize: 16,
    fontWeight: "bold",
    color: 'black',
    padding: 8,
    textAlign: "center",
  },
  text4: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    padding: 5,
    textAlign: "center",
  },
  text5: {
    fontSize: 14,
    color: "green",
    padding: 5,
    textAlign: "center",
  },
  button: {
    flex: 1,
    padding: 15,
    width: 35,
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    padding: 10,
    backgroundColor: "gray",
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  container1: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 50,
    padding: 10,
    height: 60,
    width: 300,
    alignContent: 'center',
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
