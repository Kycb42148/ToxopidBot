module.exports = {
    name: "unmute",
    regex: /^[!\/](unmute|размьют|размут)/i,
    perms: "moderation",
    run: async(ctx) => {
        const target = ctx.message.reply_to_message.from;
        
        try{
            if (await ctx.restrictChatMember(target.id, {
                can_send_messages: true,
                can_send_media_messages: true,
                can_send_other_messages: true,
                can_send_polls: true,
                can_add_web_page_previews: true,
                can_invite_users: true
            })) return ctx.reply(`Unmuted ${target.first_name}${target.username? " (@" + target.username + ")" : ""} [${target.id}] successfully`, { reply_to_message_id: ctx.message.message_id });
        } catch (err) {
            return ctx.reply("An error occurred: " + err.description);
        }
    }
}
