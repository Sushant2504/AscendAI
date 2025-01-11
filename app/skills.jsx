import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
} from "react-native";

const skillsData = {
  "Data Structures": ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs"],
  "Programming Languages": ["JavaScript", "Python", "Java", "C++"],
  "Web Development": ["HTML", "CSS", "React", "Node.js", "Express"],
  "App Development": ["React Native", "Flutter", "Swift", "Kotlin"],
};

const SkillForm = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedSubSkills, setSelectedSubSkills] = useState([]);

  const handleSkillSelect = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([skill]);
    }
  };

  const handleSubSkillSelect = (subSkill) => {
    if (!selectedSubSkills.includes(subSkill)) {
      setSelectedSubSkills([...selectedSubSkills, subSkill]);
    } else {
      Alert.alert("Duplicate Entry", "This subskill is already selected.");
    }
  };

  const handleSubSkillRemove = (subSkill) => {
    setSelectedSubSkills(selectedSubSkills.filter((s) => s !== subSkill));
  };

  const handleSubmit = () => {
    if (selectedSubSkills.length === 0) {
      Alert.alert("Incomplete Form", "Please select at least one subskill.");
      return;
    }
    router.push(
    '/quiz'
    )
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Skills</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Skill</Text>
        <FlatList
          data={Object.keys(skillsData)}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dropdownContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.dropdownButton,
                selectedSkills.includes(item) && styles.selectedDropdownButton,
              ]}
              onPress={() => handleSkillSelect(item)}
            >
              <Text
                style={[
                  styles.dropdownButtonText,
                  selectedSkills.includes(item) && styles.selectedDropdownButtonText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* SubSkill Selection */}
      {selectedSkills.length > 0 && (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Select SubSkills</Text>
          <FlatList
            data={selectedSkills
              .map((skill) => skillsData[skill])
              .flat()} 
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dropdownContainer}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.dropdownButton,
                  selectedSubSkills.includes(item) && styles.selectedDropdownButton,
                ]}
                onPress={() => handleSubSkillSelect(item)}
              >
                <Text
                  style={[
                    styles.dropdownButtonText,
                    selectedSubSkills.includes(item) && styles.selectedDropdownButtonText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* Display Selected SubSkills */}
      <View style={styles.tagContainer}>
        <Text style={styles.label}>Selected SubSkills</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {selectedSubSkills.map((subSkill) => (
            <View key={subSkill} style={styles.tag}>
              <Text style={styles.tagText}>{subSkill}</Text>
              <TouchableOpacity onPress={() => handleSubSkillRemove(subSkill)}>
                <Text style={styles.removeTag}>x</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    alignContent:"center",
    justifyContent:"center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
  },
  dropdownContainer: {
    flexDirection: "row",
  },
  dropdownButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    marginRight: 10,
  },
  selectedDropdownButton: {
    backgroundColor: "#007bff",
  },
  dropdownButtonText: {
    fontSize: 14,
    color: "#333",
  },
  selectedDropdownButtonText: {
    color: "#fff",
  },
  tagContainer: {
    marginBottom: 20,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#007bff",
    borderRadius: 15,
    marginRight: 10,
  },
  tagText: {
    fontSize: 14,
    color: "#fff",
    marginRight: 5,
  },
  removeTag: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  submitButton: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SkillForm;
