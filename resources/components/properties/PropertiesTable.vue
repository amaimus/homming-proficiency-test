<template>
  <div class="mt-5 p-6 shadow-lg max-w-screen-xl">
    <h1 class="text-2xl mb-3"> Properties List</h1>
    <table>
      <PropertiesFilters
        :propertyTypes="propertyTypes"
        :filters="filters"
        @filters-updated="filtersUpdated"
      />
      <tbody>
        <PropertiesTableRow
          v-for="(property, key) in currentProperties"
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
import queryFilters from '../../mixins/queryFilters';
import propertiesFilters from '../../mixins/propertiesFilters';

export default {
  name: 'PropertiesTable',
  components: { PropertiesTableRow, PropertiesFilters },
  mixins: [queryFilters, propertiesFilters],
  data: () => ({
    users,
    propertyTypes,
    properties,
    filters: {
      id: null,
      userName: null,
      typeId: null,
      name: null,
      rentedFrom: null,
      rentedTo: null,
      availability: null,
    },
    currentProperties: [],
  }),
  methods: {
    filtersUpdated({ key, value }) {
      const filterPrevValue = this.filters[key];
      this.filters[key] = value;
      if (filterPrevValue !== value) {
        this.filterData();
        this.updateQuery();
      }
    },
  },
  mounted() {
    this.getQueryFromUrl();
  },
};
</script>
