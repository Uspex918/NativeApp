import { COLORS } from "@/constants/theme"
import { styles } from "@/styles/auth.styles"
import { useSSO } from "@clerk/expo"
import { useHostedAuth } from "@clerk/expo/hosted-auth"
import { Ionicons } from "@expo/vector-icons"
import { Image, Platform, Text, TouchableOpacity, View } from "react-native"

export default function Login() {
    const { startHostedAuth } = useHostedAuth()
    const { startSSOFlow } = useSSO()

    const handleGoogleSignIn = async () => {
        try {
            if (Platform.OS === "web") {
                const { createdSessionId, setActive } = await startSSOFlow({
                    strategy: "oauth_google",
                })

                if (createdSessionId && setActive) {
                    await setActive({ session: createdSessionId })
                }
            } else {
                // Clerk's Expo plugin registers the canonical Android callback:
                // clerk://<android.package>.hosted-callback. Let the SDK build
                // this URL so it stays in sync with app.json and the native
                // intent-filter generated during the EAS build.
                await startHostedAuth()
            }
        } catch (error) {
            console.error("OAuth error:", error)
        }
    }

    return (
        <View style={styles.container}>
            {/* BRAND SECTION*/}
            <View style={styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Ionicons name="leaf" size={32} color={COLORS.primary} />
                </View>
                <Text style={styles.appName}>EasyGram</Text>
                <Text style={styles.tagline}>lake a ProstoGram</Text>
            </View>

            {/* ILLUSTRATION*/}
            <View style={styles.illustrationContainer}>
                <Image
                    source={require("../../assets/images/software tester-bro.png")}
                    style={styles.illustration}
                    resizeMode="cover"
                />
            </View>

            {/* LOGIN SECTION*/}
            <View style={styles.loginSection}>
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={handleGoogleSignIn}
                    activeOpacity={0.9}
                >
                    <View style={styles.googleIconContainer}>
                        <Ionicons
                            name="logo-google"
                            size={20}
                            color={COLORS.surface}
                        />
                    </View>
                    <Text style={styles.googleButtonText}>
                        Continue with Google
                    </Text>
                </TouchableOpacity>
                <Text style={styles.termsText}>
                    By continuing, you agree to your Term and Privecy Policy
                </Text>
            </View>
        </View>
    )
}
