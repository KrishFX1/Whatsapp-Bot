**Visit [Links](https://krishfx.gitbook.io/wabot/) for examples and better understanding of code.**

# WhatsappBot
💬 🤖 A WhatsApp bot made with NodeJS WhatsApp library to make your own Whatsapp Chatbot and connect your whatsapp to Telegram And Discord.. Feel free to use it and add your own code

# installation
First install the code to your system and open a text editor and run
```sh 
npm install
```
It will install the required packages. 
    
# Connect to Discord
To connect to Discord bot enter you Discord Bot Token in `.env` file.
if you don't have the token follow these steps to get one:

- Create A new Application at https://discordapp.com/developers/applications/ if you don't have one.
- Tap on `Bot` on the left side Menu and tap on `Add Bot`
- Copy the Client Secret from `OAuth2` and paste it into your code.
- In `OAuth2`, scroll down and within `scope` select 'Bot' , and choose the Bot Permissions by scrolling down again.
- Now use the URL to add the bot to your server

**Remember to add token to your `.env`  file**

# Connecting Telegram Bot
Getting telegram bot token is pretty much straightforward.
- Go to https://telegram.me/BotFather and create a bot by using `/newbot` command and set name and Username of your bot
- Now copy your bot token and paste it into `.env` file

# Starting Bot
After adding both tokens to `.env` file, run the code by using
```sh
npm start
```
