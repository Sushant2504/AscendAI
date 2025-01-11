import axios from "axios";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";

const quizQuestions = [
  {
    question: "Which of the following is part of the MERN stack?",
    options: ["MongoDB", "Angular", "Laravel", "Ruby"],
    answer: "MongoDB",
  },
  {
    question: "What does React.js primarily help with in web development?",
    options: [
      "Database Management",
      "Building User Interfaces",
      "Server-Side Rendering",
      "Image Optimization",
    ],
    answer: "Building User Interfaces",
  },
  {
    question: "Which CSS framework is known for utility-first design?",
    options: ["Bootstrap", "Tailwind CSS", "Foundation", "Materialize"],
    answer: "Tailwind CSS",
  },
  {
    question: "What is React Native used for?",
    options: [
      "Web Development",
      "Desktop App Development",
      "Mobile App Development",
      "Game Development",
    ],
    answer: "Mobile App Development",
  },
  {
    question: "In Node.js, which module is used to create a server?",
    options: ["HTTP", "FS", "OS", "Path"],
    answer: "HTTP",
  },
  {
    question: "Which MongoDB operation is used to retrieve data?",
    options: ["insertOne()", "updateOne()", "deleteOne()", "find()"],
    answer: "find()",
  },
  {
    question: "Which method in JavaScript is used to convert JSON data into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "toObject()", "toJSON()"],
    answer: "JSON.parse()",
  },
  {
    question: "What is the default port used by React development server?",
    options: ["8080", "3000", "5000", "8000"],
    answer: "3000",
  },
  {
    question: "Which command is used to create a new React app?",
    options: [
      "react-init",
      "npm create-react-app",
      "npx create-react-app",
      "node-react-init",
    ],
    answer: "npx create-react-app",
  },
  {
    question: "What is the purpose of Git in development?",
    options: [
      "Database Management",
      "Version Control",
      "UI Styling",
      "Server Deployment",
    ],
    answer: "Version Control",
  },
];


const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [score, setScore] = useState(0);
  const subskills =['React']
  const [showModal, setShowModal] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  // useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios(
          {
            method:'GET',
            url:`http://localhost:5000/api/v1/questions/get-quiz`,
            body:{subskills}
          }).then((res)=>
          {console.log(res)})
          setQuestions(response)
          console.log(response)
      } catch (error) {
        setError('Error fetching quiz questions');
        console.error(error);
      }
    };

    fetchQuestions();
  // }, []);

  const handleNextQuestion = () => {
    if (selectedOption === null) {
      Alert.alert("No Selection", "Please select an option before proceeding.");
      return;
    }

    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Final score handling
      if (score + 1 >= 8) {
        // Show trophy for expert
        Alert.alert(
          "Congratulations!",
          "You're an expert! 🏆",
          [{ text: "OK", onPress: () => navigation.navigate("Home") }] // Replace "Home" with your trophy screen
        );
      } else if (score + 1 >= 4) {
        // Redirect to Learn page
        Alert.alert(
          "Well Done!",
          "Keep learning! Redirecting to the Learn page...",
          [{ text: "OK", onPress: () => router.push("/learn") }]
        );
      } else {
        // Default case (just show modal)
        setShowModal(true);
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      {/* Score Display */}
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </View>

      {/* Question Section */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionNumber}>
          Question {currentQuestion + 1}/{quizQuestions.length}
        </Text>
        <Text style={styles.questionText}>
          {quizQuestions[currentQuestion].question}
        </Text>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {quizQuestions[currentQuestion].options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              selectedOption === option && styles.selectedOptionButton,
            ]}
            onPress={() => handleOptionSelect(option)}
          >
            <Text
              style={[
                styles.optionText,
                selectedOption === option && styles.selectedOptionText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Next or Submit Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNextQuestion}
      >
        <Text style={styles.nextButtonText}>
          {currentQuestion === quizQuestions.length - 1 ? "Submit" : "Next"}
        </Text>
      </TouchableOpacity>

      {/* Modal for Quiz Completion */}
      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Quiz Completed!</Text>
            <Text style={styles.modalText}>
              Your score is {score}/{quizQuestions.length}
            </Text>
            <View style={styles.btnConatainer}> 
            <TouchableOpacity
              style={styles.restartButton}
              onPress={handleRestartQuiz}
            >
              <Text style={styles.restartButtonText}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    paddingVertical:20
  },
  scoreContainer: {
    alignItems: "flex-end",
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  questionContainer: {
    marginVertical: 20,
  },
  questionNumber: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  optionsContainer: {
    marginVertical: 20,
  },
  optionButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedOptionButton: {
    backgroundColor: "#007bff",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  selectedOptionText: {
    color: "#fff",
  },
  nextButton: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    paddingVertical: 15,
    backgroundColor: "#28a745",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 50,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: "#555",
  },
  restartButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  restartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "#6c757d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  btnConatainer:{
    flexDirection:"row",
    gap:4
  }
});

export default QuizPage;
