import InitialLayout from "@/components/InitialLayout"
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider"
import { useFonts } from "expo-font"
import { SplashScreen } from "expo-router"
import * as WebBrowser from "expo-web-browser"
import { useCallback } from "react"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

SplashScreen.preventAutoHideAsync()

WebBrowser.maybeCompleteAuthSession()

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "JetBrainsMonoNL-Italic": require("../assets/fonts/JetBrainsMonoNL-Italic.ttf"),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) await SplashScreen.hideAsync()
    }, [fontsLoaded])

    return (
        <ClerkAndConvexProvider>
            <SafeAreaProvider>
                <SafeAreaView
                    style={{ flex: 1, backgroundColor: "black" }}
                    onLayout={onLayoutRootView}
                >
                    {/* <Stack screenOptions={{ headerShown: false }} /> */}
                    <InitialLayout />
                </SafeAreaView>
            </SafeAreaProvider>
        </ClerkAndConvexProvider>
    )
}
