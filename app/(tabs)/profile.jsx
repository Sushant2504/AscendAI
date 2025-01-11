import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const userData = {
  name: 'Ramesh Patil',
  avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
  bio: 'An eager learner in computer science, currently enrolled in multiple courses.',
  courses: [
    { title: 'React Native for Beginners', status: 'Completed' },
    { title: 'Advanced JavaScript', status: 'In Progress' },
    { title: 'Web Development Masterclass', status: 'Not Started' },
  ],
  score: 95,
};

const ProfilePage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={{ uri: userData.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>{userData.name}</Text>
        <Text style={styles.userBio}>{userData.bio}</Text>
        <Text style={styles.userScore}>Score: {userData.score}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="edit" size={20} color="#fff" />
          <Text style={styles.actionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="settings" size={20} color="#fff" />
          <Text style={styles.actionText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Courses Section */}
      <View style={styles.details}>
        <Text style={styles.sectionTitle}>My Courses</Text>
        {userData.courses.map((course, index) => (
          <View key={index} style={styles.courseItem}>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <Text style={styles.courseStatus}>{course.status}</Text>
          </View>
        ))}
      </View>

      {/* Additional Sections */}
      <View style={styles.details}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        {/* Add achievements if any */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  userBio: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
    textAlign: 'center',
  },
  userScore: {
    fontSize: 18,
    color: '#4CAF50',
    marginTop: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  actionText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  details: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  courseItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  courseStatus: {
    fontSize: 14,
    color: '#777',
  },
});

export default ProfilePage;
