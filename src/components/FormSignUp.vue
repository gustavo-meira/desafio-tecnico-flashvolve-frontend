<script setup lang="ts">
  import { reactive } from 'vue';
  import { signup } from '../services/signup';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const state = reactive({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const errors = reactive({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const onSubmit = async () => {
    if (state.name === '') return errors.name = 'Nome é obrigatório';
    else if (state.name.length >= 1) errors.name = '';

    if (state.email === '') return errors.email = 'Email é obrigatório';
    else if (state.email.length >= 1) errors.email = '';

    if (state.password === '') return errors.password = 'Senha é obrigatória';
    else if (state.password.length >= 1) errors.password = '';

    if (state.passwordConfirmation === '') return errors.passwordConfirmation = 'Confirmação de senha é obrigatória';
    else if (state.passwordConfirmation.length >= 1) errors.passwordConfirmation = '';

    if (state.password !== state.passwordConfirmation) return errors.passwordConfirmation = 'As senhas não conferem';
    else if (state.password === state.passwordConfirmation) errors.passwordConfirmation = '';

    const isAuth = await signup({ ...state});

    if (isAuth) {
      router.push('/chat');
    } else {
      errors.email = 'Um usuário com este email já existe.';
    }
  };
</script>

<template>
  <form @submit.prevent="onSubmit" class="form-control">
    <h2 class="text-3xl text-center text-black">Entrar</h2>

    <label class="label">
      <span class="label-text text-gray-800">Nome</span>
    </label>
    <input type="text" v-model="state.name" class="input input-primary" />
    <span class="text-red-500 text-sm">{{ errors.name }}</span>

    <label class="label">
      <span class="label-text text-gray-800">Email</span>
    </label>
    <input type="email" v-model="state.email" class="input input-primary" />
    <span class="text-red-500 text-sm">{{ errors.email }}</span>

    <label class="label">
      <span class="label-text text-gray-800">Senha</span>
    </label>
    <input type="password" v-model="state.password" class="input input-primary" />
    <span class="text-red-500 text-sm">{{ errors.password }}</span>

    <label class="label">
      <span class="label-text text-gray-800">Confirmação da Senha</span>
    </label>
    <input type="password" v-model="state.passwordConfirmation" class="input input-primary" />
    <span class="text-red-500 text-sm">{{ errors.passwordConfirmation }}</span>

    <span class="text-gray-700 mt-2">
      Já tem uma conta? 
      <router-link to="/" class="link" href="#">Entre</router-link>
    </span>
    <button class="btn btn-primary mt-4">Registrar</button>
  </form>
</template>