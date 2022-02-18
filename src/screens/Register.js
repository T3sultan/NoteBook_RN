import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import { firebase } from "../firebase/config";

export default function Register({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const signUpFunction = () => {
    if (!email || !password || !name || !confirmPassword) {
      return Alert.alert("Error", "You need to fill in input form", [
        { text: "OK", onPress: () => {} },
      ]);
    }
    if (password !== confirmPassword) {
      return Alert.alert(
        "Error",
        "confirm password should be same as password",
        [{ text: "OK", onPress: () => {} }]
      );
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("response", response);
      })
      .catch(error => {
        console.log("error", error);
        Alert(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar auto /> */}
      <View style={styles.container1}>
        <Image
          style={styles.loginImage}
          source={require("../../assets/images/undraw_Authentication_re_svpt.png")}
        />
      </View>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <TextInput
            onChangeText={text => setName(text)}
            placeholder="Full Name"
            style={styles.inputStyle}
            autoCapitalize="words"
          />
          <TextInput
            onChangeText={text => setEmail(text)}
            placeholder="Email Address"
            style={styles.inputStyle}
            autoCapitalize="none"
          />
          <TextInput
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            style={styles.inputStyle}
            secureTextEntry={secureTextEntry}
          />
          <TextInput
            onChangeText={text => setConfirmPassword(text)}
            placeholder="Confirm Password"
            style={styles.inputStyle}
            secureTextEntry={secureTextEntry}
          />
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.9} style={styles.buttonStyle}>
        <Button onPress={signUpFunction} title="Sign up" />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: 20,
          alignItems: "center",
          // backgroundColor: "red",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Already have an account? <Text style={styles.signUp}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  loginImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  container1: {
    // alignSelf:"center"
    margin: 8,
    borderRadius: 30,
  },
  container2: {
    margin: 8,
    marginTop: 30,
  },
  inputStyle: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: "blue",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  signUp: {
    color: "blue",
  },
});
