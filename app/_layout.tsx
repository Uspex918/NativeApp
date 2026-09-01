import InitialLayout from "@/components/InitialLayout"
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function RootLayout() {
    return (
        <ClerkAndConvexProvider>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
                    {/* <Stack screenOptions={{ headerShown: false }} /> */}
                    <InitialLayout />
                </SafeAreaView>
            </SafeAreaProvider>
        </ClerkAndConvexProvider>
    )
}
