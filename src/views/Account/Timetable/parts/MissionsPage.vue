<template lang="pug">
.missions-page
    h3.missions-page__title Миссии на неделю
    .missions-page__warning Доступных миссий нет, приходите позже ..
</template>

<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import SubjectItem from '@/components/SubjectItem.vue'
import store from '@/store'

const subjects = computed( () => store.getters.subjects )

</script>

<style lang="sass" scoped>
.missions-page
  text-align: center
</style>