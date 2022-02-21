import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";
import { firebase } from "../firebase/config";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Logout"
        onPress={() => {
          firebase.auth().signOut();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
