<script setup>
import { sanityClient } from "sanity:client";
import { reactive } from 'vue';

const data = await sanityClient.fetch(`*[_type == '"category']`)

const getCategories = () => {
  console.log("Hfu")
  data.map(c => {
    console.log(c);
  })
}

</script>

<template>
  <ul>
    hsi
    {{getCategories()}}
  </ul>
</template>

<style scoped>

</style>

