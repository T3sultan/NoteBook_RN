import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { firebase } from "../firebase/config";
import { AntDesign, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import Cards from "../components/Cards";

export default function Home({ navigation, extraData }) {
  const [notes, setNotes] = useState(null);

  const data = [];
  const userId = extraData.uid;
  // console.log("userId", userId);

  const noteRef = firebase.firestore().collection("notes");

  useEffect(() => {
    //our subscribe notes
    const subscriber = noteRef
      // .orderBy("createdAt", "desc")
      .where("authorId", "==", userId)
      .onSnapshot(querySnapShot => {
        // console.log("snap", querySnapShot);
        const newNotes = []; //create new array
        //
        querySnapShot.forEach(doc => {
          // console.log(doc.data());
          //create object
          const note = doc.data();
          note.id = doc.id;
          newNotes.push(note);
        });
        setNotes(newNotes);
      });
    return subscriber;
  }, []);

  const onDelete = id => {
    return noteRef.doc(id).delete();
  };

  const renderNote = ({ item, index }) => {
    return (
      <Cards customStyle={{ padding: 20, marginTop: 10 }}>
        <View style={styles.titleWrapper}>
          <View style={{ flexDirection: "row" }}>
            <Text>{`#${index + 1} `}</Text>
            <Text>{item.description}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Entypo name="edit" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(item.id)}>
              <MaterialCommunityIcons
                style={{ marginLeft: 7 }}
                name="delete"
                size={20}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Cards>
    );
  };

  if (!notes || (notes && notes.length === 0)) {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>My Notes</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Create", { userId })}
            >
              <AntDesign name="pluscircleo" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <View>
            <Image
              style={{
                width: "100%",
                height: 400,
                resizeMode: "contain",
                marginTop: 100,
              }}
              source={require("../../assets/images/undraw_Add_notes_re_ln36.png")}
            />
            <Text style={styles.footerTitle}>
              No Notes, Please Add New Notes
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Button
              title="Logout"
              onPress={() => {
                firebase.auth().signOut();
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>My Notes</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Create", { userId })}
          >
            <AntDesign name="pluscircleo" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={notes}
          renderItem={renderNote}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingVertical: 20 }}
        />

        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Button
            title="Logout"
            onPress={() => {
              firebase.auth().signOut();
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
  wrapper: {
    flex: 1,
    margin: 25,
    // backgroundColor: "red",
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  footerTitle: {
    textAlign: "center",
    paddingTop: 10,
    color: "gray",
  },
});
