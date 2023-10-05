<script setup lang="ts">
  import { computed } from 'vue';
import Auth from './Auth.vue';
  import { useAuthStore } from '@/stores/auth';

  const store = useAuthStore();
  const homeLink = computed(() => store.authenticated ? '/home' : '/');
</script>

<template>
  <div id="header">
    <h1>I am the Header Component</h1>
    <h2>
      <slot name="subtitle"></slot>
    </h2>

    <Auth />

    <slot name="slogan"></slot>

    <p>
      <router-link v-bind:to="homeLink">Home</router-link> &nbsp;
      <router-link to="/about/pirate">About Pirates</router-link> &nbsp;
      <router-link to="/about/hipster">About Hipster</router-link>
    </p>
  </div>
</template>

<style scoped>
  #header {
    border: 0.25rem solid #ccc;
    border-radius: 1rem;
    padding: 0 1rem;
  }

  h1 {
    color: steelblue;
  }
</style>
