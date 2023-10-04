<script setup lang="ts">
  import {ref, computed} from 'vue';
  import Header from '@/components/Header.vue';

  const message = ref('Hello 6.1040 Fall 2023!');

  const reversedMsg = computed(() => {
    return message.value.split('').reverse().join('');
  });

  const colors = ref([
    {value: 0}, 
    {value: 0}, 
    {value: 0}
  ]);

  const rgb = ref('rgb(0, 0, 0)');

  function setColor() {
    const colorVal = colors.value.map(c => c.value); // [0, 0, 0]
    rgb.value = `rgb(${colorVal.join(', ')})`;
  }

  const cartoons = ref([
    {
      title: "ThunderCats",
      desc: "ThunderCats is an American media franchise, featuring a fictional group of cat-like humanoid aliens.",
      votes: {yay: 7, nay: 3}
    },
    {
      title: "Captain Planet",
      desc: "Our world is in peril. Gaia, the spirit of the Earth, can no longer stand the terrible destruction plaguing our planet. She sends five magic rings to five special young people.",
      votes: {yay: 8, nay: 2}
    },
    {
      title: "Top Cat",
      desc: "The title character is the leader of a gang of Manhattan alley cats who constantly hatch get-rich-quick schemes through scams, but most of them usually backfire.",
      votes: {yay: 1, nay: 9}
    },
    {
      title: "Dexter's Labratory",
      desc: "The series follows Dexter, an enthusiastic boy-genius with a hidden science laboratory in his room full of inventions, which he keeps secret from his clueless parents.",
      votes: {yay: 6, nay: 4}
    }
  ]);

</script>

<template>  
  <Header />

  <h1>
    {{ message }}
  </h1>

  <p>
    {{ reversedMsg }}
  </p>

  <h2>Two-way Data Bind</h2>

  <ol>
    <li>Changing a reactive variable (e.g., in JavaScript/TypeScript) automatically re-render the DOM</li>
    <li>Manipulating a DOM element (e.g., a textbox/slider/etc.) automatically update a reactive variable</li>
  </ol>

  <p>
    1: <input type="text" 
          v-bind:value="message" />
  </p>

  <p>
    2: <input type="text" 
          v-on:input="event => message = event.target.value" />
  </p>

  <p>
    1 & 2: <input type="text" v-model="message" />
  </p>
  
  <div v-bind:style="{background: rgb}">
    <p v-for="c in colors">
      <input type="range" min="0" max="255" step="1" 
        v-model="c.value"> {{ c.value }}
    </p>

    <button v-on:click="setColor">Set Color</button>
  </div>

</template>

<style>

</style>
