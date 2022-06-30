<template lang="pug">
.basic-page
    .basic-page__content
      router-view
    .basic-page__footer
      router-link(
        to="/profile"
        v-slot="{isExactActive}"
        )
        ButtonItem.basic-page__button(
          :isActive="isExactActive"
          label="Профиль"
          )
      router-link(
        to="/chats"
        v-slot="{isExactActive}"
      )
        ButtonItem.basic-page__button(
          :isActive="isExactActive"
          label="Чаты"
          )
      router-link(
        to="/timetable"
        v-slot="{isActive}"
        )
        ButtonItem.basic-page__button(
          :isActive="isActive"
          label="Расписание"
          )
      router-link(
        to="/subjects"
        v-slot="{isExactActive}"
        )
        ButtonItem.basic-page__button(
          :isActive="isExactActive"
          label="Предметы"
          )
</template>

<script setup lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonItem from '@/components/ButtonItem.vue'
import store from '@/store'

const getContent = async () => {
  await store.dispatch( 'getUsers' )
  await store.dispatch( 'getMessages' )
}

getContent()

</script>

<style lang="sass" scoped>
.basic-page
  height: 100vh
  &__content
    height: 75%
    padding: 2% 5% 0px 5%
  &__footer
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 10px 10px
    border-top: 1px solid #2d4642
    padding: 5% 5% 0% 5%

.active
  background-color: #cccccc
</style>
