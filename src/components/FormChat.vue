<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useMutation, useQueryClient } from '@tanstack/vue-query';
  import { postMessage } from '../services/messages';

  const route = useRoute();
  const queryClient = useQueryClient();

  const chatId = route.params.id;

  const { mutate } = useMutation({
    mutationFn: async (message: string) => {
      const messagePosted = await postMessage(chatId as string, message);
      return messagePosted;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chat', 'messages', chatId] });
    },
  });

  const message = ref('');

  const onSubmit = () => {
    mutate(message.value);
    message.value = '';
  };
</script>

<template>
  <form @submit.prevent="onSubmit" class="h-20 bg-base-200 mt-4 flex gap-4 p-4">
    <input
      class="input input-primary input-bordered flex-grow"
      type="text"
      placeholder="Type a message"
      v-model="message"
    />
    <button class="btn btn-primary">Send</button>
  </form>
</template>