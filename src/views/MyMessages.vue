<template>
  <q-page>
    <div class="q-pa-lg">
      <div class="row q-col-gutter-sm items-center">
        <div>
          <h4>My messages</h4>
        </div>

        <div class="q-ml-md">
          <q-btn @click="openDialog" color="primary" label="Create a new message"/>
        </div>
      </div>

      <!------- MY MESSAGES --------->
      <div class="row q-col-gutter-sm">
        <div class="col-3" v-for="msg in messages" :key="msg.id">
          <message :message="msg" :key="msg.title"/>
        </div>
      </div>
    </div>

    <!------- POP UP FOR CREATING NEW MESSAGE --------->
    <q-dialog v-model="show">
      <q-card id="message-dialog">
        <q-card-section>
          <h5 class="no-margin">Your message</h5>
        </q-card-section>

        <q-card-section>
          <q-input v-model="newMessage.title" maxlength="128" counter filled label="Title"/>

          <q-input v-model="newMessage.text" maxlength="1200" counter filled type="textarea" label="Message"/>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Cancel" @click="show = false"/>
          <!---- TODO OPDRACHT 4a ----->
          <!---- Maak zelf een nieuwe button met de label "Create" ---->
          <!---- Koppel de functie createNewMessage() aan de nieuwe create button ---->
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
  import Message from '../components/Message'
  import {MyMessage} from '../models/MyMessage'

  export default {
    name: 'MessageBoard',

    components: {Message},

    data () {
      return {
        newMessage: {
          title: '',
          text: ''
        },
        show: false
      }
    },

    computed: {
      messages () {
        return this.$store.getters['message/getMyMessages']
      },
      disable () {
        return !this.newMessage.title || !this.newMessage.text
      }
    },

    methods: {
      openDialog () {
        this.newMessage.title = this.newMessage.text = ''
        this.show = true
      },

      createNewMessage () {
        const user = this.$store.state.user.email

        // TODO OPDRACHT 4b
        // Maak hier een mesage object m.b.v. de MyMessage class. Geef aan de constructor de newMessage title,
        // newMessage text, en de user mee (in deze volgorde).

        // TODO OPDRACHT 4c
        // Roep hier de store action aan createMessage en geef message object mee.

        this.show = false
        this.newMessage.title = this.newMessage.text = ''
      }
    }
  }
</script>

<style lang="stylus">
  #message-dialog {
    min-width 40vw
  }
</style>
