<script setup lang="ts">
import { Chat } from '../types/chat';

  defineProps<{
    chat: Chat;
  }>();
</script>

<template>
  <router-link :to="`/chat/${chat.id}`" class="card w-96 h-32 bg-base-200 rounded-none divide-y shadow-xl">
    <div class="card-body">
      <h2 class="card-title capitalize">{{ chat.name }}</h2>
      <p class="text-ellipsis line-clamp-2">Ultima mensagem: {{ chat.lastMessage }}</p>
    </div>
  </router-link>
</template>
