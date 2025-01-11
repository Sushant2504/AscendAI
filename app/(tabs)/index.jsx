import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const categories = [
    { id: 1, name: "Web Development", icon: "🌐" },
    { id: 2, name: "App Development", icon: "📱" },
    { id: 3, name: "Data Science", icon: "📊" },
    { id: 4, name: "UI/UX Design", icon: "🎨" },
  ];

  const router=useRouter()
  const featuredCourses = [
    {
      id: 1,
      title: "React Native for Beginners",
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/c4/d0c716e7f946b799b94d4e0e88c572/Build-Dynamic-Website-using-HTML-CSS-JavaScript-jQuery-AngularJS-and-ReactR.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
      duration: "10 hours",
    },
    {
      id: 2,
      title: "Mastering MERN Stack",
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/c4/d0c716e7f946b799b94d4e0e88c572/Build-Dynamic-Website-using-HTML-CSS-JavaScript-jQuery-AngularJS-and-ReactR.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
      duration: "15 hours",
    },
    {
      id: 3,
      title: "Mastering Flutter",
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/c4/d0c716e7f946b799b94d4e0e88c572/Build-Dynamic-Website-using-HTML-CSS-JavaScript-jQuery-AngularJS-and-ReactR.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
      duration: "25 hours",
    },
  ];
  const gotoskills=()=>{
    router.push('/skills')
  }

  return (
    <ScrollView style={styles.container}>
      {/* Greeting Section */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Keep learning and growing 🚀</Text>
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={gotoskills}>
          <Text style={styles.btnText}>Check Your Skills</Text>
        </Pressable>
      </View>

      {/* Categories Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              onPress={() => router.push("/learn", { id: category.id })}
            >
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Featured Courses Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Courses</Text>
        {featuredCourses.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.courseCard}
            onPress={() => router.push("/learn", { id: course.id })}
          >
            <Image
              source={{ uri: course.image }}
              style={styles.courseImage}
            />
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseDuration}>{course.duration}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 16,
  },
  greetingContainer: {
    marginVertical: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  categoryCard: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    padding: 16,
    marginRight: 10,
    alignItems: "center",
    width: 100,
  },
  categoryIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  courseCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
    elevation: 2,
  },
  courseImage: {
    width: 140,
    height: 100,
  },
  courseInfo: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  courseDuration: {
    fontSize: 14,
    color: "#555",
  },
  btnContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#f9f9f9",
  },
  btn:{
    backgroundColor:"blue",
    paddingHorizontal:10,
    borderRadius:50,
    width:160,
    height:40,
    flex:1,
    flex:"row",
    alignItems:"center",
    justifyContent:"center"

  },
  btnText:{
    color: "#fff", // White text color
    fontSize: 14,
    fontWeight: "bold",
    // textTransform: "uppercase",
    
  }
});

export default HomeScreen;
