import InitialLayout from "@/components/InitialLayout"
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider"
import * as WebBrowser from "expo-web-browser"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

WebBrowser.maybeCompleteAuthSession()

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
