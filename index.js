require('dotenv').config()
var https = require('follow-redirects').https;
const qrcode = require('qrcode-terminal')

const discord = require('discord.js')
const whatsapp = require('whatsapp-web.js')
const { MessageAttachment } = require('discord.js')

const discordClient = discord.Client
const whatsappClient = whatsapp.Client

var discordToken = process.env.discordToken
var telegramToken = process.env.telegramToken
let whatsappSession = JSON.parse(process.env.WW_SESSION);

botTele = new TelegramBot(token, { polling: true }); //Start the Telegram Bot

var bot = new discordClient({
    intents: [
        //Insert Intents that you want your bot to catch.
    ]
})


bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.on("error", (err) => {
    console.log(err);
});


const puppeteerOptions = {
    headless: true,
    args: ['--no-sandbox'],
    executablePath: '<Absolute Path To Your Chrome>',
}

const client = new whatsappClient({
    puppeteer: puppeteerOptions,
    session: whatsappSession,
})

// prints QR code to console when received
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
})

// Save session values to the file upon successful auth
client.on('authenticated', session => {
    // Save this session object in WW_SESSION manually to reuse it next time
    console.log(JSON.stringify(session));
});

console.log('9');
client.on('auth_failure', message => {
    // Fired if session restore was unsuccessfull
    console.error('AUTHENTICATION FAILURE', message);
});


client.on('ready', () => {
    console.log('Client is ready!');
});


client.on('message_create', async message => {
    if (message.body == "!ping") {
        message.reply('!pong')
    }
});


bot.on("messageCreate", async (msg) => {
  console.log(msg) //Get all
    if (msg.content == "/ping") {
        msg.reply('Pong')
    }
});


botTele.on('message', async (msg) => {
    const chatId = msg.chat.id;
    if (msg.text == "/ping") {
        await botTele.sendMessage(chatId, 'Pong')
    }
});


client.initialize()
bot.login(discordToken)

