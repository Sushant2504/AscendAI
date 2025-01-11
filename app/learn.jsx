import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import YouTubeIframe from 'react-native-youtube-iframe'; // Import YouTube iframe package
import { WebView } from 'react-native-webview';

const App = () => {
  const [activeTab, setActiveTab] = useState('video'); // Track which section is active

  const renderContent = () => {
    if (activeTab === 'video') {
      return (
        <ScrollView
        contentContainerStyle={[styles.content,styles.scrollContainer]}
          // contentContainerStyle={styles.scrollContainer} // Corrected here
        >
          <Text style={styles.title}>YouTube Videos</Text>
          {['JKccS9k56_I', 'dQw4w9WgXcQ', '3JZ_D3ELwOQ', 'eV1G7_Vh0Q0'].map((videoId, index) => (
            <View key={index} style={styles.videoContainer}>
              <YouTubeIframe
                videoId={videoId}
                height={250}
                play={false}
                webViewStyle={{ alignSelf: 'stretch' }}
              />
            </View>
          ))}
        </ScrollView>
      );
    } else if (activeTab === 'article') {
      return (
        <View style={styles.content}>
          <Text style={styles.title}>GeeksforGeeks Article</Text>
          <WebView
          useWebKit={true}
            source={{ uri: 'https://www.geeksforgeeks.org' }} // Example article URL
            style={styles.webview}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Buttons to switch between content */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, activeTab === 'video' && styles.activeButton]}
          onPress={() => setActiveTab('video')}
        >
          <Text style={styles.buttonText}>Video</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, activeTab === 'article' && styles.activeButton]}
          onPress={() => setActiveTab('article')}
        >
          <Text style={styles.buttonText}>Article</Text>
        </TouchableOpacity>
      </View>

      {/* Render content based on selected tab */}
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 8,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#0056b3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContainer: {
    // alignItems: 'center', // Corrected here
  },
  videoContainer: {
    width: '98%',  // Add margin for left and right spacing
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  webview: {
    marginTop: 20,
    flex: 1,
    width: '100%',
    height:300
  },
});

export default App;
