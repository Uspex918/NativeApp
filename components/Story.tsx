import { styles } from "@/styles/feed.styles"
import {
    Image,
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View,
} from "react-native"

type Story = {
    id: string
    username: string
    avatar: string | ImageSourcePropType
    hasStory: boolean
}

export default function Story({ story }: { story: Story }) {
    return (
        <TouchableOpacity style={styles.storyWrapper}>
            <View style={[styles.storyRing, !story.hasStory && styles.noStory]}>
                <Image
                    source={
                        typeof story.avatar === "string"
                            ? { uri: story.avatar }
                            : story.avatar
                    }
                    style={styles.storyAvatar}
                />
            </View>
            <Text style={styles.storyUsername}>{story.username}</Text>
        </TouchableOpacity>
    )
}
