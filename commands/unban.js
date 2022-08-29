module.exports = {
    name: "unban",
    regex: /^(!|\/)(unban|разбан)/,
    perms: "moderation",
    run: async(ctx) => {
        const targetId = ctx.message.reply_to_message.from.id;
        
        try {
            if (await ctx.unbanChatMember(targetId)) return ctx.reply("Unbanned successfully");
        } catch (err) {
            return ctx.reply("An error occurred: " + err.description);
        }
    }
}
