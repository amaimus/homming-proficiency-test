<template>
  <div class="w-full">
    <label
      class="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-state"
    >
      {{ title }}
    </label>
    <div class="relative">
      <select
        v-model="currentValue"
        class="
          block
          appearance-none
          w-full
          bg-gray-200
          border border-gray-200
          text-gray-700
          py-1
          px-2
          rounded
          leading-tight
          focus:outline-none
          focus:border-gray-500
        "
        id="grid-state"
        @change="inputUpdated"
      >
        <option selected></option>
        <option
          v-for="(option, key) in options"
          :key=key
          :value="option.id"
        >
          {{ option.name | capitalize}}
        </option>
      </select>
      <div
      class="
        pointer-events-none
        absolute
        inset-y-0
        right-0
        flex
        items-center
        px-2 text-gray-700
      ">
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    title: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    currentValue: null,
  }),
  watch: {
    value(newValue) {
      const selectedOption = this.options.find((option) => option.id === +newValue);
      this.currentValue = selectedOption
        ? this.currentValue = selectedOption.id
        : null;
    },
  },
  methods: {
    inputUpdated($event) {
      this.$emit('input-updated', $event.target.value);
    },
  },
};
</script>
