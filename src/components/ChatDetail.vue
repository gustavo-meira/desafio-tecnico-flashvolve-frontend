<script setup lang="ts">
  import { useQuery, useMutationState } from '@tanstack/vue-query';
  import { vAutoAnimate } from '@formkit/auto-animate';
  import { useRoute } from 'vue-router';
  import { getMessages } from '../services/messages';
  import { computed } from 'vue';
  import ChatMessage from './ChatMessage.vue';
  import FormChat from './FormChat.vue';

  const route = useRoute();

  const chatId = route.params.id;
  const oneSecondInMs = 1000;

  const { data: messages } = useQuery({
    queryKey: ['chat', 'messages', chatId],
    queryFn: async () => getMessages(chatId as string),
    refetchInterval: oneSecondInMs * 5,
  });

  const mutations = useMutationState<string>({
    filters: { status: 'pending' },
    select: (mutation) => mutation.state.variables as string,
  });

  const messageSender = computed(() => {
    const sender = messages.value?.find((message) => !message.fromBot);
  
    if (!sender) {
      return 'Loading...';
    } else {
      return sender.senderName;
    }
  });

</script>

<template>
  <div class="flex-grow flex flex-col">
    <header class="h-24 bg-base-200 flex items-center gap-4">
      <div class="avatar placeholder h-20">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-20">
          <span className="text-2xl">{{ messageSender[0].toUpperCase() }}</span>
        </div>
      </div>

      <h2 class="text-3xl">
        {{ messageSender }}
      </h2>
    </header>
    <div v-auto-animate class="flex-grow flex flex-col overflow-auto justify-end">
      <ChatMessage
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
      <ChatMessage
        v-if="mutations.length"
        v-for="message in mutations"
        :key="Math.random()"
        opacity
        :message="{
          chatId: Number(chatId),
          fromBot: true,
          id: Math.random(),
          senderName: 'You',
          text: message,
          createdAt: new Date(),
          updatedAt: new Date(),
        }"
      />
    </div>
    <FormChat />
  </div>
</template>