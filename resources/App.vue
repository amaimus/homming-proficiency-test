<template>
  <div id="app">
    WORK HERE
    <h1 class="text-3xl font-bold underline">
      Hello world! Tailwind test
    </h1>
  </div>
</template>

<script>
import { users, propertyTypes, properties } from '@/mocks/api';
import './main.css';

export default {
  name: 'App',
  data: () => ({
    users,
    propertyTypes,
    properties,
  }),
};
</script>
