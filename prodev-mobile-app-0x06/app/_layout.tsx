import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false, // hide default headers globally
        }}
      >
        {/* The main screens */}
        <Stack.Screen name="/" />
        <Stack.Screen name="join" />
        <Stack.Screen name="signin" />
      </Stack>
    </SafeAreaProvider>
  );
}
