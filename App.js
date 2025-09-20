import React from 'react';
import { SafeAreaView } from 'react-native';
//import ColorChangerApp from './ColorChangerApp';
//import CounterApp from './CounterApp';
import ChatScreen from "./ChatScreen";
import CommentSection from "./CommentSection"

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CommentSection />
      <ChatScreen />
    </SafeAreaView>
  );
}