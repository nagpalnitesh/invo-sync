import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function Page() {
  return (
    <>
      <SafeAreaView className="flex-1 items-center justify-center">
        <Link href={{ pathname: '/invoices/generate' }}>
          <View className="bg-blue-600 w-4/4 mx-auto px-10 py-4 rounded-full flex-row justify-center items-center gap-2">
            <Text className="text-xl font-bold text-white uppercase">New Invoices</Text>
          </View>
        </Link>
      </SafeAreaView>
    </>
  );
}