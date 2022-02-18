import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const loginFunction = () => {
    console.log("login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar auto />
      <View style={styles.container1}>
        <Image
          style={styles.loginImage}
          source={require("../../assets/images/undraw_Authentication_re_svpt.png")}
        />
      </View>
      <View style={styles.container2}>
        <View style={styles.container3}>
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
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={loginFunction}
      >
        <Button title="Login" />
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
            navigation.navigate("Register");
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Don't have an account <Text style={styles.signUp}>Sign up</Text>
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
    marginTop: 50,
  },
  inputStyle: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 20,
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
