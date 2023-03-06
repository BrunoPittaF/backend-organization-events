import * as express from 'express';
import { TelegramBot } from 'node-telegram-bot-api';

// Replace with your bot token
const bot = new TelegramBot('YOUR_TELEGRAM_BOT_TOKEN', { polling: false });

const app = express();

// Replace with your server URL and port
const serverUrl = 'https://your-server-url.com';
const port = 3000;

app.use(express.json());

app.post(`/telegram/${bot.token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  bot.setWebHook(`${serverUrl}/telegram/${bot.token}`);
  console.log(`Telegram webhook is listening on port ${port}`);
});
