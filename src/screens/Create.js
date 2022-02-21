import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";

export default function Create() {
  const [note, setNote] = useState(null);

  const onSave = () => {
    if (note && note.length > 0) {
      return;
    }
    return alert("Note is empty");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/undraw_Personal_notebook_re_d7dc.png")}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Create Note</Text>
        <TextInput
          onChangeText={text => setNote(text)}
          placeholder="write your notes"
          style={styles.inputStyle}
        />
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonStyle}>
          <Button title="Save" onPress={onSave} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 25,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputStyle: {
    borderColor: "grey",
    padding: 10,
    marginTop: 50,
    borderBottomWidth: 1,
  },
  buttonStyle: {
    backgroundColor: "blue",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  imageStyle: {
    width: "100%",
    height: "35%",
    resizeMode: "contain",
    marginTop: 50,
  },
});
