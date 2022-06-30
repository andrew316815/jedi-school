<template lang="pug">
.profile-page
    h1.profile-page__title Профиль
    .profile-page__info
      h2.profile-page__name {{ user.name }}
      h3.profile-page__grade {{ user.grade }}
    .profile-page__mission.mission
      h3.mission__title Текущая миссия
      .mission__content
        .mission__planet
          img.mission__image( src="@/assets/icons/controls/planet.png" )
          .mission__name {{ user.mission.name }}
        .mission__tasks
          .mission__task(
            v-for="task, idx in user.mission.tasks"
            :key="idx"
            )
            el-checkbox( :label="task" )
    .profile-page__quality
      h3.quality__title Успеваемость
      .quality__item
        .quality(
          v-for="quality, idx in user.progress"
          :key="idx"
        )
          .quality__value {{ quality.value }}
          .quality__name {{ quality.name }}
    .profile-page__force.force
      h3.force__title Шкала силы
      .force__fake
        .force__scale
      .force__name {{ user.force.name + ': ' + user.force.value }}

</template>

<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import { ElCheckbox } from 'element-plus'
import store from '@/store'

const user = computed( () => store.getters.user )

const scaleWidth = computed( () => user.value.force.value + '%' )

</script>

<style lang="sass" scoped>
.profile-page
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-around
  &__name
    margin-top: 0px
  &__grade
    margin-bottom: 0px
  &__title
    margin: 0px
    text-align: center
  &__info
    text-align: center
  &__quality
    display: flex
    flex-direction: column
    justify-content: space-between

.mission
  border-top: 1px solid black
  border-bottom: 1px solid black
  padding: 10px 0px
  &__title
    margin-top: 0px
  &__name
    text-align: center
  &__content
   display: flex
   justify-content: space-between
   margin-top: 10px
  &__tasks
    display: flex
    flex-direction: column
  &__image
    width: 70px
    border-radius: 5px

.quality
  font-size: 14px
  &__item
    display: flex
    justify-content: space-between
    text-align: center
  &__title
    margin-top: 0px

.force
  border-top: 1px solid black
  padding: 10px 0px
  &__fake
    border: 1px solid black
    border-radius: 2px
    height: 25px
    width: 100%
    margin: 10px 0px
  &__scale
    height: 100%
    background-color: black
    width: v-bind(scaleWidth)

</style>