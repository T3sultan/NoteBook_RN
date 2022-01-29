import { TouchableOpacity, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';

export default function Login() {
      const [email, setEmail] = useState(null);
      const [password, setPassword] = useState(null);


      const loginFunction = () => {
            console.log("login")

      }

      return (
            <View style={styles.container}>
                  <View style={styles.container1}>
                        <Image
                              style={styles.loginImage}
                              source={require("../../assets/images/undraw_Authentication_re_svpt.png")}
                        />

                  </View>
                  <View style={styles.container2}>
                        <View style={styles.container3}>
                              <TextInput
                                    onChangeText={(text) => setEmail(text)}
                                    placeholder='Email'
                                    style={styles.inputStyle} />
                              <TextInput
                                    onChangeText={(text) => setPassword(text)}
                                    placeholder='Password'
                                    style={styles.inputStyle}

                              />


                        </View>

                  </View>
                  <TouchableOpacity style={styles.buttonStyle} onPress={loginFunction}>
                        <Button title="Login" />


                  </TouchableOpacity>
                  <View style={{
                        flex: 1,
                        justifyContent: "flex-end",
                        marginBottom:20,
                        alignItems:"center"

                  }}>
                        <TouchableOpacity>
                              <Text>
                                    Don't have an account <Text style={styles.signUp}>Sign up</Text>
                              </Text>

                        </TouchableOpacity>

                  </View>

            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "white"


      },
      loginImage: {
            width: "100%",
            height: 300,
            borderRadius: 10
      },
      container1: {
            // alignSelf:"center"
            margin: 8,
            borderRadius: 30

      },
      container2: {
            margin: 8,
            marginTop: 50,
      },
      inputStyle: {
            height: 40,
            borderColor: "yellow",
            borderWidth: 1,
            marginBottom: 20,
            borderRadius: 5,
            margin: 10,
            padding: 10


      },
      buttonStyle: {
            backgroundColor: "yellow",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            padding: 10,
            borderRadius: 8
      },
      signUp:{
            color: "blue"
      }

});
