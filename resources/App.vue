<template>
  <div id="app" class="flex justify-center" >
    <PropertiesTable />
  </div>
</template>

<script>
import PropertiesTable from './components/properties/PropertiesTable.vue';

import './main.css';

export default {
  name: 'App',
  components: { PropertiesTable },
};
</script>
