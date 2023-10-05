<script setup  lang="ts">
  import {ref, defineProps, defineEmits} from 'vue';
  import { useAuthStore } from '@/stores/auth';

  const props = defineProps(['yay', 'nay']);

  const emit = defineEmits(['voted']);

  const store = useAuthStore();

  // Props are readonly. To be able to change the votes,
  // we need to derive new reactive variables.
  const yay = ref(props.yay);
  const nay = ref(props.nay);

  function voteYay() {
    yay.value++;
    emit('voted', yay.value, nay.value);
  }

  function voteNay() {
    nay.value++;
    emit('voted', yay.value, nay.value);
  }
</script>

<template>
  <p v-if="store.authenticated">
    <button v-on:click="voteYay">🥳 ({{ yay }})</button>
    <button v-on:click="voteNay">🤢 ({{ nay }})</button>
  </p>
</template>

<style scoped>
  button {
    background: transparent;
    border-radius: 1rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  button:hover {
    background: rgb(246, 246, 189);
  }
</style>
