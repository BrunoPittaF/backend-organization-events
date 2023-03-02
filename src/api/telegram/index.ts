import api from '../index';

export const telegramService = {
  async fetchTelegramUser (): Promise<any> {
    try {
      const response = await api.get('/getMe');

      return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
  },

  async getUpdates (): Promise<any> {
    try {
      const response = await api.get('/getUpdates');

      return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
  },

  async sendMessage (userChat: string): Promise<any> {
    try {
      const response = await api.get('/sendMessage', {
        params: {
          chat_id: userChat,
          text: 'Olá, seja bem vinda ao meu chat'
        }
      });

      return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
  },
}