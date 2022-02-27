<template>
  <thead>
    <tr>
      <th class="w-16">
        <CustomInput
          title="Id"
          v-model="currentFilters.id"
          type="number"
          @input-updated="filtersUpdated('id', $event)"
        />
      </th>
      <th>
        <CustomInput
          title="Owner"
          v-model="currentFilters.userId"
          @input-updated="filtersUpdated('userId', $event)"
        />
      </th>
      <th class="w-24">
        <CustomSelect
          title="Type"
          :options="propertyTypes"
          v-model="currentFilters.typeId"
          @input-updated="filtersUpdated('typeId', $event)"
        />
      </th>
      <th>
        <CustomInput
          title="Name"
          @input-updated="filtersUpdated('name', $event)"
        />
      </th>
      <th class="w-36">
        <CustomInput
          title="Rented From"
          disabled
          @input-updated="filtersUpdated('rentedFrom', $event)"
        />
      </th>
      <th class="w-36">
        <CustomInput
          title="Rented To"
          disabled
         @input-updated="filtersUpdated('rentedTo', $event)"
        />
      </th>
      <th class="w-36">
        <CustomSelect
          title="Availability"
          :options="[{name: 'Available'}, {name:'Rented Out'}]"
          @input-updated="filtersUpdated('availability', $event)"
        />
      </th>
    </tr>
  </thead>
</template>

<script>
import CustomInput from '../shared/CustomInput.vue';
import CustomSelect from '../shared/CustomSelect.vue';

export default {
  name: 'PropertiesFilters',
  components: {
    CustomInput,
    CustomSelect,
  },
  props: {
    users: {
      type: Array,
      default: () => [],
    },
    propertyTypes: {
      type: Array,
      default: () => [],
    },
    filters: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    currentFilters: {
      id: null,
      userId: null,
      typeId: null,
      name: null,
      rentedFrom: null,
      rentedTo: null,
      availability: null,
    },
  }),
  methods: {
    filtersUpdated(key, value) {
      const filterValue = value === '' ? null : value;
      this.$emit('filters-updated', { key, value: filterValue });
    },
  },
  watch: {
    filters(newValue) {
      this.currentFilters = newValue;
    },
  },
};
</script>
