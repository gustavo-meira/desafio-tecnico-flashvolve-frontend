import { apiAuth } from '../api';
import { Message } from '../types/message';

export const getMessages = async (chatId: string): Promise<Message[]> => {
  const { data } = await apiAuth.get<Message[]>(`/chat/${chatId}/messages`);

  const messages = data.map((message) => ({
    ...message,
    createdAt: new Date(message.createdAt),
    updatedAt: new Date(message.updatedAt),
  }))
    .sort((a, b) => a.updatedAt.getTime() - b.updatedAt.getTime());

  return messages;
};

