<template lang="pug">
.login-page
    .login-page__form
      .login-page__name Авторизация в Школу Джедаев
      .input
        .input__name Логин
        el-input(
          v-model="login"
          placeholder="Введите логин"
        )
      .input
        .input__name Пароль
        el-input(
          v-model="password"
          type="password"
          placeholder="Введите пароль"
        )
      el-checkbox(
        label="Запомнить пользователя"
        size="large"
      )
      el-button.login-page__button( @click="toLogin" ) Войти
      .input__warning( v-if="hasError" ) Неправильный логин или пароль
      a( href="#" ) Забыли пароль?
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { ElInput, ElButton, ElCheckbox } from 'element-plus'
import store from '@/store'

const router = useRouter()
const login = ref( 'anakin' )
const hasError = computed( () => store.getters.hasError )
const password = ref( 'qwerty' )

const base64 = computed( () => btoa( login.value + ':' + password.value ) )

const toLogin = async () => {
  // await store.dispatch( 'logIn', base64 )
  // if ( !hasError.value ) 
  router.push( '/profile' )
}

</script>

<style lang="sass" scoped>
.login-page
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  &__form
    display: flex
    justify-content: center
    flex-direction: column
    text-align: center
    width: 80%
  &__button
    width: 100%

.input
  margin-top: 25px
  text-align: left
  &__warning
    color: red
    font-size: 12px

a
 color: #293b6e
 margin-top: 15px

</style>
