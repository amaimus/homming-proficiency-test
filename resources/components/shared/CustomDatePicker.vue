<template>
  <div class="w-full">
    <label
      class="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-first-name"
    >
      {{ title }}
    </label>
      <input
        v-model="currentValue"
        type="date"
        class="
          appearance-none
          block
          w-full h-full
          bg-gray-200
          text-gray-700
          rounded
          py-1
          px-2
          leading-tight
          focus:outline-none
        "
        placeholder="Select a date"
        :disabled="disabled"
        @change="$emit('input-updated', $event.target.value)"
      />
  </div>
</template>
<script>
export default {
  name: 'CustomInput',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    currentValue: null,
  }),
  watch: {
    value(newValue) {
      this.currentValue = newValue;
    },
  },
};
</script>
