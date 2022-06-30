<template lang="pug">
.button-item
    label( v-if="name.length" )
      h5.button-item__name {{ name }}
    button.button-item__el( :class="{ active: isActive }" ) {{ label }}
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
    default: 'Поиск'
  },
  name: {
    type: String,
    required: false,
    default: ''
  },
  isActive: {
    type: Boolean,
    required: false,
    default: false
  }
})

</script>

<style lang="sass" scoped>
.button-item
  &__name
    margin-bottom: 10px
  &__el
    padding: 30px 15px
    border: none
    border-radius: 3px
    color: #000000
    cursor: pointer
    width: 100%

.active
  background-color: #cccccc
</style>
