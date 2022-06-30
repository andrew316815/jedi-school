<template lang="pug">
.subjects-page
    h1.subjects-page__title Предметы
    .subjects-page__subjects.subject
      .subject__item(
        v-for="subject, idx in subjects"
        :key="idx"
      ) 
        h2.subject__name {{ subject.name }}
        .subject__progress {{ subject.progress }}
</template>

<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import store from '@/store'

const subjects = computed( () => store.getters.subjects )

</script>

<style lang="sass" scoped>
.subjects-page
  &__title
    text-align: center
    margin-top: 0px

.subject
  &__item
    margin-top: 10px
    display: flex
    align-items: center
    justify-content: space-between
    border: 1px solid black
    padding: 0px 10px
  &__progress
    border: 1px solid black
    padding: 15px 8px
    border-radius: 50%
</style>