const { Telegraf } = require("telegraf");
const config = require("./config.json");
const fs = require("fs");
const { check } = require("./check");

if (!config.token) {
    console.error("Please, add token to config.json.");
    process.exit(0);
}

const commands = new Map();
const bot = new Telegraf(config.token);

const files = fs.readdirSync(`./commands`);
for (const file of files){
    const command = require(`./commands/${file}`);
    if(command.name) commands.set(command.name, command);
}

for (const [name, command] of commands){
    bot.hears(command.regex, async(ctx) => {
        if (await check(ctx, command.perms)){
            command.run(ctx);
        }
    });
}

bot.hears("!ping", (ctx) => ctx.reply("Pong!", {reply_to_message_id: ctx.message.message_id}));

bot.launch(config.token).then(console.log("Launched."));
