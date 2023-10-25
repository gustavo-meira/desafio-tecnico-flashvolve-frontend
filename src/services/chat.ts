import { apiAuth } from '../api';
import { Chat } from '../types/chat';

export const getChats = async (): Promise<Chat[]> => {
  const { data } = await apiAuth.get<Chat[]>('/chat');

  const chats = data.map((chat) => ({
    ...chat,
    createdAt: new Date(chat.createdAt),
    updatedAt: new Date(chat.updatedAt),
  }))
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

  return chats;
};
