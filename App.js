import React from 'react';
import ChatScreen from "./ChatScreen";
import CommentSection from "./CommentSection"
import { 
  KeyboardAvoidingView,
  Platform,
  Image
} from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height" }>
      <Image
        source={require ('./assets/Pic.jpeg')} 
        style={{width:380, height:200}}
      />
      <CommentSection />
      <ChatScreen />
    </KeyboardAvoidingView>
  );
}
