<script setup lang="ts">
  import { computed } from 'vue';
  import { Message } from '../types/message';

  const props = defineProps<{
    message: Message;
    opacity?: boolean;
  }>();

  const chatClasses = computed(() => {
    if (props.opacity) {
      return 'opacity-50';
    } else {
      return '';
    }
  });
</script>

<template>
  <div v-if="message.fromBot" :class="`${chatClasses} chat chat-end`">
    <div class="chat-image avatar placeholder h-12">
      <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
        <span className="text-xl">{{ message.senderName[0].toUpperCase() }}</span>
      </div>
    </div>
    <div class="chat-bubble">{{ message.text }}</div>
  </div>

  <div v-else :class="`${chatClasses} chat chat-start`">
    <div class="chat-image avatar placeholder h-12">
      <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
        <span className="text-xl">{{ message.senderName[0].toUpperCase() }}</span>
      </div>
    </div>
    <div class="chat-bubble">{{ message.text }}</div>
  </div>
</template>
