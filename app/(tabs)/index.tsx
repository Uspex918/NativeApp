// import { Link } from "expo-router"
import {
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native"

import { Loader } from "@/components/Loader"
import Post from "@/components/Post"
import Story from "@/components/Story"
import { STORIES } from "@/constants/mock-data"
import { COLORS } from "@/constants/theme"
import { api } from "@/convex/_generated/api"
import { useAuth } from "@clerk/expo"
import { Ionicons } from "@expo/vector-icons"
import { useQuery } from "convex/react"
import { styles } from "../../styles/feed.styles"

export default function Index() {
    const { signOut } = useAuth()
    const posts = useQuery(api.posts.getFeedPosts)
    if (posts === undefined) return <Loader />
    if (posts.length === 0) return <NoPostsFound />

    return (
        <View style={styles.container}>
            {/* <Link href={"/notifications"}>Feed screen in tabs</Link> */}
            {/* <TouchableOpacity onPress={() => signOut()}>
                <Text style={{ color: "white" }}>Signout</Text>
            </TouchableOpacity> */}
            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>spotlight</Text>
                <TouchableOpacity onPress={() => signOut()}>
                    <Ionicons
                        name="log-out-outline"
                        size={24}
                        color={COLORS.white}
                    />
                </TouchableOpacity>
            </View>
            {/* <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
            >
                {posts.map((post) => (
                    <Post key={post._id} postProp={post} />
                ))}
            </ScrollView> */}
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post postProp={item} />}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
                ListHeaderComponent={<StoriesSection />}
                //                 renderItem={(info) => {
                //     console.log(info)

                //     return <Post postProp={info.item} />
                // }}
            />
        </View>
    )
}

const StoriesSection = () => {
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

const NoPostsFound = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: COLORS.background,
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Text style={{ fontSize: 20, color: COLORS.primary }}>
            No posts yet
        </Text>
    </View>
)
