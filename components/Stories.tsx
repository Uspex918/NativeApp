import { ScrollView } from "react-native"

import Story from "@/components/Story"
import { STORIES } from "@/constants/mock-data"
import { styles } from "@/styles/feed.styles"
export const StoriesSection = () => {
    return (
        <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            style={styles.storiesContainer}
        >
            {STORIES.map((oneOfStory) => (
                <Story key={oneOfStory.id} story={oneOfStory} />
            ))}
        </ScrollView>
    )
}
