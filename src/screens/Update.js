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

export default function Update({ route, navigation }) {
  const userId = route.params.userId;
  const item = route.params.item;
  // console.log(userId);
  const noteRef = firebase.firestore().collection("notes");

  const [note, setNote] = useState(item.description);
  const [loading, setLoading] = useState(false);

  const onUpdate = () => {
    if (note && note.length > 0) {
      //1. loading active
      setLoading(true);
      return noteRef
        .doc(item.id)
        .update({ description: note })
        .then(() => {
          setNote(null);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    }
    return alert("Note is empty");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/undraw_Up_to_date_re_nqid.png")}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Edit Note</Text>
        <TextInput
          onChangeText={text => setNote(text)}
          placeholder="write your update notes"
          style={styles.inputStyle}
          value={note}
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity activeOpacity={0.8} style={styles.buttonStyle}>
            <Button title="Update" onPress={onUpdate} />
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
