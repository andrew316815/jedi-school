<template lang="pug">
.classes-page
    h3.classes-page__title Занятия на неделю
    .classes-page__subjects.subject
      .subject__item(
        v-for="subject, idx in subjects"
        :key="idx"
      )
        SubjectItem( :subjectItem="subject" )
</template>

<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import SubjectItem from '@/components/SubjectItem.vue'
import store from '@/store'

const subjects = computed( () => store.getters.subjects )

</script>

<style lang="sass" scoped>
.classes-page
  &__title
    text-align: center
</style>