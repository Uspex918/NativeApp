import { useAuth } from "@clerk/expo"
import { Redirect } from "expo-router"

export default function HostedAuthCallback() {
    const { isLoaded, isSignedIn } = useAuth()

    if (!isLoaded) return null

    return isSignedIn ? (
        <Redirect href="/(tabs)" />
    ) : (
        <Redirect href="/(auth)/login" />
    )
}
