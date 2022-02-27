<template>
  <div class="mt-5 p-6 shadow-lg max-w-screen-xl">
    <h1 class="text-2xl mb-3"> Properties List</h1>
    <table>
      <PropertiesFilters
        :users="users"
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
      availability: null,
    },
    currentProperties: [],
  }),
  methods: {
    filtersUpdated({ key, value }) {
      const filterPrevValue = this.filters[key];
      this.filters[key] = value;
      if (filterPrevValue !== value) {
        this.filterProperties();
        this.updateQuery();
      }
    },
    getQueryFromUrl() {
      const { query } = this.$route;
      const updatedFilters = { ...this.filters };
      const filtersAvailable = Object.keys(this.filters);
      filtersAvailable.map((filterId) => {
        if (query[filterId]) {
          updatedFilters[filterId] = query[filterId];
        }
        return '';
      });
      this.filters = updatedFilters;
      this.filterProperties();
    },
    updateQuery() {
      const query = {};
      Object.keys(this.filters).map((filterKey) => {
        if (this.filters[filterKey]) {
          query[filterKey] = this.filters[filterKey];
        }
        return '';
      });
      const queryStringified = JSON.parse(JSON.stringify(query));
      this.$router.replace({
        name: this.$route.name,
        params: this.$route.params,
        query: queryStringified,
      });
    },
  },
  mounted() {
    this.getQueryFromUrl();
  },
};
</script>
