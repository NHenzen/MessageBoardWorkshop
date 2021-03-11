<template>
  <q-card class="text-grey-8">
    <q-card-section>
      <div class="row items-center">
        <div class="col-11 text-bold" v-if="isEditing">
          <q-input label="Title" filled maxlength="128" v-model="copyMessage.title" counter/>
        </div>

        <div class="col-11 text-bold" v-else>
          <!---- TODO OPDRACHT 1a ----->
          <!---- Plaats binnen de <h6> de titel van de message --->

          <h6 class="no-margin" >
          </h6>
        </div>

        <div class="col-1">
          <q-btn icon="more_vert" dense flat v-if="isMyMessage">
            <q-menu>
              <q-list>
                <q-item clickable @click="edit">
                  <q-item-section avatar>
                    <q-icon size="18px" name="edit"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Edit</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable @click="deleteMessage">
                  <q-item-section avatar>
                    <q-icon color="red" size="18px" name="delete"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Delete</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
      <div>
        <small>Uploaded by {{copyMessage.user}}</small>
      </div>
    </q-card-section>

    <!------ MESSAGE ------->
    <q-card-section>
      <q-input label="Message" maxlength="1200" autogrow filled type="textarea" v-if="isEditing"
               counter v-model="copyMessage.text"/>

      <!---- TODO OPDRACHT 1b ----->
      <!---- Plaats binnen de <p> de text van de message --->
      <p v-else>
      </p>
    </q-card-section>

    <q-card-actions class="row justify-between items-center">
      <div class="text-italic text-grey-9">
        <small v-if="message.isEdited">[Edited]</small>
      </div>

      <div v-if="isEditing">
        <q-btn label="Cancel" @click="cancel" class="q-mr-sm"/>
        <q-btn color="primary" @click="saveMessage" label="Save"/>
      </div>

      <div v-else>
        <q-btn @click="upvote" dense flat icon="mdi-arrow-up-bold" :label="message.upvotes.length"
               :color="isUpvotedByMe ? 'secondary' : 'grey-10'"/>

        <q-btn @click="downvote" dense flat icon="mdi-arrow-down-bold" :label="message.downvotes.length"
               :color="isDownvotedByMe ? 'red' : 'grey-10'"/>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script>

  export default {
    name: 'message',

    props: {
      message: {
        type: Object,
        required: true,
        default: () => [{}]
      }
    },

    data () {
      return {
        isEditing: false,
        copyMessage: Object.assign({}, this.message)
      }
    },

    computed: {
      isUpvotedByMe () {
        return this.$store.getters['message/isUpvotedByMe'](this.message.id)
      },

      isDownvotedByMe () {
        return this.$store.getters['message/isDownvotedByMe'](this.message.id)
      },

      isMyMessage () {
        return this.message.user === this.$store.getters['user/getEmail']
      }
    },

    methods: {
      edit () {
        this.isEditing = true
      },

      saveMessage () {
        this.$store.dispatch('message/editMessage', this.copyMessage)
        this.isEditing = false
      },

      cancel () {
        this.copyMessage = Object.assign({}, this.message)
        this.isEditing = false
      },

      deleteMessage () {
        this.$store.dispatch('message/deleteMessage', this.message.id)
      },

      upvote () {
        if (this.isDownvotedByMe) this.downvote()
        this.$store.dispatch('message/upvote', this.message.id)
      },

      downvote () {
        if (this.isUpvotedByMe) this.upvote()
        this.$store.dispatch('message/downvote', this.message.id)
      }
    }
  }
</script>
