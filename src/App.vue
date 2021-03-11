<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  import {db} from './services/firebase'

  export default {
    name: 'App',

    created () {
      this.$binding('messages', db.collection('messages')).then((messages) => {
        this.$store.dispatch('message/setMessages', messages)
      })
      this.$binding('persons', db.collection('persons')).then((persons) => {
        this.$store.dispatch('user/getUsers', persons)
      })
    }
  }
</script>
