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
          title="User"
          v-model="currentFilters.userName"
          @input-updated="filtersUpdated('userName', $event)"
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
          v-model="currentFilters.name"
          @input-updated="filtersUpdated('name', $event)"
        />
      </th>
      <th class="w-36">
        <CustomInput
          title="Rented From"
          disabled
        />
      </th>
      <th class="w-36">
        <CustomInput
          title="Rented To"
          disabled
        />
      </th>
      <th class="w-36">
        <CustomSelect
          title="Availability"
          v-model="currentFilters.availability"
          :options="availabilityOptions"
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
      userName: null,
      typeId: null,
      name: null,
      availability: null,
    },
    availabilityOptions: [
      { id: 1, name: 'Available' },
      { id: 2, name: 'Rented Out' },
    ],
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
