module.exports = {
    name: "kick",
    regex: /^(!|\/)(kick|кик)/,
    perms: "moderation",
    run: async(ctx) => {
        const target = ctx.message.reply_to_message.from;
        
        try {
            if (await ctx.unbanChatMember(target.id)) return ctx.reply(`Kicked ${target.first_name}${target.username? " (@" + target.username + ")" : ""} [${target.id}] successfully`);
        } catch (err) {
            return ctx.reply("An error occurred: " + err.description);
        }
    }
}
