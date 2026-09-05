// import { Link } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

import { useAuth } from "@clerk/expo"
import { styles } from "../../styles/auth.styles"

export default function Index() {
    const { signOut } = useAuth()
    return (
        <View style={styles.container}>
            {/* <Link href={"/notifications"}>Feed screen in tabs</Link> */}
            <TouchableOpacity onPress={() => signOut()}>
                <Text style={{ color: "white" }}>Signout</Text>
            </TouchableOpacity>
        </View>
    )
}
