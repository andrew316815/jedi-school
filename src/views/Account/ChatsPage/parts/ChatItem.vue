<template lang="pug">
.chat-item
    .chat-item__content
      .chat-item__info
        img.chat-item__photo( src='@/assets/icons/controls/teacher1.jpg' )
        .chat-item__name {{ chatItem.name }}
      .chat-item__message {{ chatItem.message }}
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  chatItem: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

</script>

<style lang="sass" scoped>
.chat-item
  margin-top: 15px
  padding: 2%
  border: 1px solid black
  &__content
    display: flex
  &__message
    margin-left: 10px
    font-size: 15px
  &__info
    text-align: center
img
  width: 80px
  height: 80px
</style>