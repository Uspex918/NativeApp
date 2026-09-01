import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/expo"
import { tokenCache } from "@clerk/expo/token-cache"
import { ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import React from "react"

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
    unsavedChangesWarning: false,
})
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
    throw new Error("Add your Clerk Publishable Key to the .env file")
}

export default function ClerkAndConvexProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider
            tokenCache={tokenCache}
            publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || ""}
        >
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                <ClerkLoaded>{children}</ClerkLoaded>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}
