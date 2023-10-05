import {ref, computed} from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const email = ref('');

  const authenticated = ref(false);

  const router = useRouter();

  function toggleAuth() {
    authenticated.value = email.value !== '' && !authenticated.value;
    if (authenticated.value) router.push('/home')
    else router.push('/');
  }

  return {email, authenticated, toggleAuth}
});
