import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
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
});
