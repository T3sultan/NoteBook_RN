import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Cards({ children, customStyle }) {
  return <View style={[styles.container, customStyle]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "white",
    //android
    elevation: 2,

    //IOS

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    //     justifyContent: "center",
    //     alignItems: "center",
  },
});
