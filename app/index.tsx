import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";
import { Button } from "~/components/Button";

export default function Page() {
  return (
    <SafeAreaView className="flex-1 items-center">
      <Link href={{ pathname: '/invoices/generate' }} asChild>
        <Text>New Invoices</Text>
      </Link>
      <Button title="New Invoice" className="mt-auto w-2/4 uppercase" />
    </SafeAreaView>
  );
}