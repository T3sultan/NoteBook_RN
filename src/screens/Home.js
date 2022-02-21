import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Button from "../components/Button";
import { firebase } from "../firebase/config";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const data = [];
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>My Notes</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Create")}
          >
            <AntDesign name="pluscircleo" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {data.length === 0 && (
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
        )}
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
