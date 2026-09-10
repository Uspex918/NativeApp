import { Loader } from "@/components/Loader"
import { COLORS } from "@/constants/theme"
import { api } from "@/convex/_generated/api"
import { styles } from "@/styles/feed.styles"
import { Ionicons } from "@expo/vector-icons"
import { useQuery } from "convex/react"
import { Image } from "expo-image"
import { useState } from "react"
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native"

export default function Bookmarks() {
    const bookmarkedPosts = useQuery(api.bookmarks.getBookmarkedPosts)
    const [selectedPost, setSelectedPost] = useState<
        NonNullable<typeof bookmarkedPosts>[number] | null
    >(null)
    const x = bookmarkedPosts?.length

    console.log("массив", bookmarkedPosts)

    if (bookmarkedPosts === undefined) return <Loader />
    if (bookmarkedPosts.length === 0) return <NoBookmarksFound />
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Bookmarks has {x} photos</Text>
            </View>

            {/* POSTS */}
            <ScrollView
                contentContainerStyle={{
                    padding: 8,
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {bookmarkedPosts.map((post) => {
                    if (!post) return null
                    return (
                        <TouchableOpacity
                            key={post._id}
                            style={{
                                width: "33.33%",
                                padding: 1,
                                borderRadius: 2,
                            }}
                            onPress={() => setSelectedPost(post)}
                        >
                            <Image
                                source={post.imageUrl}
                                style={{ width: "100%", aspectRatio: 0.67 }}
                                contentFit="cover"
                                transition={200}
                                cachePolicy="memory-disk"
                            />
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>

            <Modal
                visible={selectedPost !== null}
                animationType="fade"
                transparent
                onRequestClose={() => setSelectedPost(null)}
            >
                <View style={styles.bookmarkModalBackdrop}>
                    <TouchableOpacity
                        style={styles.bookmarkModalClose}
                        onPress={() => setSelectedPost(null)}
                        accessibilityRole="button"
                        accessibilityLabel="Close image"
                    >
                        <Ionicons name="close" size={28} color={COLORS.white} />
                    </TouchableOpacity>
                    {selectedPost && (
                        <Image
                            source={selectedPost.imageUrl}
                            style={styles.bookmarkModalImage}
                            contentFit="contain"
                            cachePolicy="memory-disk"
                        />
                    )}
                </View>
            </Modal>
        </View>
    )
}

function NoBookmarksFound() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.background,
            }}
        >
            <Text style={{ color: COLORS.primary, fontSize: 22 }}>
                No bookmarks posts yet
            </Text>
        </View>
    )
}
