module.exports = {
    name: "unban",
    regex: /^(!|\/)(unban|разбан)/,
    perms: "moderation",
    run: async(ctx) => {
        const targetId = ctx.message.reply_to_message.from.id;
        
        if (await ctx.unbanChatMember(targetId)) return ctx.reply("Unbanned successfully");
    }
}
