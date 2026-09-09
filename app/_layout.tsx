import InitialLayout from "@/components/InitialLayout"
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider"
import { useFonts } from "expo-font"
import * as NavigationBar from "expo-navigation-bar"
import { SplashScreen } from "expo-router"
import { StatusBar } from "expo-status-bar"
import * as WebBrowser from "expo-web-browser"
import { useCallback, useEffect } from "react"
import { Platform } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

SplashScreen.preventAutoHideAsync()

WebBrowser.maybeCompleteAuthSession()

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf"),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) await SplashScreen.hideAsync()
    }, [fontsLoaded])

    useEffect(() => {
        if (Platform.OS === "android") {
            NavigationBar.setStyle("dark")
        }
    }, [])

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
            <StatusBar style="light" />
        </ClerkAndConvexProvider>
    )
}
