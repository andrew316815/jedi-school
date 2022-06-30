<template lang="pug">
.chats-page
    h1.chats-page__title Чаты
    .chats-page__chats.chat( v-if="!isChatOpened" )
      .chat__item(
        v-for="chat, idx in chats"
        :key="idx"
      )
        ChatItem(
          :chatItem="chat"
          @click="openChat"
          )
    ChatElement( v-else )
</template>

<script setup lang="ts">
import { computed, defineComponent, ref } from 'vue'
import ChatItem from './parts/ChatItem.vue'
import ChatElement from './parts/ChatElement.vue'
import store from '@/store'

const chats = computed( () => store.getters.chats )

const isChatOpened = ref( false )

const openChat = () => {
  isChatOpened.value = true
}

</script>

<style lang="sass" scoped>
.chats-page
  height: 100%
  &__title
    text-align: center
    margin-top: 0px
</style>