module.exports = {
    name: "ban",
    regex: /^(!|\/)(ban|бан)/,
    perms: "moderation",
    run: async(ctx) => {
        const target = ctx.message.reply_to_message.from;
        
        try {
            if (await ctx.kickChatMember(target.id)) return ctx.reply(`Banned ${target.first_name}${target.username? " (@" + target.username + ")" : ""} [${target.id}] successfully`);
        } catch (err) {
            return ctx.reply("An error occurred: " + err.description);
        }
    }
}
