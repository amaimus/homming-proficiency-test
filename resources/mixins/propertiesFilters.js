export default {
  methods: {
    filterData() {
      let currentProperties = [...this.properties];
      const filtersKeys = Object.keys(this.filters);
      filtersKeys.map((filterKey) => {
        if (this.filters[filterKey]) {
          currentProperties = currentProperties.filter(
            (property) => this.validate(property, filterKey),
          );
        }
        return '';
      });
      this.currentProperties = currentProperties;
    },
    validate(property, filterKey) {
      if (filterKey === 'userName') {
        const user = this.users.find((currentUser) => currentUser.id === property.userId);
        const name = user.name.toLowerCase();
        const filterValue = this.filters.userName.toLowerCase();
        return name.includes(filterValue);
      }
      if (filterKey === 'name') {
        const name = property.name.toLowerCase();
        const filterValue = this.filters.name.toLowerCase();
        return name.includes(filterValue);
      }
      if (filterKey === 'rentedFrom' || filterKey === 'rentedTo') {
        const propertyDate = this.getTimeFormat(new Date(property[filterKey]));
        const filterDate = this.getTimeFormat(new Date(this.filters[filterKey]));
        return propertyDate === filterDate;
      }
      if (filterKey === 'availability') {
        const { rentedTo } = property;
        const isAvailable = rentedTo === null || rentedTo < new Date();
        return this.filters.availability === '1'
          ? isAvailable
          : !isAvailable;
      }
      return property[filterKey] === +this.filters[filterKey];
    },
    getTimeFormat(timeStamp) {
      return timeStamp
        ? new Intl.DateTimeFormat('es-ES').format(timeStamp)
        : '-';
    },
  },
};
