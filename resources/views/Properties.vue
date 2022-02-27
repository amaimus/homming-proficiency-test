<template>
  <div class="flex justify-center" >
    <PropertiesTable />
  </div>
</template>
<script>
import PropertiesTable from '../components/properties/PropertiesTable.vue';

export default {
  name: 'Properties',
  components: { PropertiesTable },
};
</script>
