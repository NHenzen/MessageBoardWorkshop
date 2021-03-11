<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Message Board
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-2" class="relative-position">
      <div class="text-center q-pa-md">
        <q-avatar size="80px">
          <q-img :src="getProfilePic" alt="Avatar"/>
        </q-avatar>
        <div class="q-mt-sm">
          {{getEmail}}
        </div>
      </div>

      <q-list>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="forum"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>All messages</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/my-messages" exact>
          <q-item-section avatar>
            <q-icon name="mdi-message-text-outline"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>My messages</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <img src="https://mediacentrumwindesheim.nl/wp-content/themes/mediacentrum/images/logo-2019.svg" height="100px"
           class="absolute-bottom q-pa-sm">
    </q-drawer>

    <q-page-container>
      <!--- This is where children components/pages will be shown. --->
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {
  QBtn,
  QCard,
  QHeader,
  QIcon,
  QItem,
  QItemLabel,
  QItemSection,
  QLayout,
  QList,
  QMenu,
  QPage,
  QPageContainer,
  QToolbar,
  QToolbarTitle
} from 'quasar'

  export default {
    components: {
      QHeader,
      QPageContainer,
      QItemLabel,
      QItemSection,
      QItem,
      QList,
      QLayout,
      QToolbar,
      QToolbarTitle,
      QIcon
    },
    name: 'MyLayout',

    data () {
      return {
        leftDrawerOpen: true
      }
    },

    computed: {
      getEmail () {
        return this.$store.getters['user/getEmail']
      },

      getProfilePic () {
        return `https://api.adorable.io/avatars/${this.getEmail}`
      }
    },

    created () {
      if (!this.getEmail) this.showDialog()
    },

    methods: {
      showDialog () {
        this.$q.dialog({
          title: 'Enter your email',
          message: 'Please enter your email address',
          prompt: {
            model: '',
            type: 'email'
          },
          persistent: true
        }).onOk((data) => {
          this.setEmail(data)
        })
      },

      setEmail (data) {
        // if (this.$store.state.user.users.find())
        const check = this.$store.state.user.users.find(u => u.email === data)
        if (check) {
          this.$q.notify({
            type: 'negative',
            message: 'Email in use'
          })
          this.showDialog()
          return
        }

        this.$store.dispatch('user/setEmail', data)
      }
    }
  }
</script>
