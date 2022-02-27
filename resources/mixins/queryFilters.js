export default {
  methods: {
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
