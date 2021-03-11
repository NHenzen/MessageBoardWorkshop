import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v4/mdi-v4.css'
import { Quasar, Dialog } from 'quasar'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)

Vue.use(Quasar, {
  config: {},
  plugins: {
    Dialog
  }
 })
