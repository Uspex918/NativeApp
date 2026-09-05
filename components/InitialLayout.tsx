import { api } from "@/convex/_generated/api"
import { useAuth } from "@clerk/expo"
import { useMutation } from "convex/react"
import { Stack, useRouter, useSegments } from "expo-router"
import { useEffect } from "react"

export default function InitialLayout() {
    const { isLoaded, isSignedIn } = useAuth()
    const ensureCurrentUser = useMutation(api.users.ensureCurrentUser)

    const segments = useSegments()

    const router = useRouter()

    useEffect(() => {
        if (!isLoaded) return

        const inAuthScreen = segments[0] === "(auth)"

        if (!isSignedIn && !inAuthScreen) router.replace("/(auth)/login")
        else if (isSignedIn && inAuthScreen) {
            ensureCurrentUser()
                .then(() => router.replace("/(tabs)"))
                .catch((error) =>
                    console.error("Error ensuring current user:", error),
                )
        }
    }, [isLoaded, isSignedIn, segments, ensureCurrentUser, router])

    if (!isLoaded) return null

    return <Stack screenOptions={{ headerShown: false }} />
}
