<script setup lang="ts">
  import { computed, reactive } from 'vue';
  import { signin } from '../services/signin';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();

  const state = reactive({
    email: '',
    password: '',
  });

  const errors = reactive({
    email: '',
    password: '',
  });

  const classInputEmail = computed(() => {
    return errors.email ? 'input input-error' : 'input input-primary';
  });

  const classInputPassword = computed(() => {
    return errors.password ? 'input input-error' : 'input input-primary';
  });

  const onSubmit = async () => {
    if (state.email === '') return errors.email = 'Email é obrigatório';
    else if (state.email.length >= 1) errors.email = '';
    if (state.password === '') return errors.password = 'Senha é obrigatória';
    else if (state.password.length >= 1) errors.password = '';

    const isAuth = await signin(state.email, state.password);

    if (isAuth) {
      router.push('/chat');
    } else {
      errors.email = 'Email ou senha inválidos';
    }
  };
</script>

<template>
  <form @submit.prevent="onSubmit" class="form-control">
    <h2 class="text-3xl text-center text-black">Entrar</h2>
    <label class="label">
      <span class="label-text text-gray-800">Email</span>
    </label>
    <input type="email" v-model="state.email" :class="classInputEmail" />
    <span class="text-red-500 text-sm">{{ errors.email }}</span>
    <label class="label">
      <span class="label-text text-gray-800">Senha</span>
    </label>
    <input type="password" v-model="state.password" :class="classInputPassword" />
    <span class="text-red-500 text-sm">{{ errors.password }}</span>
    <span class="text-gray-700 mt-2">
      Ainda não tem uma conta? 
      <router-link to="/signup" class="link" href="#">Cadastre-se</router-link>
    </span>
    <button class="btn btn-primary mt-4">Entrar</button>
  </form>
</template>

<style scoped>
</style>