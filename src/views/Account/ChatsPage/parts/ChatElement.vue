<template lang="pug">
.chat-element
    .chat-element__content
      .chat-element__messages( v-for="mess in messages" )
        MessageItem(
          :message="mess"
        )
    .chat-element__footer
      ElInput( v-model="message" )
      ElButton( @click="sendMessage" ) Отправить
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
}

</script>

<style lang="sass" scoped>
.chat-element
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
</style>