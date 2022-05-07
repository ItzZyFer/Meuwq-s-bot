const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTYwOTUxOTA0Nzk4NjU4NTYw.Ykx6Mw.dCzJdmNQw7ulklxnwEeO_UroCak"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello World!");
    }
})

client.login(process.env.TOKEN);