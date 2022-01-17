const check = async(ctx) => {
    const chat = await ctx.getChat(ctx.chat.id);
    if (chat.type !== 'supergroup'){
        await ctx.reply("I work only in supergroups");
        return false;
    }

    if (!('reply_to_message' in ctx.message) || ctx.message.reply_to_message.from.is_bot) return false;

    const targetId = ctx.message.reply_to_message.from.id;
    const userId = ctx.message.from.id;
    const text = ctx.message.text;

    if (userId == targetId) return false;

    const botInfo = await ctx.getChatMember(ctx.botInfo.id);
    if (!botInfo.can_restrict_members){
        await ctx.reply("I don't have enough rights");
        return false;
    }

    const userInfo = await ctx.getChatMember(ctx.from.id);
    if (userInfo.status !== 'creator' && !userInfo.can_restrict_members){
        await ctx.reply("You don't have enough rights");
        return false;
    }

    return true;
}

module.exports = {check};
