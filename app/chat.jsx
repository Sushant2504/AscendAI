import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Markdown from 'react-native-markdown-display'; // Import the markdown display component

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Function to handle sending a message and fetching AI response
  const handleSend = async () => {
    if (input.trim() !== '') {
      const userMessage = {
        id: Math.random().toString(),
        text: input,
        createdAt: new Date(),
        user: {
          id: 1, // User ID
          name: 'User',
        },
      };

      // Add user message to chat
      setMessages((previousMessages) => [...previousMessages, userMessage]);
      setInput(''); // Clear the input field

      try {
        // Fetch AI response from AscendAI
        const aiMessage = await getCareerGuidanceResponse(input);

        const botMessage = {
          id: Math.random().toString(),
          text: aiMessage,
          createdAt: new Date(),
          user: {
            id: 2, // AscendAI user
            name: 'AscendAI',
          },
        };

        // Add AI message to chat
        setMessages((previousMessages) => [...previousMessages, botMessage]);
      } catch (error) {
        console.error('Error fetching AI response:', error);
      }
    }
  };

  // Function to call Gemini API and get response
  const getCareerGuidanceResponse = async (userMessage) => {
    try {
      const genAI = new GoogleGenerativeAI("AIzaSyBLyRWEM_vxdTPzmkobdcctvrTcX0GgYoE");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
      // Tailor the prompt to ask for career guidance, suggesting courses and articles
      const careerGuidancePrompt = `User is looking for career guidance. They have asked: "${userMessage}". Please suggest relevant courses, articles, and resources (not exceeding 100 words) in markdown format. Provide direct links to resources like online courses, certifications, and articles that align with the user's query. Limit response to 100 words.`;
  
      const result = await model.generateContent(careerGuidancePrompt);
      return result.response.text();  // Return the AI-generated response (suggestions for courses and articles)
    } catch (error) {
      console.error('Error fetching AI response:', error.response ? error.response.data : error.message);
    }
  };
  

  // Render each chat message
  const renderMessageItem = ({ item }) => (
    <View style={[styles.messageItem, item.user.id === 1 ? styles.userMessage : styles.botMessage]}>
    <Text style={[styles.userName, item.user.id === 1 ? styles.userNameRight : styles.userNameLeft]}>
      {item.user.name}
    </Text>
    <Markdown style={[styles.messageText, { link: styles.markdownLink }]}>{String(item.text)}</Markdown> {/* Ensure the text is a string */}
  </View>
  );

  return (
    <View style={styles.container}>
      {/* Chat messages */}
      <View><Text style={styles.txt}>Chat With Ascend AI</Text></View>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        style={styles.chatContainer}
        contentContainerStyle={styles.contentContainer}
      />

      {/* Input field and send button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'flex-end',
    paddingTop: 10,
  },
  chatContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 60,
    paddingHorizontal: 10,
  },
  messageItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#4CAF50', // User message bubble color
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
  },
  botMessage: {
    backgroundColor: '#e0e0e0', // Bot message bubble color
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },
  userNameLeft: {
    fontWeight: 'bold',
    color: '#4CAF50',
    alignSelf: 'flex-start',
  },
  userNameRight: {
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
    color: '#111',
  },
  txt: {
    fontSize: 18,
    color: '#111',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom:10
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  markdownLink: {
    color: 'blue',
    fontSize:23,  // Change the color of the links to blue
    textDecorationLine: 'underline', // Optional: add an underline to the link
  },
  messageText: {
    fontSize: 16,
    color: '#111',
  },
});

export default ChatApp;
