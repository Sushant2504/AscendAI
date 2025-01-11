import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';


const ProfessionButton = ({str1, str2, params = {}}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.row}>
                <Image source={require(str1)}></Image>
                <Text>${str2}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
    },
    shadow: {
      backgroundColor: 'white', 
      padding: 20,
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

export default ProfessionButton;