module.exports = {
    name: "mute",
    regex: /^([!\/])(mute|мьют|мут) ?((\d+) ?(час|часов|ч|hour|hours|h|минут|минуту|minute|minutes|m|м|дней|день|д|day|days|d|суток|сутки)?)?/i,
    perms: "moderation",
    run: async(ctx) => {
        const target = ctx.message.reply_to_message.from;

        const userInfo = await ctx.getChatMember(target.id);
        if (['creator', 'administrator'].includes(userInfo.status)) return ctx.reply("User is administrator of this chat.");

        let time = 3600;
        const count = +ctx.message.text.match(module.exports.regex)[4] || 1;

        if (['минут', 'минуту', 'minute', 'minutes', 'm', 'м'].includes(ctx.message.text.match(module.exports.regex)[5])) time = 60;
        if (['дней', 'день', 'суток', 'сутки', 'day', 'days', 'd', 'д'].includes(ctx.message.text.match(module.exports.regex)[5])) time = 86400;

        const now = Date.now();

        if (await ctx.restrictChatMember(target.id, {
            can_send_messages: false,
            until_date: ((now / 1000) + count * time)
        })) return ctx.reply(`Muted ${target.first_name}${target.username? " (@" + target.username + ")" : ""} [${target.id}] until ${new Date(now + count * time * 1000).toLocaleString()} successfully`, { reply_to_message_id: ctx.message.message_id });
    }
}
