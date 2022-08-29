module.exports = {
    name: "kick",
    regex: /^(!|\/)(kick|кик)/,
    perms: "moderation",
    run: async(ctx) => {
        const targetId = ctx.message.reply_to_message.from.id;
        
        try {
            if (await ctx.unbanChatMember(targetId)) return ctx.reply("Kicked successfully");
        } catch (err) {
            return ctx.reply("An error occurred: " + err.description);
        }
    }
}
