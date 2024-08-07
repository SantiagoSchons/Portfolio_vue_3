<script setup>
import { RouterView } from 'vue-router'
import header_component from './components/header_component.vue' 

</script>

<template>
  <div class="container text-center">
    <header_component/>
    <RouterView/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: 'Orelo-sw-bi', serif;
}
body{
  background-color: #080808;
}
</style>