import React from "react";
import { SafeAreaView } from "react-native";
import '../global.css';
import Main from "./main-screen";
// import Login from "./authorization";

export default function Page() {
  return (
    <SafeAreaView className="flex-1">
      {/* <Login /> */}
      <Main />
    </SafeAreaView>
  )
}