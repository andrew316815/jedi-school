<template lang="pug">
.timetable-page
    h1.timetable-page__title Расписание
    .timetable-page__modes
      router-link(
        to="/timetable"
        v-slot="{isExactActive}"
        )
        .timetable-page__mode( :class="{active: isExactActive}" ) Занятия
      router-link(
        to="/timetable/missions"
        v-slot="{isExactActive}"
        )
        .timetable-page__mode( :class="{active: isExactActive}" ) Миссии
    router-view
</template>

<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import SubjectItem from '@/components/SubjectItem.vue'
import store from '@/store'

const subjects = computed( () => store.getters.subjects )

</script>

<style lang="sass" scoped>
.timetable-page
  &__title
    text-align: center
    margin-top: 0px
  &__modes
    display: flex
    justify-content: center
  &__mode
    padding: 10px 20px
    border: 1px solid black
    background-color: white
    color: black

.active
  background-color: #cccccc

.content
  &__title
    text-align: center
</style>