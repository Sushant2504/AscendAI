import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const leaderboardData = [
    {
      id: '1',
      
      name: 'Alice Johnson',
      score: 95,
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
    },
    {
      id: '2',
     
      name: 'Bob Smith',
      score: 90,
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
    },
    {
      id: '3',
      name: 'Charlie Brown',
      score: 85,
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
    },
    {
      id: '4',
      name: 'David Miller',
      score: 80,
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
    },
    {
      id: '5',
      name: 'Eve Thompson',
      score: 75,
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
    },
    {
      id: '6',
      name: 'Frank Davis',
      score: 70,
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
    },
  ];
  

const Leaderboard = () => {
  const renderLeaderboardItem = ({ item, index }) => {
    // Determine rank icons for the top 3
    const rankIcon =
      index === 0 ? (
        <FontAwesome name="trophy" size={24} color="#FFD700" />
      ) : index === 1 ? (
        <MaterialIcons name="military-tech" size={24} color="#C0C0C0" />
      ) : index === 2 ? (
        <MaterialIcons name="military-tech" size={24} color="#CD7F32" />
      ) : null;

    return (
      <View
        style={[
          styles.leaderboardItem,
          index < 3 && styles.topRankItem, // Highlight top 3 ranks
        ]}
      >
        <View style={styles.rankContainer}>
          {rankIcon || <Text style={styles.rankText}>#{index + 1}</Text>}
        </View>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={[styles.name, index < 3 && styles.topRankText]}>
          {item.name}
        </Text>
        <Text style={[styles.score, index < 3 && styles.topRankText]}>
          {item.score}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* UI Section Above the Leaderboard */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg',
          }}
          style={styles.userAvatar}
        />
        <View style={styles.headerText}>
          <Text style={styles.welcomeText}>#12 Ramesh Patil</Text>
          <Text style={styles.motivationText}>Keep climbing the leaderboard!</Text>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>Your Score</Text>
          <Text style={styles.scoreValue}>45</Text>
        </View>
      </View>

      {/* Leaderboard */}
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.id}
        renderItem={renderLeaderboardItem}
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
    paddingTop: 20,
  },
  // Header Styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
  },
  motivationText: {
    fontSize: 14,
    color: '#004d40',
  },
  scoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreLabel: {
    fontSize: 14,
    color: '#00796b',
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
  },
  // Leaderboard Styles
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  leaderboardItem: {
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
  topRankItem: {
    backgroundColor: '#ffeeba',
  },
  rankContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankText: {
    fontSize: 18,
    color: '#999',
    fontWeight: 'bold',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 15,
  },
  name: {
    fontSize: 18,
    flex: 1,
    color: '#333',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  topRankText: {
    color: '#d9534f',
  },
});

export default Leaderboard;
