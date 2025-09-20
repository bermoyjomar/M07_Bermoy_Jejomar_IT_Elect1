import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import CommentBubble from "./CommentBubble";

export default function CommentSection() {
  const [comments, setComments] = useState([
    { id: "1", text: "This is a great post!" },
    { id: "2", text: "Thanks for sharing!" },
  ]);
  const [input, setInput] = useState("");

  const addComment = () => {
    if (input.trim().length === 0) return;
    const newComment = {
      id: Date.now().toString(),
      text: input.trim(),
    };
    setComments([newComment, ...comments]);
    setInput("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Comments list */}
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CommentBubble text={item.text} />}
        inverted // newest comment at bottom
        contentContainerStyle={{ padding: 10 }}
      />

      {/* Input box */}
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderTopWidth: 1,
          borderColor: "#ddd",
          backgroundColor: "white",
        }}
      >
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Write a comment..."
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 20,
            paddingHorizontal: 15,
            paddingVertical: 8,
          }}
          onSubmitEditing={addComment}
          returnKeyType="send"
        />
        <TouchableOpacity
          onPress={addComment}
          style={{
            marginLeft: 10,
            backgroundColor: "#1877f2", 
            paddingHorizontal: 20,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Post</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderTopWidth: 1,
          borderColor: "#ddd",
          backgroundColor: "white",
        }}
      ></View>
    </SafeAreaView>
  );
}
