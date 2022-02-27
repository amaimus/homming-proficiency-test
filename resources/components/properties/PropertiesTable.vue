<template>
  <div class="mt-5 p-6 shadow-lg max-w-screen-xl">
    <h1 class="text-2xl mb-3"> Properties List</h1>
    <table>
      <PropertiesFilters
        :users="users"
        :propertyTypes="propertyTypes"
        @filters-updated="filtersUpdated"
      />
      <tbody>
        <PropertiesTableRow
          v-for="(property, key) in properties"
          :key="key"
          :property="property"
          :users="users"
          :propertyTypes="propertyTypes"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import { users, propertyTypes, properties } from '@/mocks/api';
import PropertiesTableRow from './PropertiesTableRow.vue';
import PropertiesFilters from './PropertiesFilters.vue';

export default {
  name: 'PropertiesTable',
  components: { PropertiesTableRow, PropertiesFilters },
  data: () => ({
    users,
    propertyTypes,
    properties,
    filters: {
      id: null,
      userId: null,
      typeId: null,
      name: null,
      rentedFrom: null,
      rentedTo: null,
      availability: null,
    },
  }),
  created() {
    console.log(this.$route.params);
  },
  methods: {
    filtersUpdated({ key, value }) {
      this.filters[key] = value;
      console.log(this.filters);
    },
  },
};
</script>
