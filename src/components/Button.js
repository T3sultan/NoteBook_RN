import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonStyle}
      activeOpacity={0.9}
    >
      <Text style={styles.tilteStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tilteStyle: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
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
});
