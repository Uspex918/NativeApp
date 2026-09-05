import { v } from "convex/values"
import { mutation } from "./_generated/server"

// Create a new task with the given text
export const createUser = mutation({
    args: {
        username: v.string(),
        fullname: v.string(),
        email: v.string(),
        bio: v.optional(v.string()),
        image: v.string(),
        clerkId: v.string(),
    },
    handler: async (ctx, args) => {
        const existingUser = await ctx.db
            .query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
            .first()

        console.log(existingUser)

        if (existingUser) return
        // create a user in db
        await ctx.db.insert("users", {
            username: args.username,
            fullname: args.fullname,
            email: args.email,
            bio: args.bio,
            image: args.image,
            followers: 0,
            following: 0,
            posts: 0,
            clerkId: args.clerkId,
        })
    },
})

export const ensureCurrentUser = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity()
        if (!identity) throw new Error("Unauthorized")

        const existingUser = await ctx.db
            .query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
            .first()

        if (existingUser) return existingUser._id

        const email = identity.email ?? `${identity.subject}@unknown.local`
        const username = email.split("@")[0] || identity.subject

        return await ctx.db.insert("users", {
            username,
            fullname: identity.name ?? username,
            email,
            image: identity.pictureUrl ?? "",
            followers: 0,
            following: 0,
            posts: 0,
            clerkId: identity.subject,
        })
    },
})
