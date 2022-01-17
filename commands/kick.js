module.exports = {
    name: "ban",
    regex: /^(!|\/)(kick|кик)/,
    perms: "moderation",
    run: async(ctx) => {
        const targetId = ctx.message.reply_to_message.from.id;
        
        await ctx.kickChatMember(targetId);
        if (await ctx.unbanChatMember(targetId)) return ctx.reply("Kicked successfully");
    }
}
