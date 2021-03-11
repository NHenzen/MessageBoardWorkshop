import {uid} from 'quasar'

export class MyMessage {
  constructor (title, text, user) {
    this.id = uid()
    this.title = title
    this.text = text
    this.user = user
    this.upvotes = [user]
    this.downvotes = []
    this.isEdited = false
  }
}
