module.exports = {
    name: "ban",
    regex: /^(!|\/)(ban|бан)/,
    perms: "moderation",
    run: async(ctx) => {
        const targetId = ctx.message.reply_to_message.from.id;
        
        if (await ctx.kickChatMember(targetId)) return ctx.reply("Banned successfully");
    }
}
