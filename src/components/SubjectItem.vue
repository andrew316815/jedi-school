<template lang="pug">
.subject-item
    .subject-item__content
      .subject-item__info
        .subject-item__name {{ subjectItem.name }}
        img.subject-item__photo( src='@/assets/icons/controls/subject.jpeg' )
      .subject-item__params
        .subject-item__date Следующее занятие: {{ subjectItem.date }}
        .subject-item__time Время занятия: {{ subjectItem.time }}
        .subject-item__classroom Аудитория: {{ subjectItem.classroom }}
        .subject-item__teacher Преподаватель: {{ subjectItem.teacher }}
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  subjectItem: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

</script>

<style lang="sass" scoped>
.subject-item
  margin-top: 15px
  padding: 2%
  border: 1px solid black
  &__content
    display: flex
  &__info
    display: flex
    flex-direction: column
    justify-content: space-between
    text-align: center
  &__params
    border: 1px solid black
    padding: 5px
    margin-left: 10px
    font-size: 13px
    width: 100%
    line-height: 20px
  &__name
    font-size: 14px
    margin-bottom: 5px

img
  width: 80px
  height: 80px
</style>