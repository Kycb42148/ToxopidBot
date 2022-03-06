module.exports = {
    name: "mute",
    regex: /^(!|\/)(mute|мьют) ?((\d+) ?(часов|час|часов|ч|hour|hours|h|минут|минуту|minute|minutes|m|м|дней|день|д|day|days|d|суток|сутки)?)?/i,
    perms: "moderation",
    run: async(ctx) => {
        const targetId = ctx.message.reply_to_message.from.id;
        const regex = /^(!|\/)(mute|мьют) ?((\d+) ?(часов|час|часов|ч|hour|hours|h|минут|минуту|minute|minutes|m|м|дней|день|д|day|days|d|суток|сутки)?)?/i
        
        let time = 3600;
        const count = +ctx.message.text.match(regex)[4] || 1;

        if (['минут', 'минуту', 'minute', 'minutes', 'm', 'м'].includes(ctx.message.text.match(regex)[5])) time = 60;
        if (['дней', 'день', 'суток', 'сутки', 'day', 'days', 'd', 'д'].includes(ctx.message.text.match(regex)[5])) time = 86400;

        const now = Date.now();

        if (await ctx.restrictChatMember(targetId, {
            can_send_messages: false,
            can_send_media_messages: false,
            can_send_polls: false,
            can_send_other_messages: false,
            can_add_web_page_previews: false,
            until_date: (now / 1000) + count * time
        })) return ctx.reply(`Muted until ${new Date(now + count * time * 1000).toUTCString()} successfully`, { reply_to_message_id: ctx.message.message_id });
    }
}
