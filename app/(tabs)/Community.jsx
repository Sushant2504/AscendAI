import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const communityData = [
  {
    id: '1',
    name: 'Alice Johnson',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
  },
  {
    id: '2',
    name: 'Bob Smith',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
  },
  {
    id: '4',
    name: 'David Miller',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
  },
  {
    id: '5',
    name: 'Eve Thompson',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
  },
  {
    id: '6',
    name: 'Frank Davis',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
  },
  {
    id: '7',
    name: 'Adarsh Shinde',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
  },
];

const CommunityPage = () => {
  const renderCommunityItem = ({ item }) => {
    return (
      <View style={styles.communityItem}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity style={styles.followButton}>
          <FontAwesome name="user-plus" size={20} color="#fff" />
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community</Text>
      <FlatList
        data={communityData}
        keyExtractor={(item) => item.id}
        renderItem={renderCommunityItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  communityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    color: '#333',
    flex: 1,
  },
  followButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  followText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 5,
  },
});

export default CommunityPage;
