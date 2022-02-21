import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import { firebase } from "../firebase/config";

export default function Create({ route, navigation }) {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(false);

  const userId = route.params.userId;
  console.log(userId);
  const noteRef = firebase.firestore().collection("notes");

  const onSave = () => {
    if (note && note.length > 0) {
      //1. loading active
      setLoading(true);
      //2.create a timestamp
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();

      //3.create a data object

      const data = {
        description: note,
        author: userId,
        createdAt: timestamp,
      };

      //4. save the firebase
      return noteRef
        .add(data)
        .then(_doc => {
          setNote(null);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
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
          value={note}
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity activeOpacity={0.8} style={styles.buttonStyle}>
            <Button title="Save" onPress={onSave} />
          </TouchableOpacity>
        )}
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
