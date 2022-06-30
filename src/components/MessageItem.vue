<template lang="pug">
.message-item
    .message-item__from От: {{ message.sender.username }}
    .message-item__to Кому: {{ message.dest.username }}
    .message-item__to Текст: {{ message.text }}
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  message: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

</script>

<style lang="sass" scoped>
.message-item
  border: 1px solid black
  padding: 3px
</style>