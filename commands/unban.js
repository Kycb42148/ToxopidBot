module.exports = {
    name: "unban",
    regex: /^(!|\/)(unban|разбан)/,
    perms: "moderation",
    run: async(ctx) => {
        const target = ctx.message.reply_to_message.from;
        
        try {
            if (await ctx.unbanChatMember(target.id)) return ctx.reply(`Unbanned ${target.first_name}${target.username? " (@" + target.username + ")" : ""} [${target.id}] successfully`);
        } catch (err) {
            return ctx.reply("An error occurred: " + err.description);
        }
    }
}
