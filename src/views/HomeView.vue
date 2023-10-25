<script setup lang="ts">
  import ChatContainer from '../components/ChatContainer.vue';
  import Chats from '../components/Chats.vue';
</script>

<template>
  <ChatContainer>
    <Chats />
    <div class="flex flex-grow justify-center items-center flex-col">
      <h2 class="text-center text-3xl">Selecione um chat para começar a conversar.</h2>
      <h2 class="text-center text-2xl">Ou envie uma mensagem para o 
        <a class="link" target="_blank" href="https://t.me/des_tec_flashvolve_bot">Bot.</a>
      </h2>
    </div>
  </ChatContainer>
</template>