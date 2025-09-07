import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
    return (
        <SafeAreaProvider>
            <Stack
                screenOptions={{
                    headerShown: false, // hide headers globally
                }}
            >
                {/* Root screens */}
                <Stack.Screen name="/" />       {/* index.tsx (home landing / main stack) */}
                <Stack.Screen name="join" />    {/* join.tsx screen */}
                <Stack.Screen name="signin" />  {/* signin.tsx screen */}
            </Stack>
        </SafeAreaProvider>
    );
}
