<template>
  <tr class="bg-cyan-500 hover:bg-green-50">
    <td class="px-1 py-2"> #{{ property.id }} </td>
    <td class="px-1 py-2"> {{ propertyUser }} </td>
    <td class="px-1 py-2"> {{ propertyType | capitalize }} </td>
    <td class="px-1 py-2"> {{ property.name }} </td>
    <td class="px-1 py-2"> {{ getTimeFormat(property.rentedFrom) }} </td>
    <td class="px-1 py-2"> {{ getTimeFormat(property.rentedTo) }} </td>
    <td class="px-1 py-2">
      <span :class="['font-bold', availabilityColor]">
        {{ availability}}
      </span>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'PropertiesTableRow',
  props: {
    property: {
      type: Object,
      default: () => {},
    },
    users: {
      type: Array,
      default: () => [],
    },
    propertyTypes: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    propertyUser() {
      const propertyUser = this.users.find((user) => user.id === this.property.userId);
      return propertyUser.name;
    },
    propertyType() {
      const propertyType = this.propertyTypes.find(
        (property) => property.id === this.property.typeId,
      );
      return propertyType.name;
    },
    availability() {
      const { rentedTo } = this.property;
      return (rentedTo === null || rentedTo < new Date())
        ? 'Available'
        : 'Rented out';
    },
    availabilityColor() {
      return this.availability === 'Available'
        ? 'text-green-500'
        : 'text-red-500';
    },
  },
  methods: {
    getTimeFormat(timeStamp) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return timeStamp
        ? new Intl.DateTimeFormat('es-ES', options).format(timeStamp)
        : '-';
    },
  },
};
</script>
