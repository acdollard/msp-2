<script setup>
import { ref } from 'vue';
import {NavBar} from "../components/NavBar.astro"


const list =  ref([
  {
    name: 'Gong',
    slug: 'gong'
  }
]);

const updateList = (name, slug) => {

}

</script>

<template>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Main Street Percussion</title>
  </head>
  <body>
    <div>
    <!-- <li v-for="item in list" :key="item.slug">
      {{ item.name }}
    </li> -->
    </div>
    <NavBar />
    <slot />
  </body>
</html>
</template>

<style scoped>

</style>