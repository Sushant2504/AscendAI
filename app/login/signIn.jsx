import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, text } from 'react-native';
import { Tabs } from 'expo-router';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function SignUpScreen() {

    const router = useRouter();
    return (
        <View>

            <Text style={styles.text1}>Welcome Back</Text>

            <Text style={styles.text2}>You can take a test to customise your learning experience. Explore the courses and grab the job</Text>

            <View style={styles.row}>
                <View style={[styles.button, styles.row]}>
                    <TouchableOpacity style={[styles.text3]}>
                        <Image source={require = ('/assets/images/google.png')}></Image>
                        <Text style={styles.buttonText}>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.button, styles.row]}>
                    <TouchableOpacity style={[styles.text3]}>
                        <Image source={require = ('/assets/images/google.png')}></Image>
                        <Text style={styles.buttonText}>Linkdin</Text>
                    </TouchableOpacity>
                </View>
            </View>



            <View>

                

                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeText}
                        value={text}
                        placeholder="Email" // Hint text
                    />
                </View>

                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeText}
                        value={text}
                        placeholder="Password" // Hint text
                    />
                </View>

               


            </View>

{/* 
            <Text>I am </Text> */}

            <View>
             
             <TouchableOpacity style={styles.container1}>
                  <Text style={styles.text4}>SignIn</Text>
             </TouchableOpacity>


             <TouchableOpacity onPress={()=>router.push('login/signIn')}>
                 <Text style={styles.text5}>Forget Password</Text>
             </TouchableOpacity>



             <TouchableOpacity style={styles.touchable} onPress={()=>router.push('login/signUp')}>
                 <Text style={styles.text6}>Don't have an account? Join Us</Text>
             </TouchableOpacity>
            


            </View>


        </View>

    )
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
        //  marginBottom: 20,
    },

    text5: {
         fontSize: 14,
         color: "green",
         padding: 5,
         textAlign: "center",
        //  marginBottom: 20,
    },


    text6: {
         fontSize: 16,
         color: "green",
         padding: 5,
         textAlign: "center",
         marginBottom: 100,
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
        padding: 20,
        backgroundColor: "gray",

    },
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },


    container1: {
         marginTop: 50,
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

    touchable: {
        marginTop: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'green',
    }

});