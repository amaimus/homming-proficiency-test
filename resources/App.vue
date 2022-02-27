<template>
  <div id="app">
    <section class="absolute w-full h-full" style="z-index:-1">
      <div class="h-1/4 w-full bg-green-400"/>
      <div class="h-3/4 w-full"/>
    </section>
    <main class="block">
      <router-view/>
    </main>
  </div>
</template>

<script>
import './main.css';

export default {
  name: 'App',
};
</script>
