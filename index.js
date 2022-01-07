const { Telegraf } = require("telegraf");
const config = require("./config.json");

if (!config.token) {
    console.error("Please, add token to config.json.");
    process.exit(0);
}

const bot = new Telegraf(config.token);

bot.hears("!ping", (ctx) => ctx.reply("Pong!", {reply_to_message_id: ctx.message.message_id}));

bot.launch(config.token).then(console.log("Launched."));
