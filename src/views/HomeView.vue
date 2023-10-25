<script setup lang="ts">
  import ChatContainer from '../components/ChatContainer.vue';
  import Chats from '../components/Chats.vue';
</script>

<template>
  <ChatContainer>
    <Chats />
    <div class="flex flex-grow justify-center items-center">
      <h2 class="text-center text-3xl">Selecione um chat para começar a conversar.</h2>
    </div>
  </ChatContainer>
</template>