<template>
    <div class="input-container">

      <slot name="prefix"></slot>
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue"
        class="base-input"
      />
      <slot name="suffix"></slot>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
    placeholder: {
      type: String,
      default: 'Enter text'
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String,
      default: ''
    }
  })

  const emit = defineEmits(['update:modelValue'])

  const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
  }
  </script>
  
  <style scoped>

  </style>
  