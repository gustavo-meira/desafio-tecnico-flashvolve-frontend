<script setup lang="ts">
  import { useQuery } from '@tanstack/vue-query';
  import { vAutoAnimate } from '@formkit/auto-animate'
  import { getChats } from '../services/chat';
  import ChatCard from './ChatCard.vue';
  import ChatCardSkeleton from './ChatCardSkeleton.vue';

  const oneSecondInMs = 1000;

  const { data: chats, isLoading } = useQuery({
    queryKey: ['chats'],
    queryFn: getChats,
    refetchInterval: oneSecondInMs * 5,
  });

  const arrayWithFiveItems = Array.from({ length: 5 }, () => Math.random());
</script>

<template>
  <div class="flex">
    <div v-auto-animate class="flex overflow-auto flex-col divide-y">
      <ChatCard v-if="!isLoading" v-for="chat in chats" :chat="chat" :key="chat.id" />
      <ChatCardSkeleton v-else v-for="item in arrayWithFiveItems" :key="item" />
    </div>
    <div class="divider divider-horizontal m-0 bg-base-200"></div>
  </div>
</template>
