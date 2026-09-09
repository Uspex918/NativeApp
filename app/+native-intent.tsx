type NativeIntentOptions = {
    path: string
    initial: boolean
}

export function redirectSystemPath({ path }: NativeIntentOptions) {
    try {
        const normalizedPath = decodeURIComponent(path)

        // Older builds used nativeapp://<package>.hosted-callback. Keep
        // those callbacks inside the app instead of showing Expo Router's
        // Unmatched Route screen.
        if (normalizedPath.includes(".hosted-callback")) {
            return "/hosted-auth-callback"
        }

        return path
    } catch {
        return "/hosted-auth-callback"
    }
}
