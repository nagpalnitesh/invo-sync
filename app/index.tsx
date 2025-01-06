import React from "react";
import { SafeAreaView } from "react-native";
import '../global.css';
import Login from "./authorization";

export default function Page() {
  return (
    <SafeAreaView className="flex-1">
      <Login />
    </SafeAreaView>
  )
}