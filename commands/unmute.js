module.exports = {
    name: "unmute",
    regex: /^[!\/](unmute|размьют|размут)/i,
    perms: "moderation",
    run: async(ctx) => {
        const targetId = ctx.message.reply_to_message.from.id;
        
        if (await ctx.restrictChatMember(targetId, {
            can_send_messages: true
        })) return ctx.reply("Unmuted successfully", { reply_to_message_id: ctx.message.message_id });
    }
}
