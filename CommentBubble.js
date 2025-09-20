import React from "react";
import { View, Text } from "react-native";

export default function CommentBubble({ text }) {
  return (
    <View
      style={{
        alignSelf: "flex-start",
        backgroundColor: "#f0f2f5", 
        padding: 10,
        borderRadius: 15,
        marginVertical: 5,
        maxWidth: "70%",
      }}
    >
      <Text style={{ color: "#050505", fontSize: 15 }}>{text}</Text>
    </View>
  );
}
