module.exports = {
    name: "ban",
    regex: /^(!|\/)(ban|бан)/,
    perms: "moderation",
    run: async(ctx) => {
        const targetId = ctx.message.reply_to_message.from.id;
        
        try {
            if (await ctx.kickChatMember(targetId)) return ctx.reply("Banned successfully");
        } catch (err) {
            return ctx.reply("An error occurred: " + err.description);
        }
    }
}
