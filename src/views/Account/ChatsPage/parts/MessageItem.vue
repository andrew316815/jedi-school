<template lang="pug">
.message-item
    .message-item__content
      .message-item__info
        img.message-item__photo( src='@/assets/icons/controls/teacher1.jpg' )
        .message-item__name {{ message.name }}
      .message-item__message {{ message.message }}
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
  margin-bottom: 15px
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