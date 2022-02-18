import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextInputForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View>
      <TextInput
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        style={styles.inputStyle}
      />
    </View>
  );
};

export default TextInputForm;

const styles = StyleSheet.create({});
