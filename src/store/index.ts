import { ChatFriend, MessageItem } from '@/types'
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    authHeader: '',
    url: 'http://labvm-42-12.itmo-lab.cosm-lab.science:8080/',
    hasError: false,
    chatFriend: {} as ChatFriend,
    user: {
      name: 'Кайло Рен',
      grade: '2 курс',
      mission: {
        name: 'Татуин',
        tasks: [ 'Спасение жителей', 'Поиск бандитов', 'Разрешение конфликта' ]
      },
      progress: [
        {
          name: 'Владение силой',
          value: '50%'
        },
        {
          name: 'Дуэль',
          value: '50%'
        },
        {
          name: 'Дипломатия',
          value: '50%'
        },
        {
          name: 'История',
          value: '50%'
        },
      ],
      force: {
        name: 'Вы близки к темной стороне',
        value: 60
      },
    },
    chats: [
      {
        name: 'Obi',
        img: 'teacher1.jpg',
        message: 'Привет, как прошла операция на Татуине? Обнаружили новый конфликт, нужна твоя помощь!'
      },
    ],
    subjects: [
      {
        name: 'Дуэль',
        teacher: 'Йода',
        img: 'test',
        date: '09.06',
        time: '14:00',
        classroom: 'Храм Джедаев, 123 ауд.',
        progress: '15%'
      },
      {
        name: 'История',
        teacher: 'Люк Скайуокер',
        img: 'test',
        date: '10.06',
        time: '15:00',
        classroom: 'Храм Джедаев, 243 ауд.',
        progress: '38%'
      },
      {
        name: 'Дипломатия',
        teacher: 'Палпатин',
        img: 'test',
        date: '11.06',
        time: '15:00',
        classroom: 'Храм Джедаев, 412 ауд.',
        progress: '95%'
      },
    ],
    login: '',
    password: '',
    messages: [] as Array<MessageItem>
  },
  getters: {
    user: ( state ) => {
      return state.user
    },
    chats: ( state ) => {
      return state.chats
    },
    subjects: ( state ) => {
      return state.subjects
    },
    header: ( state ) => {
      return btoa( state.login + ':' + state.password )
    },
    messages: ( state ) => {
      return state.messages
    },
    hasError: ( state ) => {
      return state.hasError
    }
  },
  mutations: {
    setParams( state, authheader: string ) {
      state.authHeader = authheader
    },
    setMessages( state, params: Array<MessageItem> ) {
      state.messages = params
    },
    setError( state ) {
      state.hasError = true
    },
    setChatFriend( state, chatFriend: ChatFriend ) {
      state.chatFriend = chatFriend
    }
  },
  actions: {
    async logIn( state, authHeader: string ) {
      this.commit( 'setParams', authHeader )
      try {
        const response = await fetch( `${this.state.url}me`, {
          headers: {
            'Authorization': `Basic ${authHeader}`
          }
        })
      } catch ( e ) {
        console.log( e )
        this.commit( 'setError', e )
      }
    },
    async getUsers( state ) {
      try {
        const response = await fetch( `${this.state.url}users`, {
          headers: {
            'Authorization': `Basic ${this.state.authHeader}`
          }
        })
        const result = await response.json()
        this.commit( 'setChatFriend', result[0])
      } catch ( e ) {
        console.log( e )
      }
    },
    async getMessages( state ) {
      try {
        const response = await fetch( `${this.state.url}messages?destId=${this.state.chatFriend.id}`, {
          headers: {
            'Authorization': `Basic ${this.state.authHeader}`
          }
        })
        const result = await response.json()
        this.commit( 'setMessages', result )
      } catch ( e ) {
        console.log( e )
      }
    },
    async sendMessage( state, message: string ) {
      try {
        const resp = await axios.post( `${this.state.url}messages`, {
          text: message,
          destId: this.state.chatFriend.id
        }, {
          headers: {
            'Authorization': `Basic ${this.state.authHeader}`
          }
        })
        await this.dispatch( 'getMessages' )
      } catch ( e ) {
        console.log( e )
      }
    }
  },
  modules: {},
})
