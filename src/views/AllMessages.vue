<template>
  <q-page>
    <div class="q-pa-lg">
      <div class="row q-col-gutter-sm items-center">
        <div>
          <h4>All messages</h4>
        </div>

        <q-input filled label="Search by title" v-model="search"/>

      </div>

      <div class="row q-col-gutter-sm">
        <!---- TODO OPDRACHT 1c ---->
        <!---- Zorg ervoor dat je een list gaat maken van de <div> hieronder. Loop door de messages heen ---->
        <!---- Daarna ga je in de div de <message> component neerzetten. Bind het message object en ---->
        <!---- bind de key aan de message id. ---->
        <div class="col-3">
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  import Message from '../components/Message'
  import defaultMessages from '../assets/messages'

  export default {
    name: 'MessageBoard',


    components: { Message },

    data () {
      return {
        search: ''
      }
    },

    computed: {
      messages () {
        // TODO opdracht 2a
        // Haal door middel van de getter alle messages op. Voer pas opdracht 3 uit als wij het zeggen.
        return defaultMessages
      },

      filteredMessages () {
        // TODO opdracht 3here
        // GEBRUIK DEZE NOG NIET BIJ OPDRACHT 2, JIJ PANNENKOEK
        // Gebruik de ES6 "filter()" functie waarbij je gaat filteren welke message titles
        // overeenkomen met de search model. Vergeet in de <template> niet de messages te vervangen door filteredMessages
        // Tip: gebruik ook de ES6 functie "includes()".
        return ''
      }
    }
  }
</script>

<style lang="stylus">
  #message-dialog {
    min-width 40vw
  }
</style>
