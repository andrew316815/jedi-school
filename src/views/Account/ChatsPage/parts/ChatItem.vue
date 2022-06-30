<template lang="pug">
.chat-item
    .chat-item__content
      .chat-item__message( v-for="mess in messages" )
        MessageItem(
          :message="mess"
        )
    .chat-item__footer
      ElInput( v-model="message" )
      ElButton.chat-item__button( @click="sendMessage" ) Отправить
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import MessageItem from '@/components/MessageItem.vue'
import { ElInput, ElButton, ElCheckbox } from 'element-plus'
import store from '@/store'
import axios from 'axios'

const base64 = computed( () => store.getters.header )
const message = ref( '' )

const messages = computed( () => store.getters.messages )

const url = ref( 'http://labvm-42-12.itmo-lab.cosm-lab.science:8080/' )

const sendMessage = async () => {
  await store.dispatch( 'sendMessage', message.value )
  message.value = ''
}

</script>

<style lang="sass" scoped>
.chat-item
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 88%
  max-height: 89%
  overflow: auto
  &__content
    max-height: 100%
    overflow: auto
  &__footer
    display: flex
  &__message
    margin-bottom: 15px
  &__button
    margin-left: 10px
</style>