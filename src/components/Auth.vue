<script setup lang="ts">
  import md5 from 'md5';
  import {ref, computed} from 'vue';

  const email = ref('');

  const authenticated = ref(false);

  function toggleAuth() {
    authenticated.value = email.value !== '' && !authenticated.value;
  }

  const gravatar = computed(() => `http://www.gravatar.com/avatar/${md5(email.value)}`);
</script>

<template>
  <div id="auth">
    <img v-if="authenticated" v-bind:src="gravatar" width="50" />

    <input type="text" v-model="email" placeholder="email address" />

    <button v-if="!authenticated" v-on:click="toggleAuth">Login</button>

    <button v-if="authenticated" v-on:click="toggleAuth">Logout</button>
  </div>
</template>

<style scoped>
  #auth {
    width: 25vw;
    display: flex;
  }
</style>
