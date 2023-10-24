<script setup lang="ts">
</script>

<template>
  <form class="form-control">
    <h2 class="text-3xl text-center text-black">Entrar</h2>
    <label class="label">
      <span class="label-text text-gray-800">Nome</span>
    </label>
    <input type="text" class="input input-primary" />
    <label class="label">
      <span class="label-text text-gray-800">Email</span>
    </label>
    <input type="email" class="input input-primary" />
    <label class="label">
      <span class="label-text text-gray-800">Senha</span>
    </label>
    <input type="password" class="input input-primary" />
    <label class="label">
      <span class="label-text text-gray-800">Confirmação da Senha</span>
    </label>
    <input type="password" class="input input-primary" />
    <span class="text-gray-700 mt-2">
      Já tem uma conta? 
      <router-link to="/" class="link" href="#">Entre</router-link>
    </span>
    <button class="btn btn-primary mt-4">Registrar</button>
  </form>
</template>